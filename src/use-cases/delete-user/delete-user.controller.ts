import { Request, Response } from "express";
import { InternalError } from "../../errors/internal-error";
import { MongoUserRepository } from "../../database/repositories/mongo/mongo-user.repository";
import { DeleteUserUseCase } from "./delete-user.usecase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      throw new InternalError("Id is required", 404);
    }

    const userRepository = new MongoUserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    await deleteUserUseCase.execute({ id });
    return response.status(204).send();
  }
}
