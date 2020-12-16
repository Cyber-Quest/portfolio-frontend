import React, {useState} from "react"; 
import { Anchor} from 'antd';  
import{CloseOutlined} from "@ant-design/icons";

import RedirectLink from "core/components/redirect-link/redirect-link.component";

import {
  HeaderStyles, 
  OptionsContainer, 
  Logo, 
  MenuOutlinedExpand
} from "./header.styles";
 
const { Link } = Anchor;

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return(
  <HeaderStyles>
    <Logo>
      Portfolio
    </Logo> 
    <Anchor affix={false} style={{height:"150px" }}>
      <MenuOutlinedExpand onClick={() =>{setMenuVisible(true)}}/>
      <OptionsContainer visible={menuVisible}> 
        <span>
          <CloseOutlined style={{color:"white", cursor:"pointer"}} 
          onClick={() =>{setMenuVisible(false)}} />
        </span>
        <div onClick={() =>{setMenuVisible(false)}}>
        <Link href="#home" title="HOME" />
        </div>
         <div onClick={() =>{setMenuVisible(false)}}>
        <Link href="#about" title="ABOUT ME"/> 
        </div>
         <div onClick={() =>{setMenuVisible(false)}}>
        <Link href="#services" title="SERVICES"/> 
        </div>
         <div onClick={() =>{setMenuVisible(false)}}>
        <Link href="#portfolio" title="PORTFOLIO" />
        </div>
        <div onClick={() =>{setMenuVisible(false)}}>
        <RedirectLink href="#contact" title="CONTACT" />
        </div>
      </OptionsContainer>
    </Anchor>
  </HeaderStyles>
  );
};

export default Header;
