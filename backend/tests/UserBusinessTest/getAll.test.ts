import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método getAll da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Um array com todos os usuários é retornado quando o getAll é bem-sucedido", async () => {
    const token = "token-mock-admin";

    const response:any = await userBusiness.getAll(token)
    expect(response.length).toBe(2);
  })

  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-admin-errado";

      await userBusiness.getAll(token)
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
      const token = "token-mock-normal";

      await userBusiness.getAll(token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toBe("Você não possui autorização para essa tarefa.")
      }
    }
  })
})