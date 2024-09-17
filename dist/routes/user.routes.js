"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const create_user_controller_1 = require("../use-cases/create-user.controller");
const createUserController = new create_user_controller_1.CreateUserController();
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", createUserController.handle);
//# sourceMappingURL=user.routes.js.map