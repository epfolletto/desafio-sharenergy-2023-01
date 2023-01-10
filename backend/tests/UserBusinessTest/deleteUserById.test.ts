import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método deleteUserById da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando o deleteUserById é bem-sucedido", async () => {
    const id = "id-mock-normal";
    const token = "token-mock-admin";

    const response = await userBusiness.deleteUserById(id, token)
    expect(response.message).toBe("Usuário deletado com sucesso.")
  })

  test("Erro quando o ID estiver faltante", async () => {
    expect.assertions(2)

    try {
      const id = "";
      const token = "token-mock-admin";

      await userBusiness.deleteUserById(id, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro ID faltante.")
      }
    }
  })

  test("Erro quando o ID não for do tipo string", async () => {
    expect.assertions(2)

    try {
      const id: any = 2;
      const token = "token-mock-admin";

      await userBusiness.deleteUserById(id, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'id' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando o ID não for cadastrado", async () => {
    expect.assertions(2)

    try {
      const id = "id-mock-normalll";
      const token = "token-mock-admin";

      await userBusiness.deleteUserById(id, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("ID não cadastrado.")
      }
    }
  })

  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    try {
      const id = "id-mock-normal";
      const token = "token-mock-admin-errado";

      await userBusiness.deleteUserById(id, token)
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

      await userBusiness.deleteUserById(id, token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toBe("Você não possui autorização para essa tarefa.")
      }
    }
  })
})