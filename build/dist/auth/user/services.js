"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_user = exports.create_user = void 0;
var client_1 = require(".prisma/client");
var client_2 = require(".prisma/client");
var bcrypt_1 = require("bcrypt");
var validators_1 = require("./validators");
var prisma = new client_2.PrismaClient();
// Make user
function create_user(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, password, password_confirmation, hashed_password, user_created, output, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, validators_1.user_in_register_validator(req.body, next)
                    // Hash Password
                ];
                case 1:
                    _a = _b.sent(), name = _a.name, email = _a.email, password = _a.password, password_confirmation = _a.password_confirmation;
                    return [4 /*yield*/, bcrypt_1.hash(password, 10)];
                case 2:
                    hashed_password = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                name: name,
                                email: email,
                                password: hashed_password
                            }
                        })];
                case 4:
                    user_created = _b.sent();
                    return [4 /*yield*/, validators_1.user_out_register_validator(user_created, next)];
                case 5:
                    output = _b.sent();
                    return [2 /*return*/, res.send(output)];
                case 6:
                    error_1 = _b.sent();
                    if (error_1 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                        // The .code property can be accessed in a type-safe manner
                        if (error_1.code === 'P2002') {
                            error_1.message = "Already registered.";
                        }
                    }
                    next(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.create_user = create_user;
// Login user
function login_user(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, user, valid;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, validators_1.user_in_login_validator(req.body, next)];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    return [4 /*yield*/, prisma.user.findFirst({
                            where: {
                                email: email
                            }
                        })];
                case 2:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, next(Error("Wrong Credentials"))];
                    }
                    return [4 /*yield*/, bcrypt_1.compare(password, user.password)];
                case 3:
                    valid = _b.sent();
                    if (!valid) {
                        return [2 /*return*/, next(Error("Wrong Credentials"))];
                    }
                    res.send("Successful login");
                    return [2 /*return*/];
            }
        });
    });
}
exports.login_user = login_user;
//# sourceMappingURL=services.js.map