import { Request, Response } from "express";

import { MongoUserRepository } from "../../database/repositories/mongo/mongo-user.repository";
import { GetUsersUseCase } from "./get-users.usecase";

export class GetUsersController {
  async handle(request: Request, response: Response) {
    const userRepository = new MongoUserRepository();
    const getUsersUseCase = new GetUsersUseCase(userRepository);

    const users = await getUsersUseCase.execute();
    return response.status(200).json(users);
  }
}
