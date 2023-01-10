import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { ILoginInputDTO, IUpdateRoleInputDTO, IUpdateDataUserInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) { }

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        username: req.body.username,
        password: req.body.password
      }

      const response = await this.userBusiness.login(input)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao fazer login." })
    }
  }

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.password,
        role: req.body.role
      }

      const response = await this.userBusiness.signup(input)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário." })
    }
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const response = await this.userBusiness.getAll(token);
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
    }
  }

  public getUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const response = await this.userBusiness.getUserById(id, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário." })
    }
  }

  public updateRoleById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const input: IUpdateRoleInputDTO = {
        id: req.body.id,
        role: req.body.role
      }

      const response = await this.userBusiness.updateRoleById(input, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }

  public deleteUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const response = await this.userBusiness.deleteUserById(id, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao deletar usuário." })
    }
  }

  public updateUserDataById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const input: IUpdateDataUserInputDTO = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        birthdate: req.body.birthdate,
        cpf: req.body.cpf,
        marital: req.body.marital,
        logradouro: req.body.logradouro,
        number: req.body.number,
        complement: req.body.complement,
        district: req.body.district,
        city: req.body.city,
        username: req.body.username,
        email: req.body.email
      }
      
      const response = await this.userBusiness.updateUserDataById(input, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }

  public getUserDataByToken = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.userBusiness.getUserDataByToken(token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }
}