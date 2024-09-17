import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserRepository } from "../repositories/user.repository";
interface IExecuteInput {
    createUserDto: CreateUserDTO;
}
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(params: IExecuteInput): Promise<void>;
}
export {};
