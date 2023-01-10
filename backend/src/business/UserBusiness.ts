import { UserDatabase } from "../database/UserDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, IUpdateRoleInputDTO, 
         IUpdateDataUserInputDTO, User, IUserDB, IGetDataUserOutputDTO, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) { }

  public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
    const { username, password } = input

    if (!username || !password) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof username !== "string") {
      throw new ParamsError("Parâmetro 'username' inválido.")
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido.")
    }

    const userDB = await this.userDatabase.findByUsername(username)

    if (!userDB) {
      throw new NotFoundError("Username e/ou Senha inválidos.")
    }

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      userDB.password
    )

    if (!isPasswordCorrect) {
      throw new AuthenticationError("Username e/ou Senha inválidos.")
    }

    const payload: ITokenPayload = {
      id: userDB.id,
      role: userDB.role
    }

    const token = this.authenticator.generateToken(payload)

    const response: ILoginOutputDTO = {
      message: "Login realizado com sucesso.",
      token
    }

    return response
  }

  public signup = async (input: ISignupInputDTO) => {
    const { name, username, email, password, confirmPassword, role } = input

    if (!name || !username || !email || !password || !confirmPassword || !role) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'Nome' inválido: deve ser uma string.")
    }

    if (typeof username !== "string") {
      throw new ParamsError("Parâmetro 'Username' inválido: deve ser uma string.")
    }

    if (typeof email !== "string") {
      throw new ParamsError("Parâmetro 'Email' inválido: deve ser uma string.")
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'Senha' inválido: deve ser uma string.")
    }

    if (typeof confirmPassword !== "string") {
      throw new ParamsError("Parâmetro 'Confirmar senha' inválido: deve ser uma string.")
    }

    if (password.length < 6) {
      throw new ParamsError("Parâmetro 'Senha' inválido: mínimo de 6 caracteres.")
    }

    if (password !== confirmPassword) {
      throw new ParamsError("Os campos senha e confirmar senha devem ser iguais.")
    }

    if (name.length < 4 || name.length > 20) {
      throw new ParamsError("Parâmetro 'Name' inválido: mínimo de 4 e máximo de 20 caracteres.")
    }

    if (username.length < 4 || username.length > 20) {
      throw new ParamsError("Parâmetro 'Username' inválido: mínimo de 4 e máximo de 20 caracteres.")
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido.")
    }

    const isEmailAlreadyExists = await this.userDatabase.findByEmail(email)
    if (isEmailAlreadyExists) {
      throw new ConflictError("Email e/ou Usuário já cadastrado.")
    }

    const isUsernameAlreadyExists = await this.userDatabase.findByUsername(username)
    if (isUsernameAlreadyExists) {
      throw new ConflictError("Email e/ou Usuário já cadastrado.")
    }

    const hashedPassword = await this.hashManager.hash(password)

    const user = new User(
      name,
      username,
      email,
      hashedPassword,
      role
    )

    await this.userDatabase.createUser(user)

    const response: any = {
      message: "Cadastro do usuário realizado com sucesso.",
    }

    return response
  }

  public getAll = async (token: string): Promise<IUserDB[] | undefined> => {
    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa.");
    }

    const response = await this.userDatabase.find()
    return response
  }

  public getUserById = async (id: String, token: string): Promise<IUserDB | undefined> => {
    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const response = await this.userDatabase.findById(id);
    if (!response) {
      throw new ParamsError("ID não cadastrado.")
    }
    
    return response
  }

  public updateRoleById = async (input: IUpdateRoleInputDTO, token: string): Promise<any> => {
    const { id, role } = input

    if (!id || !role || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string.")
    }

    if (typeof role !== "string") {
      throw new ParamsError("Parâmetro 'Role' inválido: deve ser uma string.")
    }

    const idExist = await this.userDatabase.findById(id);
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

    await this.userDatabase.updateRoleById(id, role);

    const response = {
      message: "Role atualizada com sucesso.",
    }

    return response
  }

  public deleteUserById = async (id: string, token: string): Promise<any> => {
    if (!id) {
      throw new ParamsError("Parâmetro ID faltante.")
    }

    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'id' inválido: deve ser uma string.")
    }

    const idExist = await this.userDatabase.findById(id);
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

    await this.userDatabase.deleteUserById(id)

    const response = {
      message: "Usuário deletado com sucesso.",
    }

    return response
  }

  public updateUserDataById = async (input: IUpdateDataUserInputDTO, token: string): Promise<any> => {
    const { id, name, age, birthdate, cpf, marital, logradouro, number, complement, district, city, username, email } = input

    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string.")
    }

    if (name && typeof(name) !== "string") {
      throw new ParamsError("Parâmetro 'Nome' inválido: deve ser uma string.")
    }

    if (age && typeof(age) !== "number") {
      throw new ParamsError("Parâmetro 'Idade' inválido: deve ser um number.")
    }

    if (cpf && typeof(cpf) !== "string") {
      throw new ParamsError("Parâmetro 'CPF' inválido: deve ser uma string.")
    }

    if (marital && typeof(marital) !== "string") {
      throw new ParamsError("Parâmetro 'Estado civil' inválido: deve ser uma string.")
    }

    if (logradouro && typeof(logradouro) !== "string") {
      throw new ParamsError("Parâmetro 'Logradouro' inválido: deve ser uma string.")
    }

    if (number && typeof(number) !== "number") {
      throw new ParamsError("Parâmetro 'Número' inválido: deve ser um number.")
    }

    if (complement && typeof(complement) !== "string") {
      throw new ParamsError("Parâmetro 'Complemento' inválido: deve ser uma string.")
    }

    if (district && typeof(district) !== "string") {
      throw new ParamsError("Parâmetro 'Bairro' inválido: deve ser uma string.")
    }

    if (city && typeof(city) !== "string") {
      throw new ParamsError("Parâmetro 'Cidade/Estado' inválido: deve ser uma string.")
    }

    if (typeof(username) !== "string") {
      throw new ParamsError("Parâmetro 'Username' inválido: deve ser uma string.")
    }

    if (name.length < 4 || name.length > 20) {
      throw new ParamsError("Parâmetro 'Name' inválido: mínimo de 4 e máximo de 20 caracteres.")
    }

    if (username.length < 4 || username.length > 20) {
      throw new ParamsError("Parâmetro 'Username' inválido: mínimo de 4 e máximo de 20 caracteres.")
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'Email' inválido.")
    }

    if (age && age < 0) {
      throw new ParamsError("Parâmetro 'Idade' inválido: deve ser um número positivo.")
    }

    if (cpf && cpf.length !== 11) {
      throw new ParamsError("Parâmetro 'CPF' inválido: deve ter 11 caracters.")
    }

    if (logradouro && logradouro.length > 25) {
      throw new ParamsError("Parâmetro 'Logradouro' inválido: não pode haver mais de 25 caracters.")
    }

    if (complement && complement.length > 25) {
      throw new ParamsError("Parâmetro 'Complemento' inválido: não pode haver mais de 25 caracters.")
    }

    if (district && district.length > 25) {
      throw new ParamsError("Parâmetro 'Bairro' inválido: não pode haver mais de 25 caracters.")
    }

    if (city && city.length > 25) {
      throw new ParamsError("Parâmetro 'Cidade e estado' inválido: não pode haver mais de 25 caracters.")
    }

    if (birthdate && typeof birthdate !== "string") {
      throw new ParamsError("Parâmetro 'Data de nascimento' inválido: deve ser uma data.")
    }

    if (birthdate && new Date(birthdate).getTime() > Date.now()) {
      throw new ParamsError("Não é permitido escolher datas futuras.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    if (id !== payload.id) {
      throw new ParamsError("Não é possível alterados os dados de outro usuário.")
    }

    const user:any = {};
    user.name = name
    user.username = username
    user.email = email
    if (age !== undefined) user.age = age
    if (birthdate !== undefined) user.birthdate = birthdate
    if (cpf !== undefined) user.cpf = cpf
    if (marital !== undefined) user.marital = marital
    if (logradouro !== undefined) user.logradouro = logradouro
    if (number !== undefined) user.number = number
    if (complement !== undefined) user.complement = complement
    if (district !== undefined) user.district = district
    if (city !== undefined) user.city = city

    await this.userDatabase.findByIdAndUpdate(id, user)

    const response: any = {
      message: "Dados atualizados com sucesso!",
    }

    return response
  }

  public getUserDataByToken = async (token: string): Promise<IGetDataUserOutputDTO | undefined> => {
    if (!token) {
      throw new ParamsError("Parâmetro 'Token' faltante.")
    }

    if (typeof token !== "string") {
      throw new ParamsError("Parâmetro 'Token' inválido: deve ser uma string.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const data = await this.userDatabase.findById(payload.id)
    if (!data) {
      throw new ParamsError("Dados não encontrados para este ID.")
    }

    const response = {
      id: payload.id,
      username: data.username,
      role: payload.role
    }
    return response
  }
}