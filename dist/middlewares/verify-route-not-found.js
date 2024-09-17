"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRouteNotFound = void 0;
const verifyRouteNotFound = (req, res, next) => {
    res.status(404).json({ message: "Route not found" });
};
exports.verifyRouteNotFound = verifyRouteNotFound;
//# sourceMappingURL=verify-route-not-found.js.map