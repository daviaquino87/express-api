"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const user_1 = require("../../database/models/user");
class MongoUserRepository {
    async save(user) {
        const newUser = new user_1.User({
            name: user.name,
            email: user.email,
            passwordHash: user.password,
        });
        await newUser.save();
    }
}
exports.MongoUserRepository = MongoUserRepository;
//# sourceMappingURL=mongo-user.repository.js.map