import { IUserDB, ICreateUserDB, User } from "../models/User";

import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  age: { type: Number, required: false },
  birthdate: { type: Date, required: false },
  cpf: { type: String, required: false },
  marital: { type: String, required: false },
  logradouro: { type: String, required: false },
  number: { type: String, required: false },
  complement: { type: String, required: false },
  district: { type: String, required: false },
  city: { type: String, required: false },
});

const UsersModel = mongoose.model('Users', UsersSchema);

export class UserDatabase {
  public toUserDBModel = (user: User): ICreateUserDB => {
    const userDB: ICreateUserDB = {
      name: user.getName(),
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }

    return userDB
  }

  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await UsersModel.find({ email: email })
    return result[0]
  }
  
  public findByUsername = async (username: String): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await UsersModel.find({ username: username })
    return result[0]
  }

  public createUser = async (user: User): Promise<void> => {
    const userDB: ICreateUserDB = this.toUserDBModel(user)
    await UsersModel.create(userDB)
  }

  public find = async (): Promise<IUserDB[] | undefined> => {
    const result: IUserDB[] | undefined = await UsersModel.find()
    return result
  }

  public findById = async (id: String): Promise<IUserDB | undefined> => {
    const result: IUserDB | undefined = await UsersModel.findById(id)
    return result
  }

  public updateRoleById = async (id: string, role: string): Promise<void> => {
    await UsersModel.findByIdAndUpdate(id, {role: role} )
  }

  public deleteUserById = async (id: string): Promise<void> => {
    await UsersModel.findByIdAndDelete(id)
  }

  public findByIdAndUpdate = async (id: String, user: any): Promise<void> => {
    await UsersModel.findByIdAndUpdate(id, user)
  }
}