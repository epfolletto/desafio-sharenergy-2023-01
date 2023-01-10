import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { ILoginInputDTO } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método login da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Um token e uma mensagem de sucesso são retornados quando o login é bem-sucedido", async () => {
    const input: ILoginInputDTO = {
      username: "mocknormal",
      password: "normal"
    }

    const response = await userBusiness.login(input)
    expect(response.message).toBe("Login realizado com sucesso.")
    expect(response.token).toBe("token-mock-normal")
  })

  test("Erro quando 'username' ou 'password' estiverem faltando", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        username: "mocknormal",
        // password: "normal"
      }

      await userBusiness.login(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Um ou mais parâmetros estão faltando.")
      }
    }
  })

  test("Erro quando 'username' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        username: 2,
        password: "normal"
      }

      await userBusiness.login(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'username' inválido.")
      }
    }
  })

  test("Erro quando 'password' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        username: "mocknormal",
        password: 2
      }

      await userBusiness.login(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'password' inválido.")
      }
    }
  })

  test("Erro quando 'username' não encontrado no banco de dados", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        username: "mocknormall",
        password: "normal"
      }

      await userBusiness.login(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("Username e/ou Senha inválidos.")
      }
    }
  })

  test("Erro quando 'password' for incorreto", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        username: "mocknormal",
        password: "normall"
      }

      await userBusiness.login(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Username e/ou Senha inválidos.")
      }
    }
  })
})