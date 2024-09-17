"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
class InternalError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=internal-error.js.map