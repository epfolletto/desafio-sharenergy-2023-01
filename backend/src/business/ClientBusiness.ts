import { ClientDatabase } from "../database/ClientDatabase";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { USER_ROLES } from "../models/User";
import { ICreateClientInputDTO, IUpdateDataClientInputDTO, IClientDB, Client } from "../models/Client";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";

export class ClientBusiness {
  constructor(
    private clientDatabase: ClientDatabase,
    private authenticator: Authenticator
  ) { }

  public getAll = async (token: string): Promise<IClientDB[] | undefined> => {
    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa.");
    }

    const response = await this.clientDatabase.find()
    return response
  }

  public deleteClientById = async (id: string, token: string): Promise<{}> => {
    const idExist = await this.clientDatabase.findById(id);
    if (!idExist) {
      throw new ParamsError("ID não cadastrado.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa.");
    }

    await this.clientDatabase.deleteClientById(id)

    const response = {
      message: "Usuário deletado com sucesso.",
    }

    return response
  }

  public getClientById = async (id: String, token: string): Promise<IClientDB | undefined> => {
    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa.");
    }
    
    const response = await this.clientDatabase.findById(id)
    if (!response) {
      throw new ParamsError("ID não cadastrado.")
    }

    return response
  }

  public createClient = async (input: ICreateClientInputDTO, token: string): Promise<any> => {
    const {name, email, phone, adress, cpf} = input

    if (!name || !email || !phone || !adress || !cpf || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }
    
    if (typeof(name) !== "string") {
      throw new ParamsError("Parâmetro 'Nome' inválido: deve ser uma string.")
    }
    
    if (typeof(email) !== "string") {
      throw new ParamsError("Parâmetro 'Email' inválido: deve ser uma string.")
    }
    
    if (typeof(phone) !== "string") {
      throw new ParamsError("Parâmetro 'Telefone' inválido: deve ser uma string.")
    }
    
    if (typeof(adress) !== "string") {
      throw new ParamsError("Parâmetro 'Endereço' inválido: deve ser uma string.")
    }
    
    if (typeof(cpf) !== "string") {
      throw new ParamsError("Parâmetro 'CPF' inválido: deve ser uma string.")
    }
    
    if (name.length < 4 || name.length > 25) {
      throw new ParamsError("Parâmetro 'Nome' inválido: mínimo de 4 e máximo de 25 caracteres.")
    }
    
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'Email' inválido.")
    }
    
    const isEmailAlreadyExists = await this.clientDatabase.findByEmail(email)
    if (isEmailAlreadyExists.length) {
      throw new ConflictError("Email já cadastrado.");
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa.");
    }
    
    const client = new Client(
      name,
      email,
      phone,
      adress,
      cpf
    )

    await this.clientDatabase.createClient(client)

    const response = {
      message: "Cadastro do cliente realizado com sucesso.",
    }

    return response
  }

  public updateClientDataById = async (input: IUpdateDataClientInputDTO, token: string): Promise<any> => {
    const { id, name, email, cpf, phone, adress } = input

    if (!id || !name || !email || !cpf || !phone || !adress || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof(id) !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string.")
    }

    if (typeof(name) !== "string") {
      throw new ParamsError("Parâmetro 'Nome' inválido: deve ser uma string.")
    }

    if (typeof(cpf) !== "string") {
      throw new ParamsError("Parâmetro 'CPF' inválido: deve ser uma string.")
    }

    if (typeof(phone) !== "string") {
      throw new ParamsError("Parâmetro 'Telefone' inválido: deve ser uma string.")
    }

    if (typeof(adress) !== "string") {
      throw new ParamsError("Parâmetro 'Endereço' inválido: deve ser uma string.")
    }

    if (name.length < 4 || name.length > 25) {
      throw new ParamsError("Parâmetro 'Nome' inválido: mínimo de 4 e máximo de 25 caracteres.")
    }

    if (cpf.length !== 11) {
      throw new ParamsError("Parâmetro 'CPF' inválido: deve ter 11 caracters.")
    }

    if (adress.length > 45) {
      throw new ParamsError("Parâmetro 'Endereço' inválido: não pode haver mais de 45 caracters.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa.");
    }

    const client = new Client(
      name,
      email,
      phone,
      adress,
      cpf
    )

    await this.clientDatabase.findByIdAndUpdate(id, client)

    const response = {
      message: "Dados atualizados com sucesso!",
    }

    return response
  }
}