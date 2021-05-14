import { PrismaClient } from ".prisma/client";
import { compare } from "bcrypt";
import { local_strategy } from "./strategy/local";

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const prisma = new PrismaClient()
passport.use(local_strategy);

passport.serializeUser(function (user: any, done: any) {
  done(null, user.id);
});

passport.deserializeUser(async function (id: any, done: any) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })
    if (!user) {
      return done("no user", null)
    }
    done(null, user)
  }
  catch (e) {
    done(e, null)
  }
});