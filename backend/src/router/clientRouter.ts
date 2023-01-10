import { Router } from 'express';
import { ClientBusiness } from '../business/ClientBusiness';
import { ClientController } from '../controller/ClientController';
import { ClientDatabase } from '../database/ClientDatabase';
import { Authenticator } from '../services/Authenticator';

export const clientRouter = Router();

const clientController = new ClientController(
  new ClientBusiness(
    new ClientDatabase(),
    new Authenticator()
  )
)

clientRouter.get("/:id", clientController.getClientById);
clientRouter.get("/", clientController.getAll);
clientRouter.post("/create", clientController.createClient);
clientRouter.put("/edit", clientController.updateClientDataById);
clientRouter.delete("/:id", clientController.deleteClientById);