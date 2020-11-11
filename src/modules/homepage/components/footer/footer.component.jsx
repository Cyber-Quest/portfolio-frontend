import React from "react";
import {Row, Col, Anchor } from "antd"; 
import {
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  SkypeOutlined,
  GithubOutlined
} from "@ant-design/icons";

import {FooterPanelStyles,
        CopyRight,
        FooterContainer, 
        Logo,  
        OptionsContainer,
        SocialNetworks} from "./footer.styles";

const { Link } = Anchor;

const FooterPanel = () =>{
    return(
        <FooterPanelStyles>
            <Row gutter={[12, 0]} style={{padding:"30px 20px", width:"100%"}}  >
               <Col xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }} >
                    <FooterContainer>
                        <Logo>Portfolio</Logo>
                    </FooterContainer>     
                </Col>
                <Col xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }} >
                    <FooterContainer>
                        <Anchor affix={false} > 
                            <OptionsContainer> 
                                <Link href="#home" title="HOME" />
                                <Link href="#about" title="ABOUT"/> 
                                <Link href="#portfolio" title="PORTFOLIO" />
                                <Link href="#projects" title="PROJECTS"/> 
                                <Link href="#contact" title="CONTACT"/>
                            </OptionsContainer>
                        </Anchor>
                    </FooterContainer>     
                </Col> 
                
                <Col xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }} >
                    <FooterContainer>
                        <SocialNetworks>
                        <div>
                            <LinkedinOutlined/>
                        </div>
                        <div>
                            <GoogleOutlined />
                        </div>
                        <div>
                            <InstagramOutlined/>
                        </div>
                        <div>
                            <WhatsAppOutlined/>
                        </div>
                        <div>
                            <SkypeOutlined/>
                        </div> 
                        <div>
                            <GithubOutlined />
                        </div>
                      </SocialNetworks>
                    </FooterContainer>     
                </Col>   
            </Row>
            <CopyRight>
            © 2020 Copyright. <br/>All rights reserverd. Supervised by <span style={{color: "#e6e6e6"}}>Wesley C. Ferreira</span>
            </CopyRight>
          
        </FooterPanelStyles>
    )
}

export default FooterPanel;