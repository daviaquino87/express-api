import { CreateUserDTO } from "../../dtos/create-user.dto";
import { UserSchema } from "../schemas/user.schema";

export interface UserRepository {
  save(user: CreateUserDTO): Promise<void>;
  getAll(): Promise<UserSchema[]>;
  getByEmail(email: string): Promise<UserSchema>;
  getById(id: string): Promise<UserSchema>;
  delete(id: string): Promise<void>;
}
