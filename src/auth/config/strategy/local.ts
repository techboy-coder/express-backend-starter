import { PrismaClient } from ".prisma/client";
import { compare } from "bcrypt";

const LocalStrategy = require("passport-local").Strategy
const prisma = new PrismaClient()
export const local_strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordfield: "password"
  }, async function (username: string, password: string, done: any) {


    try {
      const user = await prisma.user.findFirst({
        where: {
          email: username
        }
      })

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const correct_password = await compare(password, user.password)
      if (!correct_password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      done(null, user)

    } catch (error) {
      return done(null, false, { message: error.message });
    }

  }
)