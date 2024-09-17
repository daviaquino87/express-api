import { CreateUserDTO } from "../../dtos/create-user.dto";
import { UserRepository } from "../../database/repositories/user.repository";
import { hash } from "bcryptjs";
import { InternalError } from "../../errors/internal-error";

interface IExecuteInput {
  createUserDto: CreateUserDTO;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: IExecuteInput) {
    const { createUserDto } = params;

    const userAlreadyExists = await this.userRepository.getByEmail(
      createUserDto.email
    );

    if (userAlreadyExists) {
      throw new InternalError("Already exists an user with this email", 409);
    }

    const passwordHash = await hash(createUserDto.password, 6);

    await this.userRepository.save({
      ...createUserDto,
      password: passwordHash,
    });
  }
}
