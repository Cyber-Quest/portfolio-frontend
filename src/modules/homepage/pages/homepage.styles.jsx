import styled, { keyframes } from "styled-components";

const navegation = keyframes` 
  0%   {    background-position: 0vw 0 } 
  50%  { background-position: -50vw 0}   
  100% { background-position: -99vw 0} 
`;

export const HomePageStyles = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  z-index: 999;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0px 40px;
  @media only screen and (min-width: 1025px) {
    max-width: 1024px;
  }
  @media only screen and (max-width: 725px) {
    padding: 0px 5px;
  }
`;

export const FixedComponent = styled.div`
  z-index: -5;
  position: absolute;
  background-color: #24292e;
  background-image: url("https://desktop.github.com/images/star-bg.svg"),
    linear-gradient(#191c20, #24292e 15%);
  background-size: cover;
  animation-name: ${navegation};
  background-repeat: repeat-x;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  min-width: 100%;
  min-height: 100vh;
`;
