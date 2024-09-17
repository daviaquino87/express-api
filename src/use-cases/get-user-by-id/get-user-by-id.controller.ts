import { Request, Response } from "express";
import { InternalError } from "../../errors/internal-error";
import { GetUserByIdUseCase } from "./get-user-by-id.usecase";
import { MongoUserRepository } from "../../database/repositories/mongo/mongo-user.repository";

export class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      throw new InternalError("Id is required", 404);
    }

    const userRepository = new MongoUserRepository();
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);

    const { user } = await getUserByIdUseCase.execute({ id });
    return response.status(200).json(user);
  }
}
