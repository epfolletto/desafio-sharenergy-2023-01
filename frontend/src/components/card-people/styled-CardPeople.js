import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fffafa;
  margin: 30px;
  padding: 10px;
  width: 250px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0 4px 3px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 210px;
    height: 220px;
    margin: 5px;
  }
`

export const ProfileImage = styled.div`
  margin: 20px 0 0 0;
  width: 100px;
  height: 100px;
`

export const Image = styled.img`
  max-width: 100%;
  width: 250px;
  height: 250px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  object-fit: contain;
  /* object-fit: cover; */
  background-color: #cd3d44;
`

export const Username = styled.h2`
  margin: 20px 0 0 0;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 14px;
  }
`

export const NameAge = styled.h3`
  margin: 20px 0 0 0;
  font-size: 14px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 10px 0 0 0;
    font-size: 12px;
  }
`

export const Email = styled.h3`
  margin: 20px 0 0 0;
  font-size: 12px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 10px 0 0 0;
    font-size: 10px;
  }
`