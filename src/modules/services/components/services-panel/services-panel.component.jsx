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
  return (
    <ServicesPanelStyles>
      <Container>
        <Title>Skills & Services</Title>
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
           <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>C</TagTitle>
          </Tag>
           <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>C#</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>SQL</TagTitle>
          </Tag> 
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>HTML</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>CSS</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>PHP</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>JS</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>React.js</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <BiCodeAlt />
            </TagType>
            <TagTitle>Node.js</TagTitle>
          </Tag> 
          
          <Tag>
            <TagType>
              <CloudServerOutlined />
            </TagType>
            <TagTitle>Google Cloud</TagTitle>
          </Tag> 
          <Tag>
            <TagType>
              <CloudServerOutlined />
            </TagType>
            <TagTitle>AWS</TagTitle>
          </Tag>
          <Tag>
            <TagType>
              <CloudServerOutlined />
            </TagType>
            <TagTitle>Serverless</TagTitle>
          </Tag> 
        </div>
      </Container>
    </ServicesPanelStyles>
  );
};

export default ServicesPanel;
