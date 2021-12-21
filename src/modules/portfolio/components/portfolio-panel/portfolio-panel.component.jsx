import React from "react";
import { Empty } from "antd";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";
import Button from "core/components/button/button.component";
import imgBlog from "../../assests/img/blog.PNG";
import imgApp from "../../assests/img/app.PNG";
import imgLanding from "../../assests/img/landing.PNG";

import {
  PortfolioPanelStyles,
  Title,
  Subject,
  Container,
  ProjectPanel,
  ProjectImage,
} from "./portfolio-panel.styles";

const PortfolioPanel = ({ getProjects = () => null, projects }) => {
  const data = [
    {
      name: "cyber-resort",
      title: "Beach Resort",
      subtitle: "example",
      link: "resort",
    },
    {
      name: "cyber-signinsignup-material-react-app",
      title: "Auth material react",
      subtitle: "example",
      link: "auth-material-design",
    },
    {
      name: "cyber-crwn-clothing",
      title: "Clothing store",
      subtitle: "example",
      link: "crown-clothing",
    },
    {
      name: "cyber-my-projects",
      title: "My projects",
      subtitle: "example",
      link: "my-projects",
    },
    {
      name: "cyber-amplify-react-app",
      title: "Simple aplify react",
      subtitle: "example",
      link: "amplify-react",
    },
    {
      name: "cyber-todos",
      title: "Todos",
      subtitle: "example",
      link: "todo-list",
    },
  ];

  return (
    <PortfolioPanelStyles>
      <Container>
        <Title>My Projects</Title>
        <Subject>
          Projects created with the aim of demonstrating my knowledge.
        </Subject>
        <div className="main-projects">
          <div className="project-item">
            <ProjectImage image={imgApp}></ProjectImage>
            <div className="project-explication">
              <h2 className="project-apresentation">Projeto Apresentado</h2>
              <h1 className="project-name">Tema Halcyon</h1>
              <div className="project-description">
                Um tema azul escuro mínimo para VS Code, Sublime Text, Atom,
                iTerm e muito mais. Disponível emVisual Studio Marketplace,
                Controle de Pacote, Atom Package Manager, e acima do nível do
                mar.
              </div>
              <div className="tags">
                <div className="tag">Comida</div>
                <div className="tag">Código</div>
                <div className="tag">Prime</div>
              </div>
              <div className="links">
                <a href="google.com" className="link">
                  <FiGithub />
                </a>
                <a href="google.com" className="link">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project-item">
            <ProjectImage image={imgLanding}></ProjectImage>
            <div className="project-explication">
              <h2 className="project-apresentation">Projeto Apresentado</h2>
              <h1 className="project-name">Tema Halcyon</h1>
              <div className="project-description">
                Um tema azul escuro mínimo para VS Code, Sublime Text, Atom,
                iTerm e muito mais. Disponível emVisual Studio Marketplace,
                Controle de Pacote, Atom Package Manager, e acima do nível do
                mar.
              </div>
              <div className="tags">
                <div className="tag">Comida</div>
                <div className="tag">Código</div>
                <div className="tag">Prime</div>
              </div>
              <div className="links">
                <a href="google.com" className="link">
                  <FiGithub />
                </a>
                <a href="google.com" className="link">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project-item">
            <ProjectImage image={imgBlog}></ProjectImage>
            <div className="project-explication">
              <h2 className="project-apresentation">Projeto Apresentado</h2>
              <h1 className="project-name">Tema Halcyon</h1>
              <div className="project-description">
                Um tema azul escuro mínimo para VS Code, Sublime Text, Atom,
                iTerm e muito mais. Disponível emVisual Studio Marketplace,
                Controle de Pacote, Atom Package Manager, e acima do nível do
                mar.
              </div>
              <div className="tags">
                <div className="tag">Comida</div>
                <div className="tag">Código</div>
                <div className="tag">Prime</div>
              </div>
              <div className="links">
                <a href="google.com" className="link">
                  <FiGithub />
                </a>
                <a href="google.com" className="link">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Title style={{ marginTop: "80px" }}>Other Noteworthy Projects</Title>
        <div className="portfolio">
          {data.length > 0 ? (
            data.slice(0, 6).map((item, index) => {
              return (
                <ProjectPanel
                  key={`${index}`}
                  href={`https://${item.name}.netlify.app`}
                  target="_blank"
                >
                  <div className="container">
                    <div className="header">
                      <AiOutlineFolder className="icon-folder"></AiOutlineFolder>
                      <div className="links">
                        <a href="google.com" className="link">
                          <FiGithub />
                        </a>
                        <a href="google.com" className="link">
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    <div className="body">
                      <div className="body-title">{item.title}</div>
                      <div className="body-description">{item.subtitle}</div>
                    </div>
                  </div>
                  <div className="tags">
                    <div className="tag">comida</div>
                    <div className="tag">comida</div>
                  </div>
                </ProjectPanel>
              );
            })
          ) : (
            <Empty />
          )}
        </div>
        <a
          href="https://cyber-my-projects.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button btntype="primary" style={{ marginTop: "40px" }}>
            View All
          </Button>
        </a>
      </Container>
    </PortfolioPanelStyles>
  );
};

export default PortfolioPanel;
