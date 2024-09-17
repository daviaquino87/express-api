import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";
import { MongoUserRepository } from "../../database/repositories/mongo/mongo-user.repository";
import { validateDTO } from "../../utils/validate-dto";
import { CreateUserDTO } from "../../dtos/create-user.dto";
import { InternalError } from "../../errors/internal-error";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { dtoValidated, error } = await validateDTO(
      CreateUserDTO,
      request.body
    );

    if (error) {
      throw new InternalError(error, 404);
    }

    const userRepository = new MongoUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    await createUserUseCase.execute({
      createUserDto: dtoValidated,
    });

    return response.status(201).send();
  }
}
