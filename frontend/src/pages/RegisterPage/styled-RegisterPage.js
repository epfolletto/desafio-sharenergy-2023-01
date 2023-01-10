import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  background-color: white;
  overflow-x: hidden;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    grid-template-rows: 60px 1fr 140px;
  }
`

export const LineHeader = styled.div`
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e92cc;
  height: 100%;
`

export const LineFooter = styled.div`
`

export const ImgLogo = styled.img`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 470px;
  width: 20%;
  background-color: #2a628f;
  border-radius: 15px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    height: 455px;
    width: 300px;
  }
`

export const Title = styled.div`
  margin: 10px 0 20px 0;
`

export const TitleRegister = styled.h1`
 font-weight: bold;
 color: #ddd9ce;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const Field = styled.fieldset`
  width: 100%;
  height: 50px;
  border: solid 1px #b8b8b8;
  margin: 7px 0;
`

export const Legend = styled.legend`
  color: #b8b8b8;
  margin: 0 10px;
  padding: 0 10px;
  font-size: 12px;
`

export const Input = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  margin: 5px 0;
  padding: 0 20px;
  font-size: 16px;
  background-color: #2a628f;
  ::placeholder{
    color: #b8b8b8;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 20px 0 0 0;
`

export const Button = styled.button`
  font-size: 18px;
  height: 100%;
  width: 100%;
  margin: ${data => data.value === "back" ? "0 5px 0 0" : "0 0 0 5px"};
  border-radius: 5px;
  border: none;
  text-align: center;
  color: white;
  background-color: ${data => data.value === "back" ? "#616262" : "#019251"};
  &:hover {
    cursor: pointer;
    background-color: ${data => data.value === "back" ? "gray" : "#005200"};
  }
`