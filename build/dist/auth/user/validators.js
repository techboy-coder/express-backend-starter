"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_in_login_validator = exports.user_out_register_validator = exports.user_in_register_validator = void 0;
var _ = require("lodash");
var Joi = require("joi");
var user_in_register_validator = function (data, next) {
    var user_in_register = Joi.object({
        name: Joi.string().alphanum().max(255).required(),
        email: Joi.string().email().max(255).required(),
        password: Joi.string().min(3).max(15).required(),
        password_confirmation: Joi.string().required().valid(Joi.ref('password'))
    });
    var password = data.password, password_confirmation = data.password_confirmation;
    if (!password_confirmation) {
        return next(Error("Add password_confirmation to json!"));
    }
    if (password !== password_confirmation) {
        return next(Error("Passwords don't match"));
    }
    if (_.isEmpty(user_in_register.validate(data).value)) {
        return next(Error("Please add required info as json object with the correct application type!"));
    }
    var valid = user_in_register.validate(data, { stripUnknown: true });
    if (valid.error) {
        return next(Error(valid.error));
    }
    return user_in_register.validate(data, { stripUnknown: true }).value;
};
exports.user_in_register_validator = user_in_register_validator;
var user_out_register_validator = function (data, next) {
    var user_out_register = Joi.object({
        id: Joi.string(),
        name: Joi.string(),
        email: Joi.string().email(),
        created_at: Joi.date(),
        updated_at: Joi.date(),
    });
    var valid = user_out_register.validate(data, { stripUnknown: true });
    if (valid.error) {
        return next(Error(valid.error));
    }
    return user_out_register.validate(data, { stripUnknown: true }).value;
};
exports.user_out_register_validator = user_out_register_validator;
var user_in_login_validator = function (data, next) {
    var user_in_login = Joi.object({
        email: Joi.string().email().max(255).required(),
        password: Joi.string().min(3).max(15).required()
    });
    var valid = user_in_login.validate(data, { stripUnknown: true });
    if (valid.error) {
        return next(Error(valid.error));
    }
    return valid.value;
};
exports.user_in_login_validator = user_in_login_validator;
//# sourceMappingURL=validators.js.map