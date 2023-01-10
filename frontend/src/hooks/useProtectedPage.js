import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "./../router/coordinator.js"

export default function useProtectedPage() {
  const navigate = useNavigate();

  return (
    useEffect(()=>{
      const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'));
      if (!token) {
        goToLoginPage(navigate);
      }
    },[navigate])
  )
}