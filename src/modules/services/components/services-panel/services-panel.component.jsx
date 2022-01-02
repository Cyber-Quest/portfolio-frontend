import React from "react";
import { CloudServerOutlined } from "@ant-design/icons";
import { BiCodeAlt } from "react-icons/bi";

import {
  ServicesPanelStyles,
  Title,
  Subject,
  Container,
  Tag,
  TagType,
  TagTitle,
} from "./services-panel.styles";

const ServicesPanel = () => {
  const services = [
    { name: "C", type: "s" },
    { name: "C#", type: "s" },
    { name: "SQL", type: "s" },
    { name: "HTML", type: "s" },
    { name: "CSS", type: "s" },
    { name: "PHP", type: "s" },
    { name: "JS", type: "s" },
    { name: "React.js", type: "s" },
    { name: "Node.js", type: "s" },
    { name: "Google Cloud", type: "w" },
    { name: "AWS", type: "w" },
    { name: "Serverless", type: "w" },
  ];

  return (
    <ServicesPanelStyles>
      <Container>
        <Title>Skills & Web services</Title>
        <Subject>
          Programming languages ​​and web services acquired over time.
        </Subject>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {services.map((element) => {
            return (
              <Tag>
                <TagType>
                  {element.type === "s" ? (
                    <BiCodeAlt />
                  ) : (
                    <CloudServerOutlined />
                  )}
                </TagType>
                <TagTitle>{element.name}</TagTitle>
              </Tag>
            );
          })} 
        </div>
      </Container>
    </ServicesPanelStyles>
  );
};

export default ServicesPanel;
