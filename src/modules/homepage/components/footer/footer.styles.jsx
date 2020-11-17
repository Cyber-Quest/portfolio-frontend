import styled from "styled-components";  

export const FooterPanelStyles = styled.div`
    margin-top:100px;
    height:auto; 
    background:rgb(38, 38, 38, 0.6);
`;

export const FooterContainer = styled.div`
    display:flex;
    justify-content:center; 
    height:100px; 
`;

export const CopyRight = styled.div` 
    border-top:1px solid #404040;
    color:#a6a6a6;
    text-align:center; 
    width:100%; 
    padding:30px 0px;
    margin-top:20px;
`;

export const Logo = styled.div`
    display: flex; 
    justify-content:flex-start; 
    color:white;
    font-family: 'Sansita Swashed', cursive;
    line-height:26px;
    font-size:30px;
`;
 
export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center; 
  text-align: justify;
  width: 200px;
  height: auto; 
  font-size:15px; 
  & .ant-anchor-link{
      width:100px !important;
  }
`;
 
export const SocialNetworks = styled.div`  
 display:flex;
 flex-wrap:wrap;
 color:#a6a6a6; 
 line-height:35px;
 gap:0px 20px;
 font-size:25px; 
 width: 150px;
 &>div{
   cursor:pointer;
 }
 &>div:hover {
  color:white;
 }
`