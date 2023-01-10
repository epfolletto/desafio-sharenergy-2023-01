import React from 'react'
import * as s from "./styled-CardPeople"

export default function CardProduct(props) {

  return (
    <s.Card>
      <s.ProfileImage>
        <s.Image src={props.picture} alt={props.picture}/>
      </s.ProfileImage>

      <s.Username>{`${props.username}`}</s.Username>

      <s.NameAge>{`${props.nameTitle} ${props.nameFirst} ${props.nameLast}, ${props.age}`}</s.NameAge>

      <s.Email>{`${props.email}`}</s.Email>
    </s.Card>
  )
}