import { Router } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { UserController } from '../controller/UserController';
import { UserDatabase } from '../database/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';

export const userRouter = Router();

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new HashManager(),
    new Authenticator()
  )
)

userRouter.get("/getdata/", userController.getUserDataByToken);
userRouter.get("/:id", userController.getUserById);
userRouter.get("/", userController.getAll);
userRouter.put("/profile/edit/", userController.updateUserDataById);
userRouter.put("/", userController.updateRoleById);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.delete("/:id", userController.deleteUserById);