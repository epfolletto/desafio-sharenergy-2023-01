import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { USER_ROLES } from '../models/User';

dotenv.config();

const JWT_KEY = "minha-senha-segura-bananinha123";
const JWT_EXPIRES_IN = "24h";

export interface ITokenPayload {
  id: String,
  role: USER_ROLES
}

export class Authenticator {
  generateToken = (payload: ITokenPayload): string => {
    const token = jwt.sign(
      payload,
      JWT_KEY as string,
      {
        expiresIn: JWT_EXPIRES_IN
      }
    )

    return token
  }

  getTokenPayload = (token: string): ITokenPayload | null => {
    try {
      const payload = jwt.verify(
        token,
        JWT_KEY as string
      )

      return payload as ITokenPayload
    } catch (error) {
      return null
    }
  }
}