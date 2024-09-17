import { UserRepository } from "../../database/repositories/user.repository";
import { InternalError } from "../../errors/internal-error";

interface IExecuteInput {
  id: string;
}

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: IExecuteInput): Promise<void> {
    const user = await this.userRepository.getById(id);

    if (!user) {
      throw new InternalError("User not found", 409);
    }

    await this.userRepository.delete(id);
  }
}
