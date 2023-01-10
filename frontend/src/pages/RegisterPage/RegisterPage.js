import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-RegisterPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useForm from "./../../hooks/useForm";
import { BASE_URL } from '../../constants/BASE_URL';
import { goToLoginPage } from "./../../router/coordinator.js";

export default function CartPage() {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const signUp = (event) => {
    event.preventDefault();
    form.role = "NORMAL"
    axios.post(`${BASE_URL}/users/signup`, form)
      .then( res  => {
        alert("Conta criada com sucesso! \nVocê pode complementar suas informações em 'Meu Perfil'.");
        goToLoginPage(navigate);
      })
      .catch( error => {
        const errorCode = error.response.status
        if(errorCode >= 400 && errorCode <= 500){
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else if(errorCode >= 500 && errorCode <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
      })
      cleanFields()
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.Container>
          <s.Title>
            <s.TitleRegister>Cadastrar</s.TitleRegister>
          </s.Title>

          <s.Form onSubmit={signUp}>
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
              <s.Legend>Username*</s.Legend>
              <s.Input
                name={"username"}
                value={form.username}
                onChange={onChange}
                placeholder="Entre 4 e 20 caracters"
                required
                type={"text"}
                pattern={"^.{4,20}"}
                title={"O Username deve possuir no mínimo 4 e no máximo 20 caracters"}
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
              <s.Legend>Senha*</s.Legend>
              <s.Input
                name={"password"}
                value={form.password}
                onChange={onChange}
                placeholder="Mínimo 6 caracters"
                required
                type={"password"}
                pattern={"^.{6,}"}
                title={"A senha deve possuir no mínimo 6 caracters"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Confirmar Senha*</s.Legend>
              <s.Input
                name={"confirmPassword"}
                value={form.confirmPassword}
                onChange={onChange}
                placeholder="Mínimo 6 caracters"
                required
                type={"password"}
                pattern={"^.{6,}"}
                title={"A senha deve possuir no mínimo 6 caracters"}
              />
            </s.Field>

            <s.Buttons>
              <s.Button onClick={() => goToLoginPage(navigate)} value="back">Voltar</s.Button>
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