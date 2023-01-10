import React, { useState, useEffect } from "react";
import * as s from './styled-ClientPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';
import useAuthorizationPage from '../../hooks/useAuthorizationPage';
import { goToCreateClientPage, goToEditClientPage } from "./../../router/coordinator.js";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../constants/BASE_URL';
import img_detail from './../../assets/images/img_detail.png';
import img_edit from './../../assets/images/img_edit.png';
import img_trash from './../../assets/images/img_trash.png';

export default function UsersPage() {
  useProtectedPage();
  useAuthorizationPage();
  const navigate = useNavigate();

  const [listClient, setListClient] = useState();
  const [openDetail, setOpenDetail] = useState(false);
  const [idSelect, setIdSelect] = useState();
  const [detailClient, setDetailClient] = useState();
  const [atualizar, setAtualizar] = useState(true);

  const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));

  const getClients = () => {
    axios.get(`${BASE_URL}/client`,
    {
      headers:
      {
        authorization: token
      }
    })
    .then(res => {
      setListClient(res.data);
    })
    .catch(error => {
        const errorCode = error.response.status
        if(errorCode >= 400 && errorCode <= 500){
          alert(`Erro ${errorCode}: ${error.response.data.message}`);
        } else if(errorCode >= 500 && errorCode <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde.");
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde");
        }
    })
  }
  useEffect(() => {
    getClients()
  }, [atualizar])

  const deleteClientById = (id, name) => {
    const deleteClient = window.confirm(`Deseja deletar o usuário ${name}?`);
    if (deleteClient) {
      axios.delete(`${BASE_URL}/client/${id}`,
        {
          headers:
          {
            authorization: token
          }
        })
        .then(res => {
          alert(`O usuário ${name} foi deletado com sucesso!`);
          setAtualizar(!atualizar);
        })
        .catch(error => {
          const errorCode = error.response.status
          if(errorCode >= 400 && errorCode <= 500){
            alert(`Erro ${errorCode}: ${error.response.data.message}`);
          } else if(errorCode >= 500 && errorCode <= 600){
            alert("Ocorreu um erro no servidor, tente novamente mais tarde.");
          } else {
            alert("Ocorreu um erro, tente novamente mais tarde");
          }
        })
    }
  }

  const getClientById = async (id) => {
    await axios.get(`${BASE_URL}/client/${id}`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        setIdSelect(id)
        setDetailClient(res.data)
        changeOpenDetail(true)
      })
      .catch(error => {
        const errorCode = error.response.status
        if(errorCode >= 400 && errorCode <= 500){
          alert(`Erro ${errorCode}: ${error.response.data.message}`);
        } else if(errorCode >= 500 && errorCode <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde.");
        } else {
          alert("Erro no servidor, tente novamente mais tarde!");
        }
      })
  }

  const changeOpenDetail = (input) => {
    setOpenDetail(input);
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header/>
      </s.LineHeader>

      <s.Main>
        <s.LeftBox>
          <s.TitleClientAndDetail>Lista de clientes</s.TitleClientAndDetail>
          <s.BoxList>
            {
              listClient && listClient.map((user, index) => {
                return (
                  <s.UserList status={openDetail} value={user._id} id2={idSelect} key={index}>
                    <s.UserName name = {user.name}> {user.name} </s.UserName>
                    <s.UserDetail>
                      <s.ImgDetail onClick={() => getClientById(user._id)} src={img_detail} />
                    </s.UserDetail>
                    <s.UserEdit>
                      <s.ImgEdit onClick={() => goToEditClientPage(navigate, user._id)} src={img_edit} />
                    </s.UserEdit>
                    <s.UserTrash>
                      <s.ImgTrash onClick={() => deleteClientById(user._id, user.name)} src={img_trash} />
                    </s.UserTrash>
                  </s.UserList>
                )
              })
            }
          </s.BoxList>
          <s.BoxButtonAddClient>
            <s.ButtonAddClient onClick={() => goToCreateClientPage(navigate)}>Novo cliente</s.ButtonAddClient>
          </s.BoxButtonAddClient>
        </s.LeftBox>

        {
          openDetail && listClient.length > 0 ?
            <s.RightBox>
              <s.RightBoxUp>
                <s.TitleClientAndDetail>Detalhes</s.TitleClientAndDetail>
                {
                  <>
                    <s.ClientInfo> <b>Nome:&nbsp;</b> {detailClient.name} </s.ClientInfo>
                    <s.ClientInfo> <b>Email:&nbsp;</b> {detailClient.email} </s.ClientInfo>
                    <s.ClientInfo> <b>Telefone:&nbsp;</b> {detailClient.phone} </s.ClientInfo>
                    <s.ClientInfo> <b>Endereço:&nbsp;</b> {detailClient.adress} </s.ClientInfo>
                    <s.ClientInfo> <b>CPF:&nbsp;</b> {detailClient.cpf} </s.ClientInfo>
                 </>
                }
              </s.RightBoxUp>
              <s.RightBoxDown>
                <s.ButtonClose onClick={() => changeOpenDetail(false)}>Fechar</s.ButtonClose>
              </s.RightBoxDown>

            </s.RightBox>
            :
            <>
            </>
        }
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}