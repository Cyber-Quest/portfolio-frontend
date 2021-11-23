import React from "react";
import {Row, Col, Form, Input} from "antd"; 
import { 
  WhatsAppOutlined, 
  PhoneOutlined,
  MailOutlined
} from "@ant-design/icons";

import Button from "core/components/button/button.component";
import Notification from "core/components/notification/notification.component";

import {ContactPanelStyles, 
        Panel,
        SocialNetworks, 
        Item} from "./contact-panel.styles";

const ContactPanel = ({
    postSendEmail = () => null
}) =>{ 

    const validateMessages = {
        required: 'field is required!',
        types: {
            email: 'email not valid!', 
        }, 
    };
 
    const onFinish  = async fields => {
        const payload = {
            to: "wesley9983@gmail.com",
            from: "wesley9983@gmail.com",
            subject: fields.topic,
            text: `(${fields.email}): ${fields.name} ${fields.lastname} sent this message: ${fields.message}`
        }
        const response = await postSendEmail(payload);
        if(response)
            Notification("success", "Email enviado com sucesso!");
        else
            Notification("fail", response);
    };

    return(
        <ContactPanelStyles>
            <Row gutter={[1, 12]} style={{width:"100%"}}>
                <Col xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 9 }}
                    lg={{ span: 9 }}
                    xl={{ span: 9 }}
                    xxl={{ span: 9 }} >
                    <Panel style={{borderRight:"1px solid #4d4d4d"}}>
                        <h2>Our contacts</h2> 
                        <SocialNetworks> 
                            <Item> 
                                <WhatsAppOutlined/>
                                <span style={{fontSize:"14px"}}>
                                    +55 19 999379949
                                </span>
                            </Item>   
                            <Item>  
                                <PhoneOutlined />
                                <span style={{fontSize:"14px"}}>
                                    +55 19 33623383
                                </span>
                            </Item>  
                            <Item>  
                                <MailOutlined />
                                <span style={{fontSize:"14px"}}>
                                   wesley9983@gmail.com
                                </span>
                            </Item>
                        </SocialNetworks>
                    </Panel>
                </Col>
                <Col xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 15}}
                    lg={{ span: 15}}
                    xl={{ span: 15}}
                    xxl={{ span: 15}} >
                    <Panel>
                        <h2>Send me a message</h2>   
                        <Form onFinish={onFinish} validateMessages={validateMessages}>
                            <Row gutter={[24, 12]} >
                                <Col xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 12 }}
                                    lg={{ span: 12 }}
                                    xl={{ span: 12 }}
                                    xxl={{ span: 12 }} >
                                    <Form.Item name="name" rules={[{ required: true }]}>
                                        <Input placeholder="Your name" />
                                    </Form.Item>        
                                </Col> 
                                <Col xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 12 }}
                                    lg={{ span: 12 }}
                                    xl={{ span: 12 }}
                                    xxl={{ span: 12 }} >
                                    <Form.Item name="lastname" rules={[{ required: true }]}>
                                        <Input placeholder="Last name" />
                                    </Form.Item>        
                                </Col> 
                                <Col xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 12 }}
                                    lg={{ span: 12 }}
                                    xl={{ span: 12 }}
                                    xxl={{ span: 12 }} > 
                                    <Form.Item name="email" rules={[{required: true, type: 'email' }]}>
                                        <Input placeholder="E-mail address" />
                                    </Form.Item>         
                                </Col>
                                <Col xs={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    md={{ span: 12 }}
                                    lg={{ span: 12 }}
                                    xl={{ span: 12 }}
                                    xxl={{ span: 12 }} > 
                                    <Form.Item name="topic" rules={[{ required: true }]}>
                                        <Input placeholder="Topic" />
                                    </Form.Item>         
                                </Col> 
                                <Col xs={{ span: 24 }}
                                        sm={{ span: 24 }}
                                        md={{ span: 24 }}
                                        lg={{ span: 24 }}
                                        xl={{ span: 24 }}
                                        xxl={{ span: 24 }} >
                                        <Form.Item name="message" >
                                            <Input.TextArea placeholder="Message" />
                                        </Form.Item>        
                                </Col> 
                                <Col xs={{ span: 24 }}
                                        sm={{ span: 24 }}
                                        md={{ span: 24 }}
                                        lg={{ span: 24 }}
                                        xl={{ span: 24 }}
                                        xxl={{ span: 24 }} style={{ display:"flex", justifyContent:"flex-end"}}>
                                            <Button btntype="primary" htmlType="submit">
                                                Send
                                            </Button>     
                                </Col>  
                            </Row>
                        </Form>
                    </Panel>
                </Col>
            </Row>
        </ContactPanelStyles>
    )
}

export default ContactPanel;