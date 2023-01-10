import React from 'react';
import * as s from './styled-Footer'

import instagram from './../../assets/images/instagram.png';
import facebook from './../../assets/images/facebook.png';
import youtube from './../../assets/images/youtube.png';
import twitter from './../../assets/images/twitter.png';

export default function Footer() {
  return (
    <s.Footer>
      <s.Left>
        +55 31 3236-1585 | contato@sharenergy.com.br
      </s.Left>

      <s.Center>
        Av. do Contorno, 2905 - Conj. 405 - Santa Efigênia | Belo Horizonte - MG | 30110-915
      </s.Center>

      <s.Right>
        <s.TextFollow>Sigam-nos nas redes sociais:</s.TextFollow>
        <s.SocialMidias>
          <a href="https://www.instagram.com/sharenergy" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={instagram} /></a>
          <a href="https://www.youtube.com/channel/UC9pJVb5Soe_xsDQYcbRFbqg" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={youtube} /></a>
          <a href="https://www.facebook.com/sharenergybrasil" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={facebook} /></a>
          <a href="https://twitter.com/sharenergybr" target="_blank" rel="noopener noreferrer"><s.ImageSocialMidia src={twitter} /></a>
        </s.SocialMidias>
      </s.Right>
    </s.Footer>
  )
};