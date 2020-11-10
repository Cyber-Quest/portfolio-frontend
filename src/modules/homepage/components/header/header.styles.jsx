import styled from "styled-components";
import { Link as Linked } from "react-router-dom";  
import { Anchor} from 'antd';  

const { Link } = Anchor;

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
  margin-left:40px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px; 
  font-size:15px; 
`;
 
export const LinkActive = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500; 
  font-size: 13px; 
  text-align: left;
  border-radius: 4px;
  color:white !important;
  background: transparent !important;
  border: 1px solid ${(props) => props.theme.primary_color} !important ;
  padding:7px 5px;
  width:100px;
  border-radius:15px;
  text-align:center;
  margin-left:15px;
  &:disabled {
    opacity: 0.7;
  } 
  &:hover{
    background: ${(props) => props.theme.primary_color} !important; 
  }
  &.ant-anchor-link .ant-anchor-link-title{
    color:#00ccff  !important;
  }  
  &:hover.ant-anchor-link .ant-anchor-link-title{
    color:white !important;
  }  
`;