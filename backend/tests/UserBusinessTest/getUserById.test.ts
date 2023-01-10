import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método getUserById da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Um objeto é enviado quando o usuário é encontrado", async () => {
    const id = "id-mock-normal";
    const token = "token-mock-admin";
    
    const response:any = await userBusiness.getUserById(id, token)
    expect(response.name).toBe("User Mock Normal");
    expect(response.email).toBe("usermocknormal@gmail.com");
    expect(Object.keys(response).length).toBe(6);
  })

  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    try {
      const id = "id-mock-normal";
      const token = "token-mock-admin-errado";

      await userBusiness.getUserById(id, token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Token inválido.")
      }
    }
  })

  test("Erro quando o token não é autorizado", async () => {
    expect.assertions(2)

    try {
      const id = "id-mock-normal";
      const token = "token-mock-normal";

      await userBusiness.getUserById(id, token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toBe("Você não possui autorização para essa tarefa.")
      }
    }
  })

  test("Erro quando o ID não foi encontrado", async () => {
    expect.assertions(2)

    try {
      const id = "id-mock-normalll";
      const token = "token-mock-admin";

      await userBusiness.getUserById(id, token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("ID não cadastrado.")
      }
    }
  })
})