import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
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
  overflow-y: auto;
`

export const LineFooter = styled.div`
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  height: 450px;
  width: 30%;
  background-color: #2a628f;
  border-radius: 15px;
  padding: 15px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 90%;
    height: 425px;
    margin: 5px 0;
    padding: 10px;
  }
`

export const TitleEdit = styled.h1`
  color: #ddd9ce;
  flex: 1 0 5%;
`

export const TitleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid;
  margin: 10px 0 10px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1 0 85%;
  overflow-y: auto;
`

export const Field = styled.fieldset`
  width: 100%;
  height: 50px;
  border: solid 1px #c9c9c9;
  margin: 7px 0;
`

export const Legend = styled.legend`
  color: #c9c9c9;
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
  flex: 1 0 8%;
  width: 100%;
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

export const SelectStatus = styled.select`
  width: 100%;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  background-color: #f1f1f1;
  &:focus {
    box-shadow: 0;
  }
`

export const FieldsetInput = styled.fieldset`
  font-size: 16px;
  width: 100%;
  height: 50px;
  margin: 7px 0;
  border: solid 1px #b8b8b8;
  @media screen and (max-device-width : 480px){
    width: 280px;
  }
`