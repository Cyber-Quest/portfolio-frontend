import React from "react";
import { Empty } from "antd";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";
import Button from "core/components/button/button.component";
import clothingStore from "../../assests/img/clothing-store.PNG";
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

const PortfolioPanel = () => {
  const data = [
    {
      name: "cyber-resort",
      github: "react-beach-resort-recording",
      title: "Beach Resort",
      description:
        "It is an example of a website for booking hotels that is more innovative and at a lower price. Schedule your reservation now and have a memorable moment with your family",
      link: "resort",
      tags: ["React", "Redux", "HTML", "CSS"],
    },
    {
      name: "cyber-signinsignup-material-react-app",
      github: "signinsignup-material-react-app",
      title: "Auth material react",
      description:
        "Make that simple authentication system using one of the most famous and totally open source visual libraries",
      link: "auth-material-design",
      tags: ["React", "Redux", "Material Design"],
    },
    {
      name: "cyber-crwn-clothing",
      github: "crwn-clothing",
      title: "Clothing store",
      description:
        "A web e-commerce in development, focused on selling clothes and accessories, charging a low shipping fee.",
      link: "crown-clothing",
      tags: ["React", "Redux", "HTML", "CSS"],
    },
    {
      name: "cyber-my-projects",
      github: "my-projects",
      title: "My projects",
      description: "See all my projects already created on my github",
      link: "my-projects",
      tags: ["React", "HTML", "CSS"],
    },
    {
      name: "cyber-amplify-react-app",
      github: "amplify-react-app",
      title: "Simple amplify react",
      description:
        "Testing an Application with AWS Amplify Technology for Hosting",
      link: "amplify-react",
      tags: ["React", "Redux", "HTML", "CSS", "AWS"],
    },
    {
      name: "cyber-todos",
      github: "react-todo-list",
      title: "Todos",
      description:
        "A trigger for those starting with React, if you haven't done it yet, I advise you to visit github.",
      link: "todo-list",
      tags: ["React", "HTML", "CSS"],
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
            <ProjectImage
              image={imgApp}
              href="https://www.app.fluxopay.com.br"
              target="_blank"
            ></ProjectImage>
            <div className="project-explication">
              <h2 className="project-apresentation">Featured Project</h2>
              <h1 className="project-name">Fluxopay</h1>
              <div className="project-description">
                <p>
                  A business management system that controls your{" "}
                  <span>receipts</span> and <span>expenses</span> simple and
                  free and automatic. Create your customer list, import your
                  receipts from another platform and generate reports analytical
                  and operational.
                </p>
              </div>
              <div className="tags">
                <div className="tag">React</div>
                <div className="tag">Styled Components</div>
                <div className="tag">Ant Design</div>
                <div className="tag">Redux</div>
              </div>
              <div className="links">
                <a
                  href="https://www.app.fluxopay.com.br"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project-item">
            <ProjectImage
              image={imgLanding}
              href="https://www.fluxopay.com.br"
              target="_blank"
            ></ProjectImage>
            <div className="project-explication">
              <h2 className="project-apresentation">Featured Project</h2>
              <h1 className="project-name">Fluxopay Landing Page</h1>
              <div className="project-description">
                <p>
                  An extension <span>landing page</span> focused on simplifying
                  features and functioning of the website. Thus, giving a clear
                  idea to the end user of how we work with the application.
                </p>
              </div>
              <div className="tags">
                <div className="tag">React</div>
                <div className="tag">Styled Components</div>
                <div className="tag">Redux</div>
                <div className="tag">Analytics</div>
              </div>
              <div className="links">
                <a
                  href="https://www.fluxopay.com.br"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project-item">
            <ProjectImage
              image={clothingStore}
              href="https://cyber-crwn-clothing.netlify.app/"
              target="_blank"
            ></ProjectImage>
            <div className="project-explication">
              <h2 className="project-apresentation">Featured Project</h2>
              <h1 className="project-name">Tema Halcyon</h1>
              <div className="project-description">
                <p>
                  A web <span>e-commerce</span> in development, focused on
                  selling clothes and accessories, charging a low shipping fee.
                </p>
              </div>
              <div className="tags">
                <div className="tag">React</div>
                <div className="tag">SASS</div>
                <div className="tag">Firebase</div>
                <div className="tag">Redux</div>
              </div>
              <div className="links">
                <a
                  href="https://github.com/Cyber-Quest/crwn-clothing"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://cyber-crwn-clothing.netlify.app/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Title style={{ marginTop: "180px" }}>Other Noteworthy Projects</Title>
        <div className="portfolio">
          {data.length > 0 ? (
            data.slice(0, 6).map((item, index) => {
              return (
                <ProjectPanel
                  key={`${index}`}
                  href={`https://${item.name}.netlify.app`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="container">
                    <div className="header">
                      <AiOutlineFolder className="icon-folder"></AiOutlineFolder>
                      <div className="links">
                        <a
                          rel="noopener noreferrer"
                          href={`https://github.com/Cyber-Quest/${item.github}`}
                          className="link"
                          target="_blank"
                        >
                          <FiGithub />
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href={`https://${item.name}.netlify.app`}
                          className="link"
                          target="_blank"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    <div className="body">
                      <div className="body-title">{item.title}</div>
                      <div className="body-description">{item.description}</div>
                    </div>
                  </div>
                  <div className="tags">
                    {item.tags.map((item) => {
                      return <div className="tag">{item}</div>;
                    })}
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
