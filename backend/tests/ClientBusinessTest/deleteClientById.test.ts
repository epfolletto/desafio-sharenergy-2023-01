import { ClientBusiness } from "../../src/business/ClientBusiness";
import { ClientDatabaseMock } from "../mocks/ClientDatabaseMock";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { BaseError } from "../../src/errors/BaseError";

describe("Testando o método deleteClientById da ClientBusiness", () => {
  const clientBusiness = new ClientBusiness(
    new ClientDatabaseMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando o deleteClientById é bem-sucedido", async () => {
    const id = "id1";
    const token = "token-mock-admin";

    const response: any = await clientBusiness.deleteClientById(id, token)
    expect(response.message).toBe("Usuário deletado com sucesso.")
  })
  
  test("Erro quando o ID não existe", async () => {
    expect.assertions(2)

    try {
      const id = "id12";
      const token = "token-mock-admin";

      await clientBusiness.deleteClientById(id, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("ID não cadastrado.")
      }
    }
  })
})