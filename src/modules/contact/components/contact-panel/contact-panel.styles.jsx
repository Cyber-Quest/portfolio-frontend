import styled from "styled-components";

export const ContactPanelStyles = styled.div` 
  max-width:100%;
  width:auto;
  background:rgb(38, 38, 38, 0.6);
  padding:50px 20px;
`;

export const Panel = styled.div`
  width:100%;
  padding: 0px 30px;
  background: ${({ color }) => `${color ? color : "transparent"}`};
  min-height:400px; 
  height:auto;

  @media only screen and (max-width: 800px) {
    border: none !important;
    display:flex;
    justify-content:center;
    flex-flow:column; 
    h2{ 
      text-align:center;
    }
  }
`;

export const SocialNetworks = styled.div`   
 height: auto;     
 color:white;
 font-size:25px;
 @media only screen and (max-width: 800px) { 
    display:flex;
    justify-content:center;
    flex-flow:column;
  }
`
export const Item = styled.div`  
 @media only screen and (max-width: 800px) { 
    display:flex;
    justify-content:center; 
  }
  &{
      span{
          display:inline-block; 
          vertical-align:middle;
          color:#b3b3b3;
      }
  }
`
