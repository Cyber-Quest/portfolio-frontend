import React from "react";
import { Anchor, Tooltip } from "antd";
import {
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  SkypeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { BsCircleFill } from "react-icons/bs";
import avatar_image from "../../assests/avatar.gif";

import AboutPage from "../../../about/pages/about.component";
import ContactPage from "../../../contact/pages/contact.component";
import ServicesPage from "../../../services/pages/services.component";
import PortfolioPage from "../../../portfolio/pages/portfolio.component";
import Button from "core/components/button/button.component";
import RedirectLink from "core/components/redirect-link/redirect-link.component";

import {
  BodyStyles,
  Card,
  Avatar,
  SocialNetworks,
  Container,
  BordedConnector,
  ContainerAnchor,
} from "./body.styles";

const { Link } = Anchor;

const Body = () => {
  return (
    <BodyStyles>
      <Card
        color="transparent"
        style={{
          justifyContent: "left",
          flexFlow: "row",
          minHeight: "calc(100vh - 95px)",
          height: "auto",
          marginBottom: "50px",
        }}
      >
        <Container>
          <div>
            <h2>Hello, I am</h2>
            <h1>Wesley C. Ferreira</h1>
            <p style={{ lineHeight: "0px", marginTop: "-30px" }}>
              A young man with{" "}
              <span style={{ color: "#00ccff" }}>frontend</span> &{" "}
              <span style={{ color: "#00ccff" }}>backend</span> techniques
            </p>
            <ContainerAnchor>
              <Anchor>
                <Link
                  href="#home"
                  title={
                    <Tooltip title="Home" placement="left" color="white">
                      <BsCircleFill style={{ fontSize: "12px" }} />
                    </Tooltip>
                  }
                />
                <Link
                  href="#about"
                  title={
                    <Tooltip title="About" placement="left" color="white">
                      <BsCircleFill style={{ fontSize: "12px" }} />
                    </Tooltip>
                  }
                />
                <Link
                  href="#services"
                  title={
                    <Tooltip title="Services" placement="left" color="white">
                      <BsCircleFill style={{ fontSize: "12px" }} />
                    </Tooltip>
                  }
                />
                <Link
                  href="#projects"
                  title={
                    <Tooltip title="Projects" placement="left" color="white">
                      <BsCircleFill style={{ fontSize: "12px" }} />
                    </Tooltip>
                  }
                />
                <Link
                  href="#contact"
                  title={
                    <Tooltip title="Contact" placement="left" color="white">
                      <BsCircleFill style={{ fontSize: "12px" }} />
                    </Tooltip>
                  }
                />
              </Anchor>
            </ContainerAnchor>
            <div style={{ marginTop: "30px", marginBottom: "50px" }}>
              <p>Find me on</p>
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
            </div>
            <Anchor affix={false}>
              <div style={{ width: "auto", display: "flex" }}>
                <a
                  class="object-detail-page-actions download-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assests/Curriulo.pdf`}
                >
                  <Button btntype="primary" style={{ width: 120 }}>
                    Download CV
                  </Button>
                </a>
                <RedirectLink href="#projects" title="Projects" />
              </div>
            </Anchor>
          </div>
          <div className="img-container">
            <Avatar image={avatar_image} />{" "}
          </div>
        </Container>
      </Card>
      <Card id="about">
        <AboutPage />
      </Card>
      <Card id="services">
        <BordedConnector />
        <ServicesPage />
      </Card>
      <Card id="projects">
        <BordedConnector />
        <PortfolioPage />
      </Card>
      <Card id="contact">
        <BordedConnector />
        <ContactPage />
      </Card>
    </BodyStyles>
  );
};

export default Body;
