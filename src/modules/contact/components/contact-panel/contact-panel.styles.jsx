import styled from "styled-components";

export const ContactPanelStyles = styled.div` 
  max-width:100%;
  width:auto; 
  padding:50px 0px;
`;

export const Panel = styled.div`
  width:100%;
  padding: 0px 70px;
  background: ${({ color }) => `${color ? color : "transparent"}`};
  min-height:400px; 
  height:auto;

  h2{
    margin-bottom: 62px;
  }
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
display: flex;
flex-flow: column;
gap: 48px;
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
display: flex;
gap: 16px;
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
