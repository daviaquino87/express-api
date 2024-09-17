"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyError = void 0;
const internal_error_1 = require("../errors/internal-error");
const logger_1 = require("../config/logger");
const verifyError = (err, req, res, next) => {
    if (err instanceof internal_error_1.InternalError) {
        const { code, message } = err;
        return res.status(code).json({ message });
    }
    const { message } = err;
    logger_1.Logger.error(message, {
        userIp: req.ip,
        status: 500,
        timestamp: new Date().toISOString(),
    });
    return res.status(500).json({ message });
};
exports.verifyError = verifyError;
//# sourceMappingURL=verify-error.js.map