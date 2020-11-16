import React from "react";
import avatar_image from "../../assests/avatar.png";
import { Anchor} from 'antd'; 
import {
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  SkypeOutlined,
  GithubOutlined
} from "@ant-design/icons";

import AboutPage from "../../../about/pages/about.component";
import ContactPage from "../../../contact/pages/contact.component";
import ServicesPage from "../../../services/pages/services.component";

import Button from "core/components/button/button.component";

import {BodyStyles,
        Card,
        Avatar,
        SocialNetworks,
        } from "./body.styles";

const { Link } = Anchor;

const Body = () =>{   
   
    return(
        <BodyStyles>
        <Card color="transparent" style={{boxShadow:"none", display:"flex", alignItems:"center", justifyContent:"left", width:"100%", minHeight: "calc(100vh - 95px)"}}>  
            <div style={{ width:"800px", marginLeft:"40px", height:"auto", display:"flex", justifyContent:"space-between"}}>
            <div> 
            <h2>Hello, I am</h2>
            <h1 style={{ fontFamily: "Merriweather Sans, sans-serif", color:"white", fontSize:"7em", width:"600px", lineHeight:"90px"}}>
                Wesley C. Ferreira
            </h1>
            <p style={{lineHeight:"0px", marginTop:"-30px"}}>
                A young man with <span style={{color:"#00ccff"}}>frontend</span> techniques & <span style={{color:"#00ccff"}}>backend</span> abilitys
            </p>
            <div style={{position:"absolute", top:"9%", right:40}}>
                <Anchor>
                    <Link href="#home" title="01" />
                    <Link href="#about" title="02"/> 
                    <Link href="#services" title="03" />
                    <Link href="#portfolio" title="04"/>
                    <Link href="#contact" title="05"/>
                </Anchor>
            </div>
            <div style={{marginTop:"30px", marginBottom:"50px"}}>
                <p>Find me on</p>
                <SocialNetworks>
                    <div>
                        <LinkedinOutlined/>
                    </div>
                    <div>
                        <GoogleOutlined />
                    </div>
                    <div>
                        <InstagramOutlined/>
                    </div>
                    <div>
                        <WhatsAppOutlined/>
                    </div>
                    <div>
                        <SkypeOutlined/>
                    </div> 
                    <div>
                        <GithubOutlined />
                    </div>
                </SocialNetworks>
            </div>
            <div>
                <Button btntype="primary" style={{width:120}}>Download CV</Button> 
                <Button btntype="primaryOutlined" style={{marginLeft:"10px"}}>
                  Portfolio
                </Button>
            </div>
            </div>
            <Avatar image={avatar_image}/> 
            </div>
        </Card> 
        <Card id="about" > 
            <AboutPage/>
        </Card> 
        <Card id="services"> 
            <ServicesPage/>
        </Card>
        <Card id="portfolio"> 
            portfolio
        </Card>
        <Card id="contact"> 
            <ContactPage/>
        </Card>    
        </BodyStyles>
    )
}

export default Body;