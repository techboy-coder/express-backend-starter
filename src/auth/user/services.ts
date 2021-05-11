import { Prisma } from ".prisma/client";
import { PrismaClient } from ".prisma/client";
import { compare, hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { dto_user_in_register, dto_user_out_register } from "./interfaces";
import { user_in_login_validator, user_in_register_validator, user_out_register_validator } from "./validators";
const prisma = new PrismaClient()


// Make user
export async function create_user(req: Request, res: Response, next: NextFunction) {
  // Valid Input

  const { name, email, password, password_confirmation }: dto_user_in_register = await user_in_register_validator(req.body, next)

  // Hash Password
  const hashed_password = await hash(password, 10)

  try {
    // Make User
    const user_created = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed_password
      }
    })
    const output: dto_user_out_register = await user_out_register_validator(user_created, next)
    return res.send(output)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === 'P2002') {
        error.message = "Already registered.";
      }
    }
    next(error)
  }

}
// Login user
export async function login_user(req: Request, res: Response, next: NextFunction) {
  const { email, password } = await user_in_login_validator(req.body, next)
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })
  if (!user) {
    return next(Error("Wrong Credentials"))
  }
  const valid = await compare(password, user.password)
  if (!valid) {
    return next(Error("Wrong Credentials"))
  }
  res.send("Successful login")
}