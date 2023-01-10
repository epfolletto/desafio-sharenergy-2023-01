import React from 'react';
import { useNavigate } from "react-router-dom";
import { Text, Textos, ButtonBack } from "./styled-AboutPage";
import * as s from "./styled-AboutPage";
import { goToStartPage } from "../../router/coordinator.js";

export default function About(props) {

  const navigate = useNavigate();

  return (
    <s.General>
      
      <s.CenterBox>
        <s.Title>Projeto Sharenergy</s.Title>

        <s.Texts>
          <Text>
            Este projeto faz parte do processo de seleção da empresa Sharenergy, o qual consiste em páginas de requisições para API's externas e também para uma API desenvolvida.
          </Text>

          <Text>
            Os usuários que podem navegar pela ferramenta podem ser do tipo NORMAL ou ADMIN. Usuários do tipo NORMAL tem acesso as páginas de pessoas, gatos, cachorros e profile; enquanto
            os usuários tipo ADMIN possuem acesso também as páginas de usuários e clientes.
          </Text>

          <Text>
            Foram desenvolvidos tanto o frontend quanto backend.
            <br />
            <b>Frontend:</b> foram utilizados HTML, JavaScript, Styled-Components e paradigma funcional.
            <br />
            <b>Backend:</b> foram utilizados TypeScript, MongoDB, Express, paradigma de orientação a objetos e conceito de APIs REST.
          </Text>
        </s.Texts>

        <Text>
          <b>Desenvolvido por: Evandro Paulo Folletto</b>
        </Text>

        <ButtonBack onClick={() => goToStartPage(navigate)}>Voltar</ButtonBack>
      </s.CenterBox>

    </s.General>
  );
};