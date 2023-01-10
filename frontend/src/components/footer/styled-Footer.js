import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #16324f;
  box-sizing: border-box;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex-direction: column;
  }
`

export const Left = styled.p`
  margin: 0 0 0 20px;
  font-size: 16px;
  color: #ddd9ce;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 0 0;
  }
`

export const Center = styled.p`
  font-size: 16px;
  color: #ddd9ce;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    text-align: center;
    margin: 5px 0;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
`

export const TextFollow = styled.p`
  margin: 0 0 4px 0;
  font-size: 14px;
  color: #ddd9ce;
`

export const SocialMidias = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0 0 0;
`

export const ImageSocialMidia = styled.img`
  width: 25px;
  margin: 0 10px 0 5px;
  :hover{
		cursor: pointer;
    transform: scale(1.05);
    transition: transform .1s;
  }
`