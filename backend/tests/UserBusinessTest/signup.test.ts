import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { ISignupInputDTO, USER_ROLES } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método signup da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando o signup é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      name: "Mock Normal 2",
      username: "mocknormal 2",
      email: "mocknormal@gmail.com",
      password: "normal",
      confirmPassword: "normal",
      role: USER_ROLES.NORMAL
    }

    const response = await userBusiness.signup(input)
    expect(response.message).toBe("Cadastro do usuário realizado com sucesso.")
  })

  test("Erro quando algum dos parâmetros estiverem faltando", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Um ou mais parâmetros estão faltando.")
      }
    }
  })

  test("Erro quando 'name' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: 2,
        username: "mocknormal 2",
        email: "mocknormal@gmail.com",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Nome' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'username' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: 2,
        email: "mocknormal@gmail.com",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Username' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'email' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: 2,
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Email' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'password' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: "mocknormal@gmail.com",
        password: 2,
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Senha' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'confirmPassword' não for string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: "mocknormal@gmail.com",
        password: "normal",
        confirmPassword: 2,
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Confirmar senha' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando o 'password' possuir menos de 6 caracters", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: "mocknormal@gmail.com",
        password: "norma",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Senha' inválido: mínimo de 6 caracteres.")
      }
    }
  })

  test("Erro quando os campos 'password' e 'confirmPassword' forem diferentes", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: "mocknormal@gmail.com",
        password: "normal",
        confirmPassword: "normall",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Os campos senha e confirmar senha devem ser iguais.")
      }
    }
  })

  test("Erro quando o parâmetro 'name' possui menos que 4 ou mais que 20 caracters", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Moc",
        username: "mocknormal 2",
        email: "mocknormal@gmail.com",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Name' inválido: mínimo de 4 e máximo de 20 caracteres.")
      }
    }
  })

  test("Erro quando o parâmetro 'username' possui menos que 4 ou mais que 20 caracters", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "moc",
        email: "mocknormal@gmail.com",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Username' inválido: mínimo de 4 e máximo de 20 caracteres.")
      }
    }
  })

  test("Erro quando o parâmetro 'email' não está no formato correto", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: "mocknormal@",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'email' inválido.")
      }
    }
  })

  test("Erro quando o parâmetro 'email' já está cadastrado", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal 2",
        email: "normaluser@gmail.com",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Email e/ou Usuário já cadastrado.")
      }
    }
  })

  test("Erro quando o parâmetro 'username' já está cadastrado", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Mock Normal 2",
        username: "mocknormal",
        email: "normaluser@gmail.com",
        password: "normal",
        confirmPassword: "normal",
        role: USER_ROLES.NORMAL
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Email e/ou Usuário já cadastrado.")
      }
    }
  })
})