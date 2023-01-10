import { IUserDB, User, USER_ROLES } from "./../../src/models/User";

export class UserDatabaseMock {
  public toUserDBModel = (user: User): any => {
    const userDB = {
      name: user.getName(),
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }

    return userDB
  }

  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    switch (email) {
      case "normaluser@gmail.com":
        const normalUser: IUserDB = {
          id: "id-mock-normal",
          name: "User Mock Normal",
          username: "mocknormal",
          email: "normaluser@gmail.com",
          password: "hash-mock-normal",
          role: USER_ROLES.NORMAL
        }
        return normalUser

      case "adminuser@gmail.com":
        const adminUser: IUserDB = {
          id: "id-mock-admin",
          name: "Astrodev",
          username: "mockadmin",
          email: "adminuser@gmail.com",
          password: "hash-mock-admin",
          role: USER_ROLES.ADMIN
        }
        return adminUser

      default:
        return undefined
    }
  }

  public findByUsername = async (username: String): Promise<IUserDB | undefined> => {
    if(username === "mocknormal"){
      const user: IUserDB = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        username: "mocknormal",
        email: "usermocknormal@gmail.com",
        password: "hash-mock-normal",
        role: USER_ROLES.NORMAL
      }
      return user
    } else if(username === "mockadmin"){
      const user: IUserDB = {
        id: "id-mock-admin",
        name: "Astrodev",
        username: "mockadmin",
        email: "usermonkadmin@gmail.com",
        password: "hash-mock-admin",
        role: USER_ROLES.ADMIN
      }
      return user      
    }
  }

  public createUser = async (user: User): Promise<void> => { }

  public find = async (): Promise<IUserDB[] | undefined> => {
    const user: IUserDB[] = [
      {
        id: "id-mock-normal",
        name: "User Mock Normal",
        username: "mocknormal",
        email: "usermocknormal@gmail.com",
        password: "hash-mock-normal",
        role: USER_ROLES.NORMAL
      },
      {
        id: "id-mock-admin",
        name: "Astrodev",
        username: "mockadmin",
        email: "usermonkadmin@gmail.com",
        password: "hash-mock-admin",
        role: USER_ROLES.ADMIN
      }
    ] 
    return user
  }

  public findById = async (id: String): Promise<IUserDB | undefined> => {
    if(id === "id-mock-normal"){
      const user: IUserDB = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        username: "mocknormal",
        email: "usermocknormal@gmail.com",
        password: "hash-mock-normal",
        role: USER_ROLES.NORMAL
      }
      return user
    } else if(id === "id-mock-admin"){
      const user: IUserDB = {
        id: "id-mock-admin",
        name: "Astrodev",
        username: "mockadmin",
        email: "usermonkadmin@gmail.com",
        password: "hash-mock-admin",
        role: USER_ROLES.ADMIN
      }
      return user      
    }
    return undefined
  }

  public updateRoleById = async (id: string, role: string): Promise<void> => { }

  public deleteUserById = async (id: string): Promise<void> => { }

  public findByIdAndUpdate = async (id: String, user: any): Promise<void> => { }
}