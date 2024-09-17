"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().default(3000),
    MONGO_URL: zod_1.z.string(),
});
const getEnv = envSchema.safeParse(process.env);
if (!getEnv.success) {
    const errorMessage = "load environment failed";
    console.error(errorMessage, getEnv.error.format());
    throw new Error(errorMessage);
}
exports.env = getEnv.data;
//# sourceMappingURL=env.js.map