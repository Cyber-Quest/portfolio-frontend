import styled from "styled-components";

export const PortfolioPanelStyles = styled.div`
  display:flex;  
  justify-content:center;
  align-items:center; 
  width:auto;
  background:rgb(38, 38, 38, 0.6);
  padding:50px 20px;
`;
  
export const Title = styled.div`
    font-size:25px;
    line-height:30px;
    color:#e6e6e6;
    width:100%;
    text-align:center;
`;

export const Subject = styled.div`
    text-align:center;
    font-size:15px;
    color:#999999;
    max-width:500px;
    width:auto;
`;
 
export const Container = styled.div`
    display:flex; 
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    height:auto; 
    max-width:800px;
    width:100%; 
`;

export const ProjectPanel = styled.a`
    display:flex; 
    flex-direction:column; 
    align-items:center;
    justify-content:center;  
    border-radius:3px;
    cursor:pointer;
    background:linear-gradient(to top, rgba(128, 128, 128, .6), rgba(51, 51, 51, .6)), ${({ image }) => `url(${image})`};
   
    background-size: cover;
    height:230px; 
    width:100%;  
    max-width:220px;
    & div{
        visibility: hidden;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column; 
        color:white; 
        background: rgb(0, 163, 204, 0.9);  
        width:100%;
        height:230px;
        opacity: 0;
        border-radius:3px;
        transition: visibility 0s, opacity 0.5s linear;
        p{
            width:auto;
            font-size:18px;
            font-weight: 700;
        }
        p:nth-child(2){
            font-size:15px; 
            font-weight: 200 !important;
            color:#d9d9d9 !important;
        }
       
    }
    
    &:hover{ 
       & div{
          visibility: visible;      
          opacity: 1;    
       }
    }
 
`;
