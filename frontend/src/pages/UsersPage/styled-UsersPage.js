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
  background-color: #3e92cc;
  /* background-color: #ddd9ce; */
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex-direction: column;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0 0;
  padding: 10px;
  height: 450px;
  width: 25%;
  border-radius: 15px;
  background-color: #2a628f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    height: 300px;
    margin: 5px 0;
  }
`

export const TitleListAndDetail = styled.h1`
  margin: 0 0 10px 0;
  color: #ddd9ce;
`

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* overflow: auto; */
  overflow-x: hidden;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    overflow-x: hidden;
  }
`

export const UserList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 5px 5px 0;
  background-color: ${props => props.status === true && props.value === props.id2 ? "orange" : "#3e92cc"};
  &:hover {
    background-color: orange;
  }
`

export const UserName = styled.div`
  display: flex;
  padding: 5px;
  flex: 1 0 57%;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  color: ${props => props.name === "desafiosharenergy" ? "#0000d8" : "black"};
  font-weight: ${props => props.name === "desafiosharenergy" ? "bold" : "null"};
`

export const SelectRole = styled.select`
  width: 100%;
  font-size: 16px;
  height: 22px;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  flex: 1 0 23%;
  background-color: none;
  font-size: 14px;
  &:focus {
    box-shadow: 0;
  }
`

export const UserDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  flex: 1 0 10%;
`

export const UserTrash = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  flex: 1 0 10%;
`

export const ImgDetail = styled.img`
  width: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const ImgTrash = styled.img`
  width: 20px;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 10px;
  padding: 10px;
  height: 450px;
  width: 25%;
  border-radius: 15px;
  background-color: #2a628f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    height: 300px;
    margin: 5px 0;
  }
`

export const RightBoxUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90%;
  width: 100%;
  overflow: auto;
`


export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 0 0 0;
  padding: 0 10px;
  background-color: #3e92cc;
`

export const RightBoxDown = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  /* padding: 5px; */
  height: 10%;
  width: 100%;
`

export const ButtonClose = styled.button`
  font-size: 18px;
  color: black;
  height: 25px;
  width: 100px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: lightgray;
  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`