import styled from "styled-components";
import theme from "theme";

export const ContactPanelStyles = styled.div`
  max-width: 100%;
  width: auto;
  padding: 40px 0px 0px 0px;
  border-radius: 8px;
  background:rgba(42, 57, 72);
  background-repeat: no-repeat;
  margin-bottom: 128px;
  box-shadow: 0 10px 30px -15px #0f0f0f;
`;

export const Panel = styled.div`
  width: 100%;
  padding: 0px 40px;
  background: ${({ color }) => `${color ? color : "transparent"}`}; 
  height: auto;

  h2 {
    margin-bottom: 62px;
  }
  @media only screen and (max-width: 800px) {
    border: none !important;
    display: flex;
    justify-content: center;
    flex-flow: column;
    h2 {
      text-align: center;
    }
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-flow: column;
  gap: 48px;
  height: auto;
  color: ${() => theme.primary_font_color};
  font-size: 25px;
  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
`;
export const Item = styled.div`
  display: flex;
  gap: 16px;
  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
  & {
    span {
      display: inline-block;
      vertical-align: middle;
      color: #dbd6d1;
    }
  }
`;
