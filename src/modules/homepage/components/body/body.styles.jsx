import styled from "styled-components"; 
import { HashLink } from 'react-router-hash-link'; 

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
 background: ${({ color }) => `${color ? color : "#333333"}`}; 
 width:100%; 
 box-shadow: 0 0 15px #1a1a1a;
 ${() => `min-height: calc(600px);`}
 margin-bottom:50px;
`

export const AfixLink = styled(HashLink)` 
  color: #8c8c8c;
  &.active {
    color: white !important;
  }
  &:hover{
      color: white !important;
  }
  &:checked{
      color: ${(props) => props.theme.primary_color} !important;
  }
`;