export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface IUserDB {
  id: String,
  name: string,
  username: string,
  email: string, 
  password: string,
  role: USER_ROLES,
  age?: number,
  number?: number,
  logradouro?: string,
  cpf?: string,
  marital?: string,
  birthdate?: Date,
  city?: string,
  complement?: string,
  district?: string
}

export interface ICreateUserDB {
  name: String,
  username: String,
  email: String, 
  password: String,
  role: USER_ROLES,
}

export class User {
  constructor(
    private name: string,
    private username: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) { }

  public getName = () => {
    return this.name
  }

  public getUsername = () => {
    return this.username
  }

  public getEmail = () => {
    return this.email
  }

  public getPassword = () => {
    return this.password
  }

  public getRole = () => {
    return this.role
  }

  public setName = (newName: string) => {
    this.name = newName
  }

  public setUsername = (newUsername: string) => {
    this.name = newUsername
  }

  public setEmail = (newEmail: string) => {
    this.email = newEmail
  }

  public setPassword = (newPassword: string) => {
    this.password = newPassword
  }

  public setRole = (newRole: USER_ROLES) => {
    this.role = newRole
  }
}

export interface ILoginInputDTO {
  username: string,
  password: string
}

export interface ILoginOutputDTO {
  message: string,
  token: string
}

export interface IGetDataUserOutputDTO {
  id: String,
  username: string,
  role: string
}

export interface ISignupInputDTO {
  name: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  role: USER_ROLES
}

export interface IUpdateRoleInputDTO {
  id: string,
  role: USER_ROLES
}

export interface IUpdateDataUserInputDTO {
  id: string,
  name: string,
  age?: number,
  birthdate?: Date,
  cpf?: string,
  marital?: string,
  logradouro?: string,
  number?: number,
  complement?: string,
  district?: string,
  city?: string,
  username: string,
  email: string
}