import mongoose, { Document } from "mongoose";
import { UserRepository } from "../user.repository";
import { CreateUserDTO } from "../../../dtos/create-user.dto";
import { userSchema, UserSchema } from "../../schemas/user.schema";

const UserModel = mongoose.model<UserSchema & Document>("User", userSchema);

export class MongoUserRepository implements UserRepository {
  async save(userDto: CreateUserDTO): Promise<void> {
    const user = new UserModel(userDto);
    await user.save();
  }

  async getAll(): Promise<UserSchema[]> {
    return UserModel.find().exec();
  }

  async getByEmail(email: string): Promise<UserSchema> {
    return UserModel.findOne({ email }).exec();
  }

  async getById(id: string): Promise<UserSchema> {
    return UserModel.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<void> {
    await UserModel.deleteOne({ _id: id }).exec();
  }
}
