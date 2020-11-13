import React from "react";

import ContactPanel from "../components/contact-panel/contact-panel.component";

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