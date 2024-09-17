"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, printf, json, errors } = winston_1.default.format;
const customFormat = printf(({ level, message, timestamp, stack, ...metadata }) => {
    let msg = `${timestamp} [${level}]: ${stack || message}`;
    if (Object.keys(metadata).length > 0) {
        msg += ` | ${JSON.stringify(metadata)}`;
    }
    return msg;
});
const logger = winston_1.default.createLogger({
    level: "info",
    format: combine(timestamp(), errors({ stack: true }), customFormat),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: "./logs/application.log",
        }),
    ],
});
class Logger {
    static info(message, metadata) {
        logger.info(message, metadata);
    }
    static warn(message, metadata) {
        logger.warn(message, metadata);
    }
    static error(message, metadata) {
        logger.error(message, metadata);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map