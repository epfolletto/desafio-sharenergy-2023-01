import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  overflow-x: hidden;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    grid-template-rows: 175px 1fr 140px;
    overflow-y: auto;
  }
`

export const LineHeader = styled.div`
`

export const LineFooter = styled.div`
`

export const Main = styled.div`
  display: flex;
  overflow-y: auto;
`

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12%;
  height: 100%;
  background-color: #2a628f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 35%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`

export const FilterAndPagination = styled.div`
  margin: 15px 0 0 0;
  color: #ddd9ce;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 10px;
  }
`

export const OrderBy = styled.select`
  width: 100%;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #2a628f;
  &:focus {
    box-shadow: 0;
  }
  @media screen and (max-device-width : 480px){
    height: 25px;
    font-size: 14px;
  }
`

export const InputNumber = styled.input`
  width: 100%;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #2a628f;
  &:focus {
    box-shadow: 0;
    outline: 0;
  }
  @media screen and (max-device-width : 480px){
    height: 20px;
    font-size: 14px;
  }
`

export const MainRight = styled.div`
  display: flex;
  width: 88%;
  background-color: #3e92cc;
  overflow: auto;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    width: 65%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`

export const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 60px;
`

export const ListProducts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

export const LinePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FieldsetInput = styled.fieldset`
  font-size: 16px;
  width: 80%;
  margin: 10px 0;
  border:solid 1px rgb(188,188,194);
  border-radius: 10px;
  @media screen and (max-device-width : 480px){
    margin: 5px 0;
  }
`

export const Legend = styled.legend`
  font-size: 14px;
  margin: 0 15px;
  padding: 0 3px;
  @media screen and (max-device-width : 480px){
    font-size: 10px;
  }
`

export const InputCamp = styled.input`
  margin: 0 2px 2px 0;
  padding-left: 10px;
  height: 25px;
  font-size: 18px;
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: 0;
  background-color: #2a628f;
  @media screen and (max-device-width : 480px){
    height: 20px;
    font-size: 14px;
  }
`