import styled from 'styled-components'

export const HomePageStyles = styled.div` 
  position:relative; 
  display:flex;
  flex-flow:wrap;
  justify-content:center;  
  z-index:999; 
  width:100%;
` 
export const Container = styled.div`   
  width:100%; 
  padding: 0px 40px;
  @media only screen and (min-width: 1025px) {
    max-width:1024px; 
  }
  @media only screen and (max-width: 725px) {
     padding: 0px 5px; 
  }
` 
export const FixedComponent = styled.div` 
  z-index:-5; 
  position: absolute;
  background-color:black;
  background-color: #24292e;
    background-image: url("https://desktop.github.com/images/star-bg.svg"),linear-gradient(#191c20, #24292e 15%);
    background-repeat: repeat-x;
    background-position: center 0, 0 0, 0 0;
  min-width: 100%;
  min-height: 100vh; 
`