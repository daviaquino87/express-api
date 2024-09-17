"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = createConnection;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../config/env");
const logger_1 = require("../config/logger");
async function createConnection() {
    try {
        await mongoose_1.default.connect(env_1.env.MONGO_URL);
        logger_1.Logger.info("Database connected successfully");
    }
    catch (err) {
        logger_1.Logger.error("Error connecting to the database", err);
        throw err;
    }
}
//# sourceMappingURL=index.js.map