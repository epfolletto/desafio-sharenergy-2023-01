import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-CreateClientPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useForm from "./../../hooks/useForm";
import { BASE_URL } from '../../constants/BASE_URL';
import { goToClientPage } from "./../../router/coordinator.js";

export default function CartPage() {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    phone: "",
    adress: "",
    cpf: "",
  })

  const createClient = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}/client/create`, form,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        alert("Cliente criado com sucesso!");
        cleanFields()
      })
      .catch(error => {
        const errorCode = error.response.status
        if(errorCode >= 400 && errorCode <= 500){
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else if(errorCode >= 500 && errorCode <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde.")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
      })
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.Container>
          <s.Title>
            <s.TitleRegister>Cadastrar cliente</s.TitleRegister>
          </s.Title>

          <s.Form onSubmit={createClient}>
            <s.Field>
              <s.Legend>Nome*</s.Legend>
              <s.Input
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeholder="Entre 4 e 20 caracters"
                required
                type={"text"}
                pattern={"^.{4,20}"}
                title={"O Nome deve possuir no mínimo 4 e no máximo 20 caracters"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Email*</s.Legend>
              <s.Input
                name={"email"}
                value={form.email}
                onChange={onChange}
                placeholder="Digite seu e-mail"
                required
                type={"email"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Telefone*</s.Legend>
              <s.Input
                name={"phone"}
                value={form.phone}
                onChange={onChange}
                placeholder="Ex.: (XX)XXXXX-YYYY"
                required
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Endereço*</s.Legend>
              <s.Input
                name={"adress"}
                value={form.adress}
                onChange={onChange}
                placeholder="Ex.: Av. Central, 11, ..."
                required
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>CPF*</s.Legend>
              <s.Input
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                placeholder="Ex.: 11122233344"
                required
                type={"text"}
              />
            </s.Field>

            <s.Buttons>
              <s.Button onClick={() => goToClientPage(navigate)} value="back">Voltar</s.Button>
              <s.Button>Cadastrar</s.Button>
            </s.Buttons>

          </s.Form>

        </s.Container>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}