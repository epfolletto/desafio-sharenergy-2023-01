import React, {useState, useEffect} from "react";
import * as s from './styled-Header';
import axios from 'axios';
import { BASE_URL } from './../../constants/BASE_URL';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { goToPeoplesPage, goToStartPage, goToCatsPage, goToDogsPage, 
         goToUsersPage, goToProfilePage, goToLoginPage, goToClientPage } from "./../../router/coordinator.js";
import logo from "./../../assets/images/logo.png";

export default function Header() {
  const navigate = useNavigate();
  let location = useLocation()

  const [user, setUser] = useState();

  const getUserDataByToken = async (token) => {
    await axios
      .get(`${BASE_URL}/users/getdata/`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(error => {
        console.log('cai aquiiiiiiiii')
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));
    token && getUserDataByToken(token)
  },[])

  const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    goToLoginPage(navigate)
  }

  return (
    <s.Header>
      {
        location.pathname === "/login" ? 
          <>
            <s.ImgLogo src={logo} onClick={() => goToStartPage(navigate)} actualPage={location.pathname}/>
          </>
        :
        (user && location.pathname === "/peoples" && user.role === "NORMAL") || 
        (user && location.pathname === "/cats" && user.role === "NORMAL") || 
        (user && location.pathname === "/dogs" && user.role === "NORMAL") ||
        (user && location.pathname === "/profile" && user.role === "NORMAL") ?
          <>
            <s.BoxImageLogo>
              <s.ImgLogo src={logo} onClick={() => goToStartPage(navigate)} alt="Home" />
            </s.BoxImageLogo>
            <s.BoxMenu>
              <s.ButtonPeoples onClick={() => goToPeoplesPage(navigate)} value="/peoples" actualPage={location.pathname}>Pessoas</s.ButtonPeoples>
              <s.ButtonCats onClick={() => goToCatsPage(navigate)} value="/cats" actualPage={location.pathname}>Gatos</s.ButtonCats>
              <s.ButtonDogs onClick={() => goToDogsPage(navigate)} value="/dogs" actualPage={location.pathname}>Cachorros</s.ButtonDogs>
              <s.ButtonProfile onClick={() => goToProfilePage(navigate)} value="/profile" actualPage={location.pathname}>Meu perfil</s.ButtonProfile>
            </s.BoxMenu>
            <s.Hello>
              <s.Hello1>Olá, <b>{user.username}</b> ({user.role.toLowerCase()})</s.Hello1>
              <s.Hello2 onClick={() => logout()}>Sair</s.Hello2>
            </s.Hello>
          </>
        :
        (user && location.pathname === "/peoples" && user.role === "ADMIN") || 
        (user && location.pathname === "/cats" && user.role === "ADMIN") || 
        (user && location.pathname === "/dogs" && user.role === "ADMIN") ||
        (user && location.pathname === "/users" && user.role === "ADMIN") ||
        (user && location.pathname === "/profile" && user.role === "ADMIN") ||
        (user && location.pathname === "/client" && user.role === "ADMIN") ?
          <>
            <s.BoxImageLogo>
              <s.ImgLogo src={logo} onClick={() => goToStartPage(navigate)} alt="Home" />
            </s.BoxImageLogo>
            <s.BoxMenu>
              <s.ButtonPeoples onClick={() => goToPeoplesPage(navigate)} value="/peoples" actualPage={location.pathname}>Pessoas</s.ButtonPeoples>
              <s.ButtonCats onClick={() => goToCatsPage(navigate)} value="/cats" actualPage={location.pathname}>Gatos</s.ButtonCats>
              <s.ButtonDogs onClick={() => goToDogsPage(navigate)} value="/dogs" actualPage={location.pathname}>Cachorros</s.ButtonDogs>
              <s.ButtonProfile onClick={() => goToProfilePage(navigate)} value="/profile" actualPage={location.pathname}>Meu perfil</s.ButtonProfile>
              <s.ButtonUsers onClick={() => goToUsersPage(navigate)} value="/users" actualPage={location.pathname}>Usuários</s.ButtonUsers>
              <s.ButtonClient onClick={() => goToClientPage(navigate)} value="/client" actualPage={location.pathname}>Clientes</s.ButtonClient>
            </s.BoxMenu>
            <s.Hello>
              <s.Hello1>Olá, <b>{user.username}</b> ({user.role.toLowerCase()})</s.Hello1>
              <s.Hello2 onClick={() => logout()}>Sair</s.Hello2>
            </s.Hello>
          </>
        :
        null
      }
    </s.Header>
  )
};