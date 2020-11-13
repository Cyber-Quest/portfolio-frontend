import React from "react";
import {Row, Col} from "antd";

import {AboutPanelStyles,
        Title,
        Subject,
        Container} from "./about-panel.styles";

const AboutPanel = () =>{
    return(
        <AboutPanelStyles>
            <Row gutter={[24, 12]} style={{width:"100%", maxWidth:"1100px"}}>
                <Col xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 24 }}
                    xl={{ span: 24 }}
                    xxl={{ span: 24 }} >
                        <h1 style={{textShadow: "1px 1px 4px #1a1a1a"}}>
                            About me
                        </h1>
                </Col>
                <Col xs={{ span: 24 }}
                     sm={{ span: 24 }}
                     md={{ span: 8 }}
                     lg={{ span: 8 }}
                     xl={{ span: 8 }}
                     xxl={{ span: 8 }} >
                     <Container>
                        <Title>Resume</Title>
                        <Subject>    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus? Quam doloremque deserunt asperiores? Nulla asperiores labore provident perferendis alias nostrum omnis!
                        </Subject>
                     </Container>
                </Col>
                 <Col xs={{ span: 24 }}
                     sm={{ span: 24 }}
                     md={{ span: 8 }}
                     lg={{ span: 8 }}
                     xl={{ span: 8 }}
                     xxl={{ span: 8 }} >
                     <Container>
                        <Title>Present</Title>
                        <Subject>    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus? Quam doloremque deserunt asperiores? Nulla asperiores labore provident perferendis alias nostrum omnis!
                        </Subject>
                     </Container>
                </Col>
                 <Col xs={{ span: 24 }}
                     sm={{ span: 24 }}
                     md={{ span: 8 }}
                     lg={{ span: 8 }}
                     xl={{ span: 8 }}
                     xxl={{ span: 8 }} >
                     <Container>
                        <Title>Future</Title>
                        <Subject>    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus? Quam doloremque deserunt asperiores? Nulla asperiores labore provident perferendis alias nostrum omnis!
                        </Subject>
                     </Container>
                </Col>
            </Row>
        </AboutPanelStyles>
    )
}

export default AboutPanel;