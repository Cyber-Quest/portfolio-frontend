import styled from "styled-components";
import { Link as Linked } from "react-router-dom";   
import{MenuOutlined} from "@ant-design/icons"; 

export const HeaderStyles= styled.div` 
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Linked)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-start; 
  color:white;
  font-family: 'Sansita Swashed', cursive;
  font-size:30px;
  @media only screen and (max-width: 800px) {  
    margin-left:10px;
  }
`;

export const MenuOutlinedExpand = styled(MenuOutlined)` 
  color:white;
  cursor:pointer;
  font-size:18px;
  margin-top:25px;
  margin-right:10px;
  display: none;
  @media only screen and (max-width: 800px) { 
    display: flex;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px; 
  font-size:15px;
  span{
      display:none;
  }
  @media only screen and (max-width: 800px) {
    display: ${({ visible }) => `${visible ? "flex":"none"}`};
    position: fixed;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap:20px;
    background:rgb(26, 26, 26);
    z-index:99;
    top:0;
    left:0;
    width:100vw;
    height:100vh; 
    span{
      position:absolute;  
      display: flex; 
      align-items:center; 
      top:0; 
      right:0;
      width:50px;
      height:40px;
    }
  } 
`; 