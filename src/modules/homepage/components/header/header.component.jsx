import React from "react";
import { Anchor} from 'antd';  

import {
  HeaderStyles, 
  OptionsContainer, 
  Logo,
  LinkActive
} from "./header.styles";
 
const { Link } = Anchor;

const Header = () => (
  <HeaderStyles>
    <Logo>
      Portfolio
    </Logo> 
    <Anchor affix={false} style={{height:"150px", marginRight:40}}>
      <OptionsContainer> 
        <Link href="#home" title="HOME" />
        <Link href="#about" title="ABOUT"/> 
        <Link href="#portfolio" title="PORTFOLIO" />
        <Link href="#projects" title="PROJECTS"/> 
        <LinkActive href="#contact" title="CONTACT"/>
      </OptionsContainer>
    </Anchor>
  </HeaderStyles>
);

export default Header;
