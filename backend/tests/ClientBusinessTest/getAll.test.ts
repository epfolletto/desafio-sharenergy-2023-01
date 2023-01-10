import { ClientBusiness } from "../../src/business/ClientBusiness";
import { ClientDatabaseMock } from "../mocks/ClientDatabaseMock";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { BaseError } from "../../src/errors/BaseError";

describe("Testando o método getAll da ClientBusiness", () => {
  const clientBusiness = new ClientBusiness(
    new ClientDatabaseMock(),
    new AuthenticatorMock()
  )

  test("Um array com todos os usuários é retornado quando o getAll é bem-sucedido", async () => {
    const token = "token-mock-admin";
    
    const response:any = await clientBusiness.getAll(token)
    expect(response.length).toBe(2);
  })

  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    const token = "token-mock-admin-errado";
    try {
      await clientBusiness.getAll(token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Token inválido.")
      }
    }
  })

  test("Erro quando o token não é autorizado", async () => {
    expect.assertions(2)

    const token = "token-mock-normal";
    try {
      await clientBusiness.getAll(token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toBe("Você não possui autorização para essa tarefa.")
      }
    }
  })
})