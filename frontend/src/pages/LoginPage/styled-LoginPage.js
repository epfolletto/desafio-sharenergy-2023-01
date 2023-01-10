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
  height: 400px;
  width: 20%;
  border-radius: 15px;
  background-color: #2a628f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 300px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 15%;
  width: 100%;
  height: 100%;
`

export const TitleLogin = styled.h1`
 font-weight: bold;
 color: #ddd9ce;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  flex: 1 0 70%;
`

export const Field = styled.fieldset`
  width: 100%;
  height: 56px;
  border: solid 1px #b8b8b8;
  margin: 10px 0;
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

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 100%;
`

export const InputRememberMe = styled.input`
  margin: 0 5px 0 0;
  width: 15px;
  height: 15px;
`

export const ButtonLogin = styled.button`
  width: 100%;
  height: 42px;
  margin: 30px 0 0 0;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #5cb646;
  &:hover {
		cursor: pointer;
    transform: scale(1.01);
    transition: transform .2s;
	}
`

export const Register = styled.div`
  display: flex;
  flex: 1 0 15%;
`

export const Text = styled.div`
  font-weight: bold;
`

export const DivRegister = styled.div`
  margin: 0 2px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  color: white;
  &:hover {
		cursor: pointer;
    transform: scale(1.02);
    transition: transform .1s;
	}
`