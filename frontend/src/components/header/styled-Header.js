import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: solid 6px orange;
  background-color: #16324f;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`

export const BoxImageLogo = styled.div`
  flex: 1 0 12%;
  background-color: #2a628f;
  width: 100%;
  height: 100%;
`

export const ImgLogo = styled.img`
  height: 100%;
  width: ${data => data.actualPage === "/login" ? "300px" : "100%"};
  background-color: ${data => data.actualPage === "/login" ? "#16324f" : "#2a628f"};
  object-fit: cover;
  &:hover {
		cursor: pointer;
	}
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    height: 0px;
  }
`

export const BoxMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #16324f;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  flex: 1 0 73%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Hello = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1 0 15%;
  background-color: #2a628f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex-direction: row;
  }
`

export const Hello1 = styled.p`
  font-size: 16px;
  margin: 0 0 2px 0;
  color: #ddd9ce;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0 5px 0 0;
  }
`

export const Hello2 = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 2px 0 0 0;
  color: #0000b6;
  text-decoration: underline;
  &:hover {
		cursor: pointer;
    transform: scale(1.03);
    transition: transform .2s;
	}
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0 0 0 5px;
  }
`

export const ButtonPeoples = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  background-color: ${data => data.value === data.actualPage ? "#3e92cc" : "#16324f"};
  &:hover {
    cursor: pointer;
    background-color: #3e92cc;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 16px;
    height: 18px;
  }
`

export const ButtonCats = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  background-color: ${data => data.value === data.actualPage ? "#3e92cc" : "#16324f"};
  &:hover {
    cursor: pointer;
    background-color: #3e92cc;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 16px;
    height: 18px;
  }
`

export const ButtonDogs = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  background-color: ${data => data.value === data.actualPage ? "#3e92cc" : "#16324f"};
  &:hover {
    cursor: pointer;
    background-color: #3e92cc;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 16px;
    height: 18px;
  }
`

export const ButtonProfile = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  background-color: ${data => data.value === data.actualPage ? "#3e92cc" : "#16324f"};
  &:hover {
    cursor: pointer;
    background-color: #3e92cc;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 16px;
    height: 18px;
  }
`

export const ButtonUsers = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  background-color: ${data => data.value === data.actualPage ? "#3e92cc" : "#16324f"};
  &:hover {
    cursor: pointer;
    background-color: #3e92cc;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 16px;
    height: 18px;
  }
`

export const ButtonClient = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 100%;
  width: 100%;
  text-align: center;
  border: none;
  background-color: ${data => data.value === data.actualPage ? "#3e92cc" : "#16324f"};
  &:hover {
    cursor: pointer;
    background-color: #3e92cc;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 16px;
    height: 18px;
  }
`