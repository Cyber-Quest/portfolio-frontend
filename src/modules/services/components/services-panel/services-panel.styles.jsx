import styled from "styled-components";
import theme from "theme";

export const ServicesPanelStyles = styled.div`   
    display:flex; 
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    width:100%;   
    background-image: url('https://desktop.github.com/images/star-bg.svg') ;
    background-repeat:  no-repeat;
    background-position: 10px -150px, 0 0, 0 0;
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
    gap: 16px;
    height:auto; 
    width:80%; 
`;

export const Tag = styled.div` 
  display:flex;
  align-items:center; 
  background: ${() =>theme.secondary_color};
  color: ${() =>theme.secondary_font_color};
  width:145px;
  height: 40px;
  padding: 5px 8px;
  border-radius:3px;
  font-size: 12px;
`;

export const TagType = styled.div` 
  float:left;
  display:flex;
  align-items:center;
  justify-content:center;
  background: ${() =>theme.primary_color};
  border-radius:50%; 
  height: auto;
  width:25px;
  height:25px; 
  
  font-size: 12px;
`;

export const TagTitle = styled.div`
color: ${() =>theme.third_font_color};;
 float:left;
 margin-left:10px; 
 font-size:12px;
 font-weight:500;
 width:auto;
`;