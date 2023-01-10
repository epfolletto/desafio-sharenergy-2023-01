import { IClientDB, Client } from "../models/Client";

import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  adress: { type: String, required: true },
  cpf: { type: String, required: false },
});

const ClientModel = mongoose.model('Client', ClientSchema);

export class ClientDatabase {
  public find = async (): Promise<IClientDB[] | undefined> => {
    const result: any = await ClientModel.find()
    return result
  }

  public findById = async (id: String): Promise<IClientDB | undefined> => {
    const result: IClientDB | undefined = await ClientModel.findById(id)
    return result
  }

  public deleteClientById = async (id: string): Promise<void> => {
    await ClientModel.findByIdAndDelete(id)
  }

  public findByEmail = async (email: String): Promise<IClientDB[]> => {
    const result: IClientDB[] = await ClientModel.find({email: email})
    return result
  }

  public createClient = async (user: Client): Promise<void> => {
    await ClientModel.create(user)
  }

  public findByIdAndUpdate = async (id: String, user: Client): Promise<void> => {
    await ClientModel.findByIdAndUpdate(id, user)
  }
}