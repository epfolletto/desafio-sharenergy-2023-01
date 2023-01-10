import { IClientDB, Client } from "./../../src/models/Client";

export class ClientDatabaseMock {

  public find = async (): Promise<IClientDB[] | undefined> => {
    const client: IClientDB[] = [
      {
        id: "id1",
        name: "Cliente A",
        email: "clientea@gmail.com",
        phone: "51996584512",
        adress: "Av. Paulista, 32, Apto 502, Centro, São Paulo/SP",
        cpf: "11122233344"
      },
      {
        id: "id2",
        name: "ClientB",
        email: "clienteb@gmail.com",
        phone: "51996584512",
        adress: "Av. Paulista, 32, Apto 502, Centro, São Paulo/SP",
        cpf: "11122233344"
      }
    ]
    return client
  }

  public findById = async (id: String): Promise<IClientDB | undefined> => {
    if(id === "id1"){
      const user: IClientDB = {
        id: "id1",
        name: "Cliente A",
        email: "clientea@gmail.com",
        phone: "51996584512",
        adress: "Av. Paulista, 32, Apto 502, Centro, São Paulo/SP",
        cpf: "11122233344"
      }
      return user
    } else if(id === "id2"){
      const user: IClientDB = {
        id: "id2",
        name: "ClientB",
        email: "clienteb@gmail.com",
        phone: "51996584512",
        adress: "Av. Paulista, 32, Apto 502, Centro, São Paulo/SP",
        cpf: "11122233344"
      }
      return user
    }
    return undefined
  }

  public deleteClientById = async (id: string): Promise<void> => { }

  public findByEmail = async (email: String): Promise<IClientDB[]> => {
    if(email === "clientea@gmail.com") {
      const user: IClientDB[] = [{
        id: "id1",
        name: "Cliente A",
        email: "clientea@gmail.com",
        phone: "51996584512",
        adress: "Av. Paulista, 32, Apto 502, Centro, São Paulo/SP",
        cpf: "11122233344"
      }]
      return user
    } else if (email === "clienteb@gmail.com") {
      const user: IClientDB[] = [{
        id: "id2",
        name: "ClientB",
        email: "clienteb@gmail.com",
        phone: "51996584512",
        adress: "Av. Paulista, 32, Apto 502, Centro, São Paulo/SP",
        cpf: "11122233344"
      }]
      return user
    } else {
      return []
    }
  }

  public createClient = async (user: Client): Promise<void> => { }

  public findByIdAndUpdate = async (id: String, user: Client): Promise<void> => { }
}