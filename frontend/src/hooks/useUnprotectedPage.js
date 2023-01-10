import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPeoplesPage } from "./../router/coordinator.js"

export default function useUnprotectedPage() {
  const navigate = useNavigate();

  return (
    useEffect(()=>{
      const token = localStorage.getItem('remember') || sessionStorage.getItem('remember');
      if (token) {
        goToPeoplesPage(navigate);
      }
    },[navigate])
  )
}