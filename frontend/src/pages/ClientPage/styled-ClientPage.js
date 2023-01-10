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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex-direction: column;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* margin: 0 10px 0 0; */
  padding: 10px;
  height: 450px;
  width: 25%;
  border-radius: 15px;
  background-color: #2a628f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 90%;
    height: 300px;
    margin: 5px 0;
  }
`
export const TitleClientAndDetail = styled.h1`
  color: #ddd9ce;
  height: 10%;
`

export const BoxList = styled.div`
  width: 100%;
  height: 90%;
  flex: 1 0 80%;
  overflow-y: auto;
  overflow-x: hidden;
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
    width: 90%;
    height: 300px;
    margin: 5px 0;
  }
`

export const RightBoxUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 88%;
  width: 100%;
  overflow: auto;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    overflow-x: hidden;
  }
`

export const BoxButtonAddClient = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  height: 10%;
  width: 100%;
`

export const ButtonAddClient = styled.button`
  font-size: 18px;
  color: white;
  height: 35px;
  width: 125px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #019251;
  &:hover {
    cursor: pointer;
    background-color: #005200;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    height: 25px;
  }
`

export const RightBoxDown = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  padding: 5px;
  height: 12%;
  width: 100%;
`

export const ButtonClose = styled.button`
  font-size: 18px;
  color: #f3f2ef;
  height: 35px;
  width: 100px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #616262;
  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`

export const UserList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: ${props => props.status === true && props.value === props.id2 ? "orange" : "#3e92cc"};
  &:hover {
    background-color: orange;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
  }
`

export const UserName = styled.div`
  display: flex;
  padding: 5px;
  flex: 1 0 70%;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  color: ${props => props.name === "desafiosharenergy" ? "#0000d8" : "black"};
`

export const UserDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  flex: 1 0 10%;
`

export const UserEdit = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex: 1 0 10%;
`

export const UserTrash = styled.div`
  display: flex;
  justify-content: center;
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

export const ImgEdit = styled.img`
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

export const ClientInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 0 0 0;
  padding: 0 5px;
  background-color: #3e92cc;
`