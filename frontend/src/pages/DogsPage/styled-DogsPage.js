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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 80%;
  @media screen and (max-device-width : 480px){
    justify-content: space-between;
    width: 90%;
    height: 95%;
  }
`

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`

export const BoxDog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 65%;
  background-color: #3e92cc;
  @media screen and (max-device-width : 480px){
    width: 90%;
    height: 80%;
  }
`

export const TextLoad = styled.h1`
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Video = styled.embed`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ButtonDogs = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 50px;
  width: 250px;
  margin: 0 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #16324f;
  &:hover {
    cursor: pointer;
    background-color: #18435a;
    transform: scale(1.03);
    transition: transform .2s;
  }
  @media screen and (max-device-width : 480px){
    width: 50%;
    height: 75%;
    margin: 0;
  }
`