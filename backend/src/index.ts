import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const connectionString = "mongodb+srv://sharenergy:desafiosharenergy@cluster0.98uqrru.mongodb.net/sharenergy?retryWrites=true&w=majority";

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => {
    app.emit('pronto');
  })
  .catch( e => console.log(e));

import { userRouter } from './router/userRouter';
import { clientRouter } from './router/clientRouter';

app.on('pronto', () => {
  app.listen(3003, () => {
      console.log(`Servidor rodando na porta ${3003}`)
  })
})

app.use("/users", userRouter);
app.use("/client", clientRouter);