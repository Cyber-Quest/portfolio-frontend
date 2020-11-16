import React from "react"; 

import Header from "../components/header/header.component";
import Body from "../components/body/body.component";
import Footer from "../components/footer/footer.component";
import background_image from "../assests/body-background.jpg"

import { HomePageStyles,
         FixedComponent,
         Container  
        } 
        from "./homepage.styles";

const HomePage = () => {
  return(
   <HomePageStyles id="home">  
    <FixedComponent id="fixed" imageUrl={background_image}/>  
    <Container>
      <Header/> 
      <Body/>
      <Footer/>
    </Container> 
  </HomePageStyles>
  );
};

export default HomePage;
