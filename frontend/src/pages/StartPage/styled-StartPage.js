import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #3e92cc;
`

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 425px;
  width: 309px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: #2a628f;
`

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0 0 0;
  color: #ddd9ce;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImgLogo = styled.img`
  margin: 0 10px 0 0;
  width: 330px;
  height: 97,9px;
`

export const ImgLogo2 = styled.img`
  margin: 0 10px 0 0;
  width: 75px;
  height: 75px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  width: 100%;
  height: 50px;
`

export const Button = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 5px 0 10px;
  margin: ${data => data.value === "enter" ? "0 5px 0 10px" : "0 10px 0 5px"};
  text-align: center;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${data => data.value === "about" ? "#616262" : "#019251"};
  &:hover {
    cursor: pointer;
    background-color: ${data => data.value === "about" ? "gray" : "#005200"};
  }
`