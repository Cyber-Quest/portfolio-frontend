import styled from "styled-components";

export const ContactPanelStyles = styled.div``;

export const Panel = styled.div`
    width:100%;
    padding: 0px 30px;
    background: ${({ color }) => `${color ? color : "transparent"}`};
    min-height:400px; 
    height:auto;

    @media only screen and (max-width: 800px) {
      border: none !important;
    }
`;

export const SocialNetworks = styled.div`   
 height: auto;     
 color:white;
 font-size:25px;
`
export const Item = styled.div`  
  &{
      span{
          display:inline-block; 
          vertical-align:middle;
          color:#b3b3b3;
      }
  }
`
