import styled from "styled-components";  

export const BodyStyles = styled.div` 
 height:auto;
 ${() => `min-height: calc(100vh - 95px);`}
`; 

export const SocialNetworks = styled.div`  
 color:white;
 display:flex;
 line-height:0px;
 gap:15px;
 font-size:25px; 
 &>div{
   cursor:pointer;
 }
 &>div:hover {
  opacity:0.6;
 }
`

export const Avatar = styled.div`  
 background-image: ${({ image }) => `url(${image})`};
 background-size: 100% 100%;
 background-repeat: no-repeat;
 min-width: 253px;
 min-height: 374px;
`
export const Card = styled.div`  
 display:flex;
 align-items:center;  
 flex-flow:column;
 background: ${({ color }) => `${color ? color : "transparent"}`}; 
 width:100%;  
 height:auto;     
` 

export const BordedConnector = styled.div`  
 border-left: 3px solid white; 
 border-style: dashed;
 height:auto;
 width:10px; 
 min-height: 40px; 
` 