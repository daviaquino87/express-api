import { CreateUserDTO } from "../../dtos/create-user.dto";
import { UserRepository } from "../user.repository";
export declare class MongoUserRepository implements UserRepository {
    save(user: CreateUserDTO): Promise<void>;
}
