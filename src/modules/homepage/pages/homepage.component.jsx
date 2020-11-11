import React from "react";
import Particles from "react-particles-js";  

import Header from "../components/header/header.component";
import Body from "../components/body/body.component";
import Footer from "../components/footer/footer.component";
import background_image from "../assests/body-background.jpg"

import { HomePageStyles,
         FixedComponent,  
        } 
        from "./homepage.styles";

const HomePage = () => {
  return(
   <HomePageStyles  id="home">   
     <Header/> 
     <FixedComponent id="fixed" imageUrl={background_image}>
        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 150, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }}  
        style={{ width: "100vw", heigth: "100vh", marginTop:"100px" }}
      />
      </FixedComponent>  
     <Body/>
     <Footer/>
  </HomePageStyles>
  );
};

export default HomePage;
