import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateClientInputDTO, IUpdateDataClientInputDTO } from "../models/Client";

export class ClientController {
  constructor(
    private clientBusiness: ClientBusiness
  ) { }

  public getAll = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.clientBusiness.getAll(token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao carregar os clientes" })
    }
  }

  public deleteClientById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const response = await this.clientBusiness.deleteClientById(id, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao deletar o cliente." })
    }
  }

  public getClientById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const response = await this.clientBusiness.getClientById(id, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }

  public createClient = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const input: ICreateClientInputDTO = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        adress: req.body.adress,
        cpf: req.body.cpf
      }

      const response = await this.clientBusiness.createClient(input, token)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao cadastrar cliente." })
    }
  }

  public updateClientDataById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const input: IUpdateDataClientInputDTO = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        phone: req.body.phone,
        adress: req.body.adress,
      }
      
      const response = await this.clientBusiness.updateClientDataById(input, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao atualizar os dados do cliente." })
    }
  }
}