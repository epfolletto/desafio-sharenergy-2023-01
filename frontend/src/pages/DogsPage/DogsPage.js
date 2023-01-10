import React, { useState, useEffect } from "react";
import * as s from './styled-DogsPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function DogsPage() {
  useProtectedPage();

  const [number, setNumber] = useState(Math.floor(Math.random() * 1030));
  const [dogs, setDogs] = useState();

  const getDogs = () => {
    axios.get(`https://random.dog/doggos`)
    .then((res)=>{
      setDogs(res.data);
    })
    .catch((err)=>{
      const returnErr = err.response.status
        if (returnErr >= 400 && returnErr <= 500) {
          alert("Ocorreu um erro, verifique os dados inseridos e tente novamente")
        } else if (returnErr >= 500 && returnErr <= 600) {
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
    })
  }

  useEffect(() => {
    getDogs()
  }, [])

  const newNumber = () => {
    const value = Math.floor(Math.random() * 1030);
    setNumber(value);
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header/>
      </s.LineHeader>

      <s.Main>
        <s.Box>
          
          <s.BoxButton>
            <s.ButtonDogs onClick={() => newNumber()} alt="Atualizar">Atualizar...</s.ButtonDogs>
          </s.BoxButton>

          <s.BoxDog>
            {
              dogs ?
                dogs[number].split('.')[1] === 'mp4' || dogs[number].split('.')[1] === 'webm' ? 
                  <s.Video src={`https://random.dog/${dogs[number]}`} />
                :
                  <s.Image src={`https://random.dog/${dogs[number]}`} />
                :
                  <s.TextLoad>Carregando...</s.TextLoad>
            }
          </s.BoxDog>

        </s.Box>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}