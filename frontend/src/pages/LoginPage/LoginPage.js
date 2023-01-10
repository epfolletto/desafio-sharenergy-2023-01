import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import * as s from './styled-LoginPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useForm from "./../../hooks/useForm";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToRegisterPage, goToPeoplesPage } from "./../../router/coordinator";

export default function CartPage() {
  const navigate = useNavigate()
  useUnprotectedPage();

  const [rememberMe, setRememberMe] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));
    if(token){
      goToPeoplesPage(navigate);
      setToken(token);
    }
  }, [])

  const { form, onChange, cleanFields } = useForm({
    username: "",
    password: "",
  })

  const login = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}/users/login`, form)
    .then( res => {
      if (token) localStorage.removeItem('token')
      if (token) sessionStorage.removeItem('token')

      if (rememberMe) {
        localStorage.setItem("token", JSON.stringify(res.data.token))
      } else {
        sessionStorage.setItem("token", JSON.stringify(res.data.token))
      }

      goToPeoplesPage(navigate);
    })
    .catch( error => {
      const errorCode = error.response.status
      if(errorCode >= 400 && errorCode <= 500){
        alert(`Erro ${errorCode}: ${error.response.data.message}`)
      } else if(errorCode >= 500 && errorCode <= 600){
        alert("Ocorreu um erro no servidor, tente novamente mais tarde.")
      } else {
        alert("Ocorreu um erro, tente novamente mais tarde.")
      }
      cleanFields()
    })
  }

  const onChangeRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.Container>
          <s.Title>
            <s.TitleLogin>Login</s.TitleLogin>
          </s.Title>

          <s.Form onSubmit={login}>
            <s.Field>
              <s.Legend>Username*</s.Legend>
              <s.Input
                name={"username"}
                value={form.username}
                onChange={onChange}
                placeholder="Digite seu username"
                required
                type={"username"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Senha*</s.Legend>
              <s.Input
                name={"password"}
                value={form.password}
                onChange={onChange}
                placeholder="Digite sua senha"
                required
                type={"password"}
              />
            </s.Field>

            <s.RememberMe>
              <s.InputRememberMe type='checkbox' onChange={onChangeRememberMe}></s.InputRememberMe>
              <label>Lembrar-me</label>
            </s.RememberMe>

            <s.ButtonLogin type={'submit'}>Entrar</s.ButtonLogin>
          </s.Form>

          <s.Register>
            <s.Text>
              Não possui cadastro?
            </s.Text>
            <s.DivRegister onClick={()=>goToRegisterPage(navigate)}>
              Clique aqui
            </s.DivRegister>
          </s.Register>
        </s.Container>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}