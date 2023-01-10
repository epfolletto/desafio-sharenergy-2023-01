import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-ProfilePage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useForm from "./../../hooks/useForm";
import { BASE_URL } from '../../constants/BASE_URL';
import { goToLoginPage } from "./../../router/coordinator.js";

export default function CartPage() {
  const navigate = useNavigate();

  const [detailUser, setDetailUser] = useState();

  const { form, onChange } = useForm({
    name: undefined,
    age: undefined,
    birthdate: undefined,
    cpf: undefined,
    marital: undefined,
    logradouro: undefined,
    number: undefined,
    complement: undefined,
    district: undefined,
    city: undefined,
    username: undefined,
    email: undefined, 
    role: undefined
  })

  const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));

  const getUserDataByToken = async () => {
    await axios
      .get(`${BASE_URL}/users/getdata/`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        getUserById(res.data.id);
      })
      .catch(error => {
        const errorCode = error.response.status
        if(errorCode >= 400 && errorCode <= 500){
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else if(errorCode >= 500 && errorCode <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde.")
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }

  const getUserById = async (id) => {
    await axios
      .get(`${BASE_URL}/users/${id}`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        const obj = {...res.data}
        if(obj.birthdate) obj.birthdate = obj.birthdate.split('T')[0]
        if(obj.age) obj.age = Number(obj.age)
        setDetailUser(obj)
      })
      .catch(error => {
        const errorCode = error.response.status
        if(errorCode >= 400 && errorCode <= 500){
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else if(errorCode >= 500 && errorCode <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde.")
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }
  useEffect(() => {
    getUserDataByToken();
  }, [])

  const updateUserData = () => {
    const body = {
      id: detailUser._id,
      name: form.name,
      birthdate: form.birthdate,
      cpf: form.cpf,
      marital: form.marital,
      logradouro: form.logradouro,
      complement: form.complement,
      district: form.district,
      city: form.city,
      username: form.username,
      email: form.email
    }
    if(form.age) body.age = Number(form.age)
    if(form.number) body.number = Number(form.number)
    
    axios.put(`${BASE_URL}/users/profile/edit`, body, 
    {
      headers:
      {
        authorization: token
      }
    })
      .then(res => {
        alert(`Dados do usuário *${detailUser.username}* alterados com sucesso!`);
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
          <s.Form onSubmit={updateUserData}>
            <s.TitleSection>
              <s.TitleLogin>Dados pessoais</s.TitleLogin>
            </s.TitleSection>
            <s.Field>
              <s.Legend>Nome*</s.Legend>
              <s.Input
                name={"name"}
                value={(form.name === undefined && detailUser) ? form.name = detailUser.name : form.name}
                onChange={onChange}
                placeholder="Entre 4 e 20 caracters"
                required
                type={"text"}
                pattern={"^.{4,20}"}
                title={"O Nome deve possuir no mínimo 4 e no máximo 20 caracters"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Idade</s.Legend>
              <s.Input
                name={"age"}
                value={(form.age === undefined && detailUser) ? form.age = detailUser.age : form.age}
                onChange={onChange}
                placeholder="Digite sua idade"
                type={"number"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Data de nascimento</s.Legend>
              <s.Input
                name={"birthdate"}
                value={(form.birthdate === undefined && detailUser) ? form.birthdate = detailUser.birthdate : form.birthdate}
                // value={(form.birthdate === undefined && detailUser) ? form.birthdate = detailUser.birthdate.split('T')[0] : form.birthdate}
                onChange={onChange}
                placeholder="Selecione sua data de nascimento"
                type={"date"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>CPF</s.Legend>
              <s.Input
                name={"cpf"}
                value={(form.cpf === undefined && detailUser) ? form.cpf = detailUser.cpf : form.cpf}
                onChange={onChange}
                placeholder="Ex.: 11122233344"
                type={"text"}
                />
            </s.Field>
            <s.FieldsetInput>
              <s.Legend>Estado civil:</s.Legend>
                <s.SelectStatus
                  value={(form.marital === undefined && detailUser) ? form.marital = detailUser.marital : form.marital}
                  onChange={onChange}
                  name={"marital"}
                >
                  <option value="selecione" disable="true">Selecione</option>
                  <option value="solteiro">Solteiro(a)</option>
                  <option value="casado">Casado(a)</option>
                  <option value="separado">Separado(a)</option>
                  <option value="divorciado">Divorciado(a)</option>
                  <option value="viuvo">Viúvo(a)</option>
                </s.SelectStatus>
            </s.FieldsetInput>

            <s.TitleSection>
              <s.TitleLogin>Dados de localização</s.TitleLogin>
            </s.TitleSection>

            <s.Field>
              <s.Legend>Logradouro</s.Legend>
              <s.Input
                name={"logradouro"}
                value={(form.logradouro === undefined && detailUser) ? form.logradouro = detailUser.logradouro : form.logradouro}
                onChange={onChange}
                placeholder="Ex.: Avenida Rio Branco"
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Número</s.Legend>
              <s.Input
                name={"number"}
                value={(form.number === undefined && detailUser) ? form.number = detailUser.number : form.number}
                onChange={onChange}
                placeholder="Ex.: 289"
                type={"number"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Complemento</s.Legend>
              <s.Input
                name={"complement"}
                value={(form.complement === undefined && detailUser) ? form.complement = detailUser.complement : form.complement}
                onChange={onChange}
                placeholder="Ex.: Apto 11"
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Bairro</s.Legend>
              <s.Input
                name={"district"}
                value={(form.district === undefined && detailUser) ? form.district = detailUser.district : form.district}
                onChange={onChange}
                placeholder="Ex.: Centro"
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Cidade e estado</s.Legend>
              <s.Input
                name={"city"}
                value={(form.city === undefined && detailUser) ? form.city = detailUser.city : form.city}
                onChange={onChange}
                placeholder="Ex.: Belo Horizonte, MG"
                type={"text"}
              />
            </s.Field>

            <s.TitleSection>
              <s.TitleLogin>Dados de conta</s.TitleLogin>
            </s.TitleSection>

            <s.Field>
              <s.Legend>Username*</s.Legend>
              <s.Input
                name={"username"}
                value={(form.username === undefined && detailUser) ? form.username = detailUser.username : form.username}
                onChange={onChange}
                placeholder="Entre 4 e 20 caracters"
                required
                type={"text"}
                pattern={"^.{4,20}"}
                title={"O Username deve possuir no mínimo 4 e no máximo 20 caracters"}
                disabled={true}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Email*</s.Legend>
              <s.Input
                name={"email"}
                value={(form.email === undefined && detailUser) ? form.email = detailUser.email : form.email}
                onChange={onChange}
                placeholder="Digite seu e-mail"
                required
                type={"email"}
                disabled={true}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Role</s.Legend>
              <s.Input
                name={"role"}
                value={detailUser ? form.role = detailUser.role : form.role}
                onChange={onChange}
                required
                type={"text"}
                disabled={true}
                />
            </s.Field>
          </s.Form>

          <s.Buttons>
            <s.Button onClick={() => goToLoginPage(navigate)} value="back">Voltar</s.Button>
            <s.Button onClick={() => updateUserData()} value="update">Atualizar</s.Button>
          </s.Buttons>
        </s.Container>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}