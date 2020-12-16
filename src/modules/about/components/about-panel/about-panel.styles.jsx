import styled from "styled-components";

export const AboutPanelStyles = styled.div`  
    display:flex; 
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    background:rgb(38, 38, 38, 0.6); 
    width:100%;
    padding:0px 20px;
    margin-top:120px;
`;

export const Title = styled.div`
    font-size:25px;
    line-height:30px;
    color:#e6e6e6;
    width:100%;
    text-align:center;
`;

export const Subject = styled.div`
    font-size:15px;
    color:#999999;
    width:60%;
    text-align:center; 
`;
 
export const Container = styled.div`
    display:flex; 
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    height:auto;  
    width:100%;  
    padding:0px 10px;
`;

export const AboutImg = styled.div`   
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width:100%;
  height:100%;  
  border-radius:50%;
`;