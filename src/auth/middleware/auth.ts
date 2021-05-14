import { NextFunction, Request, Response } from "express";

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next()
  }
  next(Error("Unauthorized"))
}