import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { USER_ROLES } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método getUserDataByToken da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Um objeto é retornado quando o método getUserDataByToken é bem-sucedido", async () => {
    const token = "token-mock-admin";

    const response: any = await userBusiness.getUserDataByToken(token);
    
    expect(response.id).toBe("id-mock-admin");
    expect(response.role).toBe(USER_ROLES.ADMIN);
    expect(Object.keys(response).length).toBe(3);
  })

  test("Erro quando o token estiver faltante", async () => {
    expect.assertions(2)

    try {
      const token: any = "";

      await userBusiness.getUserDataByToken(token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Token' faltante.")
      }
    }
  })

  test("Erro quando o Token não for do tipo string", async () => {
    expect.assertions(2)

    try {
      const token: any = 2;

      await userBusiness.getUserDataByToken(token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Token' inválido: deve ser uma string.")
      }
    }
  })


  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-admin-errado";

      await userBusiness.getUserDataByToken(token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Token inválido.")
      }
    }
  })
})