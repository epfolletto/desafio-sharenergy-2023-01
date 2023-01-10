export class Client {
  constructor(
    private name: string,
    private email: string,
    private phone: string,
    private adress: string,
    private cpf: string
  ) { }

  public getName = () => {
    return this.name
  }

  public getEmail = () => {
    return this.email
  }

  public getPhone = () => {
    return this.phone
  }

  public getAdress = () => {
    return this.adress
  }

  public getCPF = () => {
    return this.cpf
  }

  public setName = (newName: string) => {
    this.name = newName
  }

  public setEmail = (newEmail: string) => {
    this.email = newEmail
  }

  public setPhone = (newPhone: string) => {
    this.phone = newPhone
  }

  public setAdress = (newAdress: string) => {
    this.adress = newAdress
  }

  public setCPF = (newCPF: string) => {
    this.cpf = newCPF
  }
}

export interface ICreateClientInputDTO {
  name: string,
  email: string,
  phone: string,
  adress: string,
  cpf: string,
}

export interface IClientDB {
  id: String,
  name: string,
  email: string,
  phone: string,
  adress: string,
  cpf: string,
}

export interface IClientInputDB {
  name: string,
  email: string,
  phone: string,
  adress: string,
  cpf: string,
}

export interface IUpdateDataClientInputDTO {
  id: string,
  name: string,
  email: string,
  cpf: string,
  phone: string,
  adress: string,
}