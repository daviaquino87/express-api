import { UserRepository } from "../../database/repositories/user.repository";
import { UserSchema } from "../../database/schemas/user.schema";
import { InternalError } from "../../errors/internal-error";

interface IExecuteInput {
  id: string;
}

interface IExecuteOutput {
  user: UserSchema;
}

export class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: IExecuteInput): Promise<IExecuteOutput> {
    const user = await this.userRepository.getById(id);

    if (!user) {
      throw new InternalError("User not found", 409);
    }

    return {
      user,
    };
  }
}
