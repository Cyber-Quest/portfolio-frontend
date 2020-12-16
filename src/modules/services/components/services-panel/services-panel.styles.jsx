import styled from "styled-components";

export const ServicesPanelStyles = styled.div`   
    display:flex; 
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    width:100%;
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
    max-width:700px;
    width:auto; 
`;

export const Tag = styled.div` 
  display:flex;
  align-items:center; 
  background: #262626; 
  color:white;
  width:165px;
  height: 40px;
  padding: 5px 8px;
  border-radius:3px;
`;

export const TagType = styled.div` 
  float:left;
  display:flex;
  align-items:center;
  justify-content:center;
  background: black; 
  border-radius:50%; 
  height: auto;
  width:30px;
  height:30px; 
`;

export const TagTitle = styled.div`
 float:left;
 margin-left:10px; 
 font-size:14px;
 font-weight:500;
 width:auto;
`;