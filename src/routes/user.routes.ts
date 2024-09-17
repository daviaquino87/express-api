import { Router } from "express";
import { CreateUserController } from "../use-cases/create-user/create-user.controller";
import { GetUsersController } from "../use-cases/get-users/get-users.controller";
import { GetUserByIdController } from "../use-cases/get-user-by-id/get-user-by-id.controller";
import { DeleteUserController } from "../use-cases/delete-user/delete-user.controller";

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();
const getUserByIdController = new GetUserByIdController();
const deleteUserController = new DeleteUserController();

export const userRouter = Router();

userRouter.post("/", createUserController.handle);
userRouter.get("/", getUsersController.handle);
userRouter.get("/:id", getUserByIdController.handle);
userRouter.delete("/:id", deleteUserController.handle);
