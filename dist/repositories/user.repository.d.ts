import { CreateUserDTO } from "../dtos/create-user.dto";
export interface UserRepository {
    save(user: CreateUserDTO): Promise<void>;
}
