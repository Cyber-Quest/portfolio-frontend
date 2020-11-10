import styled from "styled-components";

export const AboutPanelStyles = styled.div`
    display:flex; 
    justify-content:center;
    align-items:center; 
    ${() => `min-height: calc(600px);`}
    width:100%;
    color:white;
`;

export const Title = styled.div`
    font-size:20px;
    line-height:45px;
    color:#e6e6e6;
`;

export const Subject = styled.div`
    font-size:15px;
    color:#999999;
`;

export const Container = styled.div`
    display:flex; 
    justify-content:center; 
    flex-direction:column; 
    padding: 20px 30px;
    background-color: #262626;
    height:400px;
    text-align:left;
    box-shadow: 0 4px 8px 0 rgba(13, 13, 13, 0.2), 0 6px 20px 0 rgba(13, 13, 13, 0.19);
`;

