import React from "react";
import { Row, Col, Anchor } from "antd";
import {
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  SkypeOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import {
  FooterPanelStyles,
  CopyRight,
  FooterContainer,
  Logo,
  OptionsContainer,
  SocialNetworks,
} from "./footer.styles";

const { Link } = Anchor;

const FooterPanel = () => {
  return (
    <FooterPanelStyles>
      <Row gutter={[12, 0]} style={{ padding: "30px 20px", width: "100%" }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <FooterContainer>
            <Logo>Portfolio</Logo>
          </FooterContainer>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <FooterContainer>
            <Anchor affix={false}>
              <OptionsContainer>
                <Link href="#home" title="HOME" />
                <Link href="#about" title="ABOUT" />
                <Link href="#services" title="SKILLS" />
                <Link href="#projects" title="PROJECTS" />
                <Link href="#contact" title="CONTACT" />
              </OptionsContainer>
            </Anchor>
          </FooterContainer>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <FooterContainer>
            <SocialNetworks>
              <a
                href="https://www.linkedin.com/in/wesley-campana-ferreira-081b55152/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=wesley9983@gmail.com&tf=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleOutlined />
              </a>
              <a
                href="https://www.instagram.com/wesley.ferreira99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5519987795272&text=Bora conversar?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppOutlined />
              </a>
              <a
                href="https://join.skype.com/invite/suqGX1PQIPoq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SkypeOutlined />
              </a>
              <a
                href="https://github.com/Cyber-Quest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </a>
            </SocialNetworks>
          </FooterContainer>
        </Col>
      </Row>
      <CopyRight>
        Created by <br />
        <span style={{ color: "#e6e6e6", marginLeft: "4px" }}>Wesley C. Ferreira</span>
      </CopyRight>
    </FooterPanelStyles>
  );
};

export default FooterPanel;
