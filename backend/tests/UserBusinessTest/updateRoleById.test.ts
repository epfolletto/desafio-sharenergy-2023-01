import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { USER_ROLES } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método updateRoleById da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando o updateRoleById é bem-sucedido", async () => {
    const token = "token-mock-admin";
    const input: any = {
      id: "id-mock-normal",
      role: USER_ROLES.NORMAL
    }

    const response = await userBusiness.updateRoleById(input, token)
    expect(response.message).toBe("Role atualizada com sucesso.")
  })

  test("Erro quando algum dos parâmetros estiverem faltando", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        role: USER_ROLES.NORMAL
      }

      await userBusiness.updateRoleById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Um ou mais parâmetros estão faltando.")
      }
    }
  })

  test("Erro quando 'ID' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        id: 2,
        role: USER_ROLES.NORMAL
      }

      await userBusiness.updateRoleById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'ID' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'role' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        id: "id-mock-normal",
        role: 2
      }

      await userBusiness.updateRoleById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Role' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando o ID não for cadastrado", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        id: "id-mock-normalll",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.updateRoleById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("ID não cadastrado.")
      }
    }
  })

  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    const token = "token-mock-admin-errado";
    try {
      const input: any = {
        id: "id-mock-normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.updateRoleById(input, token)
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
      const input: any = {
        id: "id-mock-normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.updateRoleById(input, token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toBe("Você não possui autorização para essa tarefa.")
      }
    }
  })
})