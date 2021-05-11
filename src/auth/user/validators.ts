import { NextFunction } from "express"
const _ = require("lodash");

const Joi = require("joi")


export const user_in_register_validator = (data: any, next: NextFunction) => {

  const user_in_register = Joi.object({
    name: Joi.string().alphanum().max(255).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(3).max(15).required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password'))
  })
  const { password, password_confirmation } = data
  if (!password_confirmation) {
    return next(Error("Add password_confirmation to json!"));
  }
  if (password !== password_confirmation) {
    return next(Error("Passwords don't match"));
  }


  if (_.isEmpty(user_in_register.validate(data).value)) {
    return next(Error("Please add required info as json object with the correct application type!"))
  }
  const valid = user_in_register.validate(data, { stripUnknown: true })
  if (valid.error) {
    return next(Error(valid.error));
  }
  return user_in_register.validate(data, { stripUnknown: true }).value

}


export const user_out_register_validator = (data: any, next: NextFunction) => {
  const user_out_register = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    email: Joi.string().email(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  })
  const valid = user_out_register.validate(data, { stripUnknown: true })
  if (valid.error) {
    return next(Error(valid.error));
  }
  return user_out_register.validate(data, { stripUnknown: true }).value

}


export const user_in_login_validator = (data: any, next: NextFunction) => {

  const user_in_login = Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(3).max(15).required()
  })
  const valid = user_in_login.validate(data, { stripUnknown: true })

  if (valid.error) {
    return next(Error(valid.error));
  }
  return valid.value
}