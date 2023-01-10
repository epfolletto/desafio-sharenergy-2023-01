import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from './styled-EditClientPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useForm from "./../../hooks/useForm";
import { BASE_URL } from '../../constants/BASE_URL';
import { goToClientPage } from "./../../router/coordinator.js";

export default function CartPage() {
  const navigate = useNavigate();
  const params = useParams()

  const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));

  const [detailUser, setDetailUser] = useState();

  const { form, onChange } = useForm({
    name: undefined,
    email: undefined, 
    cpf: undefined,
    phone: undefined,
    adress: undefined,
  })

  const getClientById = async () => {
    await axios
      .get(`${BASE_URL}/client/${params.id}`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        setDetailUser(res.data)
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }
  useEffect(() => {
    getClientById()
  }, [])

  const updateClientDataById = () => {
    const body = {
      id: detailUser._id,
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      phone: form.phone,
      adress: form.adress,
    }
    
    axios.put(`${BASE_URL}/client/edit/`, body,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        alert(`Dados do cliente *${body.name}* alterados com sucesso!`);
        goToClientPage(navigate);
      })
      .catch(error => {
        const returnErr = error.response.status
        if(returnErr >= 400 && returnErr <= 500){
          alert(`${error.response.data.message}`)
        } else if(returnErr >= 500 && returnErr <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
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
          <s.TitleEdit>Editar dados</s.TitleEdit>

          <s.Form onSubmit={updateClientDataById}>
            <s.Field>
              <s.Legend>Nome*</s.Legend>
              <s.Input
                name={"name"}
                value={(form.name === undefined && detailUser) ? form.name = detailUser.name : form.name}
                onChange={onChange}
                placeholder="Entre 4 e 20 caracters"
                required
                type={"text"}
                pattern={"^.{4,25}"}
                title={"O Nome deve possuir no mínimo 4 e no máximo 25 caracters"}
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
            <s.Field>
              <s.Legend>Telefone</s.Legend>
              <s.Input
                name={"phone"}
                value={(form.phone === undefined && detailUser) ? form.phone = detailUser.phone : form.phone}
                onChange={onChange}
                placeholder="Ex.: (ZZ)XXXXX-YYYY"
                type={"text"}
                />
            </s.Field>
            <s.Field>
              <s.Legend>Endereço</s.Legend>
              <s.Input
                name={"adress"}
                value={(form.adress === undefined && detailUser) ? form.adress = detailUser.adress : form.adress}
                onChange={onChange}
                placeholder="Ex.: Rua Rio Branco, 11, ..."
                type={"text"}
              />
            </s.Field>
          </s.Form>

          <s.Buttons>
            <s.Button onClick={() => goToClientPage(navigate)} value="back">Voltar</s.Button>
            <s.Button onClick={() => updateClientDataById()} value="save">Salvar</s.Button>
          </s.Buttons>
        </s.Container>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}