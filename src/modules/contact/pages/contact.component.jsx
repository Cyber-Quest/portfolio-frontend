import React from "react";

import ContactPanel from "../components/contact-panel/contact-panel.container";

import {
        ContactPageStyles
       } from "./contact.styles";

const ContactPage = () =>{
    return(
        <ContactPageStyles>
            <ContactPanel/>
        </ContactPageStyles>
    )
}

export default ContactPage;