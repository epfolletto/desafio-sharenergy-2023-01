import { ClientBusiness } from "../../src/business/ClientBusiness";
import { ClientDatabaseMock } from "../mocks/ClientDatabaseMock";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { BaseError } from "../../src/errors/BaseError";

describe("Testando o método getClientById da ClientBusiness", () => {
  const clientBusiness = new ClientBusiness(
    new ClientDatabaseMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando o getClientById é bem-sucedido", async () => {

    const token = "token-mock-admin";
    const input: any = {
      name: "Teste",
      email: "teste@gmail.com",
      phone: "45632594874",
      adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
      cpf: "55566688899"
    }

    const response = await clientBusiness.createClient(input, token)
    expect(response.message).toBe("Cadastro do cliente realizado com sucesso.")
  })
  
  test("Erro quando algum dos parâmetros estiverem faltando", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Um ou mais parâmetros estão faltando.")
      }
    }
  })

  test("Erro quando 'name' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: 2,
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Nome' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'email' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Teste",
        email: 2,
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Email' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'phone' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Teste",
        email: "teste@gmail.com",
        phone: 2,
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Telefone' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'adress' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Teste",
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: 2,
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Endereço' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'cpf' não for string", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Teste",
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: 2
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'CPF' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'name' ter menos que 4 ou mais que 25 caracters", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Tes",
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Nome' inválido: mínimo de 4 e máximo de 25 caracteres.")
      }
    }
  })

  test("Erro quando 'email' não ter um formato válido", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Teste",
        email: "teste",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Email' inválido.")
      }
    }
  })

  test("Erro quando 'email' já estar cadastrado", async () => {
    expect.assertions(2)

    const token = "token-mock-admin";
    try {
      const input: any = {
        name: "Teste",
        email: "clientea@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Email já cadastrado.")
      }
    }
  })

  test("Erro quando o token não é válido", async () => {
    expect.assertions(2)

    const token = "token-mock-admin-errado";
    try {
      const input: any = {
        name: "Teste",
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)
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
        name: "Teste",
        email: "teste@gmail.com",
        phone: "45632594874",
        adress: "Av. 7 de Setembro, 44, sala 2, Centro, Curitiba/PR",
        cpf: "55566688899"
      }

      await clientBusiness.createClient(input, token)
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toBe("Você não possui autorização para essa tarefa.")
      }
    }
  })
})