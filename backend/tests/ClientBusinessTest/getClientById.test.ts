import { ClientBusiness } from "../../src/business/ClientBusiness";
import { ClientDatabaseMock } from "../mocks/ClientDatabaseMock";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { BaseError } from "../../src/errors/BaseError";

describe("Testando o método getClientById da ClientBusiness", () => {
  const clientBusiness = new ClientBusiness(
    new ClientDatabaseMock(),
    new AuthenticatorMock()
  )

  test("Um objeto é retornado quando o getClientById é bem-sucedido", async () => {
    const id = "id1";
    const token = "token-mock-admin";

    const response: any = await clientBusiness.getClientById(id, token)
    expect(response.name).toBe("Cliente A");
    expect(response.email).toBe("clientea@gmail.com");
    expect(Object.keys(response).length).toBe(6);
  })
  
  test("Erro quando o ID não existe", async () => {
    expect.assertions(2)

    try {
      const id = "id12";
      const token = "token-mock-admin";

      await clientBusiness.getClientById(id, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("ID não cadastrado.")
      }
    }
  })
})