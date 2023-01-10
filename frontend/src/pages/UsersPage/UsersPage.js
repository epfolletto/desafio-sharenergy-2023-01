import React, { useState, useEffect } from "react";
import * as s from './styled-UsersPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';
import useAuthorizationPage from '../../hooks/useAuthorizationPage';
import { BASE_URL } from '../../constants/BASE_URL';
import img_trash from './../../assets/images/img_trash.png'
import img_detail from './../../assets/images/img_detail.png'

export default function UsersPage() {
  useProtectedPage();
  useAuthorizationPage();

  const [listUsers, setListUsers] = useState();
  const [openDetail, setOpenDetail] = useState(false);
  const [idSelect, setIdSelect] = useState()
  const [detailUser, setDetailUser] = useState()
  const [atualizar, setAtualizar] = useState(true)

  const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));

  const getUsers = (token) => {
    axios.get(`${BASE_URL}/users`,
    {
      headers:
      {
        authorization: token
      }
    })
    .then( res => {
      setListUsers(res.data);
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
  }
  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));
    getUsers(token)
  }, [atualizar])

  const updateRole = (event) => {
    event.preventDefault();
    const body = {
      id: event.target.id,
      role: event.target.value
    }
    axios.put(`${BASE_URL}/users/`, body,
      {
        headers:
        {
          authorization: token
        }
      })
      .then( res => {
        alert(`O usuário ${event.target.name} foi atualizado para o tipo ${event.target.value.toUpperCase()}.`);
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
  }

  const deleteUserById = (id, username) => {
    const deleteUser = window.confirm(`Deseja deletar o usuário ${username}?`);
    if (deleteUser) {
      axios.delete(`${BASE_URL}/users/${id}`,
        {
          headers:
          {
            authorization: token
          }
        }).then( res => {
          alert(`O usuário ${username} foi deletado com sucesso!`);
          setAtualizar(!atualizar);
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
    }
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
      .then( res => {
        setIdSelect(id)
        setDetailUser(res.data)
        changeOpenDetail(true)
      })
      .catch( error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
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
          <s.TitleListAndDetail>Lista de usuários</s.TitleListAndDetail>
          <s.BoxList>
          {
            listUsers && listUsers.map((user, index) => {
              return (
                  <s.UserList status={openDetail} value={user._id} id2={idSelect} key={index}>
                    <s.UserName name = {user.username}> {user.username} </s.UserName>

                    <s.SelectRole
                      disabled = {user.username === "desafiosharenergy" ? true : false} 
                      onChange = {updateRole}
                      id = {user._id}
                      name = {user.username}
                    >
                      {
                        user.role === "ADMIN" ?
                          <>
                            <option value="ADMIN">admin</option>
                            <option value="NORMAL">normal</option>
                          </>
                          :
                          <>
                            <option value="NORMAL">normal</option>
                            <option value="ADMIN">admin</option>
                          </>
                      }
                    </s.SelectRole>

                    <s.UserDetail>
                      <s.ImgDetail onClick={() => getUserById(user._id)} src={img_detail} />
                    </s.UserDetail>
                    {
                      user.username !== "desafiosharenergy" ?
                        <s.UserTrash>
                          <s.ImgTrash onClick={() => deleteUserById(user._id, user.username)} src={img_trash} />
                        </s.UserTrash>
                      :
                        <s.UserTrash>
                        </s.UserTrash>
                    }
                  </s.UserList>
              )
            })
          }
          </s.BoxList>
        </s.LeftBox>
        {
          openDetail && listUsers.length > 0 ?
            <s.RightBox>
              <s.RightBoxUp>
                <s.TitleListAndDetail>Detalhes</s.TitleListAndDetail>
                {
                  <>
                    <s.UserInfo> <b>Nome:&nbsp;</b> {detailUser.name} </s.UserInfo>
                    <s.UserInfo> <b>Idade:&nbsp;</b> {detailUser.age} </s.UserInfo>
                    <s.UserInfo> <b>Data de nascimento:&nbsp;</b> {detailUser.birthdate && detailUser.birthdate.split('T')[0].split('-').reverse().join('/')} </s.UserInfo>
                    <s.UserInfo> <b>CPF:&nbsp;</b> {detailUser.cpf} </s.UserInfo>
                    <s.UserInfo> <b>Estado civil:&nbsp;</b> {detailUser.marital} </s.UserInfo>
                    <s.UserInfo> <b>Logradouro:&nbsp;</b> {detailUser.logradouro} </s.UserInfo>
                    <s.UserInfo> <b>Número:&nbsp;</b> {detailUser.number} </s.UserInfo>
                    <s.UserInfo> <b>Complemento:&nbsp;</b> {detailUser.complement} </s.UserInfo>
                    <s.UserInfo> <b>Estado:&nbsp;</b> {detailUser.district} </s.UserInfo>
                    <s.UserInfo> <b>Cidade:&nbsp;</b> {detailUser.city} </s.UserInfo>
                    <s.UserInfo> <b>Username:&nbsp;</b> {detailUser.username} </s.UserInfo>
                    <s.UserInfo> <b>Email:&nbsp;</b> {detailUser.email} </s.UserInfo>
                    <s.UserInfo> <b>Tipo de conta:&nbsp;</b> {detailUser.role} </s.UserInfo>
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