import { Prisma } from ".prisma/client";
import { PrismaClient } from ".prisma/client";
import { compare, hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { user_in_login_validator, user_in_register_validator, user_out_register_validator } from "./validators";
const prisma = new PrismaClient()


// Make user
export async function create_user(req: Request, res: Response, next: NextFunction) {
  // Valid Input

  const { name, email, password, password_confirmation } = await user_in_register_validator(req.body, next)

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
    const output = await user_out_register_validator(user_created, next)
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
  res.redirect("protected")
}

export async function delete_user(req: Request, res: Response, next: NextFunction) {
  // Valid Input
  const user: any = req.user
  console.log("%j", req.user);

  try {
    // Make User
    const user_deleted = await prisma.user.delete({
      where: {
        id: user.id
      }
    })
    console.log("%j", user_deleted);
    return res.send("Deleted")
  } catch (error) {
    next(error)
  }
  res.send("Deleted")
  next()
}