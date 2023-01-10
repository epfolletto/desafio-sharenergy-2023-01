import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  overflow-x: hidden;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    grid-template-rows: 175px 1fr 140px;
  }
`

export const LineHeader = styled.div`
`

export const LineFooter = styled.div`
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: #3e92cc;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  @media screen and (max-device-width : 480px){
    width: 90%;
    height: 95%;
  }
`

export const BoxSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  @media screen and (max-device-width : 480px){
    width: 100%;
  }
`

export const Legend = styled.legend`
  font-size: 14px;
  margin: 0 15px;
  @media screen and (max-device-width : 480px){
    font-size: 10px;
  }
`

export const InputNumber = styled.input`
  width: 100%;
  font-size: 20px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #3e92cc;
  &:focus {
    box-shadow: 0;
    outline: 0;
  }
  @media screen and (max-device-width : 480px){
    height: 20px;
    font-size: 14px;
  }
`

export const BoxCat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`

export const SelectStatus = styled.select`
  width: 100%;
  font-size: 20px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #3e92cc;
  &:focus {
    box-shadow: 0;
  }
  @media screen and (max-device-width : 480px){
    font-size: 16px;
    height: 25px;
  }
`

export const FieldsetInput = styled.fieldset`
  font-size: 16px;
  width: 30%;
  height: 60px;
  margin: 10px;
  border:solid 1px rgb(188,188,194);
  border-radius: 10px;
  @media screen and (max-device-width : 480px){
    width: 80%;
    height: 80%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`