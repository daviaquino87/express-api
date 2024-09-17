"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const env_1 = require("./config/env");
const verify_error_1 = require("./middlewares/verify-error");
const verify_route_not_found_1 = require("./middlewares/verify-route-not-found");
const database_1 = require("./database");
const logger_1 = require("./config/logger");
function bootstrap() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cors_1.default)());
    app.use(routes_1.router);
    app.use(verify_route_not_found_1.verifyRouteNotFound);
    app.use(verify_error_1.verifyError);
    app.listen(env_1.env.PORT, () => {
        console.log("Server running on port " + env_1.env.PORT);
    });
}
(0, database_1.createConnection)()
    .then(() => {
    console.log("Database connected");
    bootstrap();
})
    .catch((err) => {
    logger_1.Logger.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map