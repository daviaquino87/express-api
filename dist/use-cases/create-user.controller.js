"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const create_user_usecase_1 = require("./create-user.usecase");
const mongo_user_repository_1 = require("../repositories/mongo/mongo-user.repository");
const validate_dto_1 = require("../utils/validate-dto");
const create_user_dto_1 = require("../dtos/create-user.dto");
const internal_error_1 = require("../errors/internal-error");
class CreateUserController {
    async handle(request, response) {
        const userRepository = new mongo_user_repository_1.MongoUserRepository();
        const createUserUseCase = new create_user_usecase_1.CreateUserUseCase(userRepository);
        const { dtoValidated, error } = await (0, validate_dto_1.validateDTO)(create_user_dto_1.CreateUserDTO, request.body);
        if (error) {
            throw new internal_error_1.InternalError(error, 404);
        }
        await createUserUseCase.execute({
            createUserDto: dtoValidated,
        });
        return response.status(201).send();
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=create-user.controller.js.map