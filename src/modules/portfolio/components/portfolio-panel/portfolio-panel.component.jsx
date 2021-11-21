import React, { useState, useCallback, useEffect } from "react";
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
  const [state, setState] = useState({
    data: [],
  });

  const getProjectsCallback = useCallback(() => {
    getProjects();
  }, [getProjects]);

  useEffect(() => {
    getProjectsCallback();
  }, [getProjectsCallback]);

  useEffect(() => {
    if (!projects.loading) setState({ data: projects.items });
  }, [setState, projects]);

  return (
    <PortfolioPanelStyles>
      <Container>
        <Title>My Portfolio</Title> 
        <Subject>
          Projects created with the aim of demonstrating my knowledge.
        </Subject>
        <div className="portfolio">
          {!projects.loading ? (
            state.data.length > 0 ? (
              state.data.slice(0, 6).map((item, index) => {
                return (
                  <ProjectPanel
                    key={`${index}`}
                    image={item.link}
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
