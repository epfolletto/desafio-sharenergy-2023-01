import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método updateUserDataById da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando o updateUserDataById é bem-sucedido", async () => {
    const token = "token-mock-normal";
    const input: any = {
      id: "id-mock-normal",
      name: "User Mock Normal",
      age: 32,
      cpf: "11122233344",
      marital: "Solteiro",
      logradouro: "Av. Paulista",
      number: 23,
      complement: "apto 702",
      district: "Centro",
      city: "São Paulo/SP",
      username: "mocknormal",
      email: "usermocknormal@gmail.com"
    }

    const response = await userBusiness.updateUserDataById(input, token)
    expect(response.message).toBe("Dados atualizados com sucesso!")
  })

  test("Erro quando 'ID' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: 2,
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'ID' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'Name' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: 2,
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Nome' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'age' não for number", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: "32",
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Idade' inválido: deve ser um number.")
      }
    }
  })

  test("Erro quando 'cpf' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: 11122233344,
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'CPF' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'marital' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: 2,
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Estado civil' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'lograduro' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: 2,
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Logradouro' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'number' não for number", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: "23",
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Número' inválido: deve ser um number.")
      }
    }
  })

  test("Erro quando 'complement' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: 2,
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Complemento' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'district' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: 2,
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Bairro' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'city' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: 2,
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Cidade/Estado' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando 'username' não for string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: 2,
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Username' inválido: deve ser uma string.")
      }
    }
  })

  test("Erro quando o 'name' possuir menos de 4 ou mais de 20 caracters", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "Use",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Name' inválido: mínimo de 4 e máximo de 20 caracteres.")
      }
    }
  })

  test("Erro quando o 'username' possuir menos de 4 ou mais de 20 caracters", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "moc",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Username' inválido: mínimo de 4 e máximo de 20 caracteres.")
      }
    }
  })

  test("Erro quando o 'email' não possuir formato válido", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Email' inválido.")
      }
    }
  })

  test("Erro quando o 'age' for menor que 0", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: -2,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Idade' inválido: deve ser um número positivo.")
      }
    }
  })

  test("Erro quando o 'cpf' não possuir 11 digítos no total", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "1112223334",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'CPF' inválido: deve ter 11 caracters.")
      }
    }
  })

  test("Erro quando o 'logradouro' tiver mais de 25 digítos", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulistaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Logradouro' inválido: não pode haver mais de 25 caracters.")
      }
    }
  })

  test("Erro quando o 'complemento' tiver mais de 25 digítos", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "aptooooooooooooooooooooooooooooooooooooooo 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Complemento' inválido: não pode haver mais de 25 caracters.")
      }
    }
  })

  test("Erro quando o 'district' tiver mais de 25 digítos", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centroooooooooooooooooooooooooooooooooooooo",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Bairro' inválido: não pode haver mais de 25 caracters.")
      }
    }
  })

  test("Erro quando o 'city' tiver mais de 25 digítos", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Pauloooooooooooooooooooooooooooooooo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Cidade e estado' inválido: não pode haver mais de 25 caracters.")
      }
    }
  })

  test("Erro quando o 'birthdate' for diferente de string", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        birthdate: 1980-12-11,
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'Data de nascimento' inválido: deve ser uma data.")
      }
    }
  })

  test("Erro quando o 'birthdate' é uma data futura", async () => {
    expect.assertions(2)
    
    const token = "token-mock-normal";
    try {
      const input: any = {
        id: "id-mock-normal",
        name: "User Mock Normal",
        age: 32,
        cpf: "11122233344",
        marital: "Solteiro",
        birthdate: "2024-12-11",
        logradouro: "Av. Paulista",
        number: 23,
        complement: "apto 702",
        district: "Centro",
        city: "São Paulo/SP",
        username: "mocknormal",
        email: "usermocknormal@gmail.com"
      }

      await userBusiness.updateUserDataById(input, token)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Não é permitido escolher datas futuras.")
      }
    }
  })
})