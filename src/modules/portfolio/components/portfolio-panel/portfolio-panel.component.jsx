import React from "react";
import { Empty } from "antd";

import Button from "core/components/button/button.component";

import {
  PortfolioPanelStyles,
  Title,
  Subject,
  Container,
  ProjectPanel,
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
        <Title>My Portfolio</Title>
        <Subject>
          Projects created with the aim of demonstrating my knowledge.
        </Subject>
        <div className="portfolio">
          {!projects.loading ? (
            data.length > 0 ? (
              data.slice(0, 6).map((item, index) => {
                return (
                  <ProjectPanel
                    key={`${index}`}
                    image={`${process.env.PUBLIC_URL}/assests/img/${item.link}.png`}
                    href={`https://${item.name}.netlify.app`}
                    target="_blank"
                  >
                    <div>
                      <p>{item.title}</p>
                      <p>{item.subtitle}</p>
                    </div>
                  </ProjectPanel>
                );
              })
            ) : (
              <Empty />
            )
          ) : null}
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
