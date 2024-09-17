"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
exports.router = (0, express_1.Router)();
exports.router.use("/users", user_routes_1.userRouter);
//# sourceMappingURL=index.js.map