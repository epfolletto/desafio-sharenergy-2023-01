import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from './../constants/BASE_URL';
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../router/coordinator.js"

export default function useAuthorizationPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

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
        setUser(res.data);
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

  return (
    useEffect(()=>{
      getUserDataByToken()
      if (user && user.role !== "ADMIN") {
        goToLoginPage(navigate);
      }
    },[navigate])
  )

  // useEffect(()=>{
  //   getUserDataByToken()
  // },[])

  // if(user && user.role !== "ADMIN") {
  //   goToLoginPage(navigate)
  // } else {
  //   console.log('entrei aqui par autorizar páginas restritas');
  // }

  // return  
}  