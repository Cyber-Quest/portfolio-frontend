import styled from 'styled-components'

export const HomePageStyles = styled.div` 
  position:relative; 
  display:flex;
  justify-content:center;  
  z-index:999; 
  width:100%;
` 
export const Container = styled.div`   
  width:100%; 
  @media only screen and (min-width: 1025px) {
    max-width:1024px; 
  }
` 
export const FixedComponent = styled.div`
  top:0;
  position:fixed;
  z-index:-1; 
  background-color:black;
  background-image:
  radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
  radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
  radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
  radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  min-width: 100vw;
  min-height: 100vh; 
`