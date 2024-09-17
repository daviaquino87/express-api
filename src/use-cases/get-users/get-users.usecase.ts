import { UserRepository } from "../../database/repositories/user.repository";

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.getAll();
    return users;
  }
}
