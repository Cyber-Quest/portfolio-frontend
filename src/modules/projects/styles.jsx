import styled from "styled-components"; 

export const Styles = styled.div` 
  position: relative;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  z-index: 999;
  width: 100vw;  
  background-color: #24292e;
  min-height: 100vh;
`;
  
export const Body = styled.div`
  width: 100%;
  min-height: 30vh; 
  h1{
      margin-top: 80px;
      font-size: 56px;
  }
  h4{
      margin:40px 0px;
      font-size: 24px;
      font-weight: 300;
  }
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