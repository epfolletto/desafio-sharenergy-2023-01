import React from 'react';
import { useNavigate } from "react-router-dom";
import * as s from "./styled-StartPage";
import img_logo from './../../assets/images/logo.png';
import img_logo2 from './../../assets/images/logo2.png';
import { goToLoginPage, goToAboutPage } from "./../../router/coordinator.js";

export default function Inicio(props) {

  const navigate = useNavigate();

  return (
    <s.General>

      <s.CenterBox>
        <s.Title>Seja bem vindo(a) a</s.Title>

        <s.Center>
          <s.ImgLogo src={img_logo} />
          <s.ImgLogo2 src={img_logo2} />
        </s.Center>

        <s.Buttons>
          <s.Button onClick={() => goToLoginPage(navigate)} value="enter">Entrar</s.Button>
          <s.Button onClick={() => goToAboutPage(navigate)} value="about">Sobre</s.Button>
        </s.Buttons>
      </s.CenterBox>

    </s.General>
  );
};