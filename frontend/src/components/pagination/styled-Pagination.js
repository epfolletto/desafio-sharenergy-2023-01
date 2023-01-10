import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e92cc;
  @media screen and (max-device-width : 480px){
    align-items: center; 
  };
`

export const ButtonPage = styled.button`
  font-size: 16px;
  width: 40px;
  height: 40px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.value === props.actualPage ? "orange" : "grey"};
  &:hover {
		cursor: pointer;
		background-color: #ffc964;
	}
  :disabled {
    opacity: 0.8;
    background: lightgray;
    cursor: default;
  };
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 12px;
    width: 20px;
    height: 25px;
    margin: 2px;
  }
`

export const ButtonPrevious = styled.button`
  font-size: 16px;
  width: 70px;
  height: 40px;
  margin: 5px 30px 5px 0;
  border: none;
  border-radius: 5px;
  background-color: gray;
  &:hover {
    cursor: pointer;
		background-color: #ffc964;
	};
  :disabled {
    cursor: default;
    opacity: 0.8;
    background: lightgray;
  };
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 12px;
    width: 50px;
    height: 25px;
    margin: 5px 3px 5px 0;
  }
`

export const ButtonLast = styled.button`
  font-size: 16px;
  width: 70px;
  height: 40px;
  margin: 5px 0 5px 30px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  &:hover {
    cursor: pointer;
		background-color: #ffc964;
	};
  :disabled {
    cursor: default;
    opacity: 0.8;
    background: lightgray;
  };
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 12px;
    width: 50px;
    height: 25px;
    margin: 5px 0 5px 3px;
  }
`