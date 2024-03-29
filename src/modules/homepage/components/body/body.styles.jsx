import styled, { keyframes } from "styled-components";
import theme from "theme";

const navegation = keyframes` 
  0%   { transform: rotate(90deg);  left: 50vw;top: 30vh;} 
  50%  { transform: rotate(90deg);left: 70vw; top: 20vh;}    
  100% { transform: rotate(90deg);left: 50vw;top: 30vh;} 
`;

export const BodyStyles = styled.div`
  height: auto;
  width: 100%;
  ${() => `min-height: calc(100vh - 95px);`}
`;

export const SocialNetworks = styled.div`
  color: ${() => theme.primary_font_color};
  display: flex !important;
  flex-flow: row !important;
  width: 100%;
  line-height: 0px;
  gap: 15px;
  font-size: 25px;
  a {
    cursor: pointer;
    color: whitesmoke !important;
  }
  a:hover {
    color: white !important;
    opacity: 0.6;
  }
`;

export const Avatar = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-width: 320px;
  min-height: 400px;
  opacity: 0.7;
  animation-name: ${navegation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  position: absolute;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .img-container {
    width: 320px;
  }
  div:first-child {
    h1 {
      font-family: Merriweather Sans, sans-serif;
      color: ${() => theme.primary_font_color};
      font-size: 7em;
      width: auto;
      line-height: 90px;
    }
  }
  @media only screen and (max-width: 800px) {
    div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      gap: 20px;
      h1 {
        font-size: 5em;
        width: auto;
        text-align: center;
      }
      p {
        text-align: center;
        word-wrap: break-word;
        width: 200px;
        line-height: normal !important;
      }
    }
    .img-container {
      display: none;
    }
  }
`;

export const ContainerAnchor = styled.div`
  position: fixed;
  top: 40vh;
  right: 0;
  margin-right: 25px;
  div {
    font-size: 12px !important;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  background: ${({ color }) => `${color ? color : "transparent"}`};
  width: 100%;
  height: auto;
`;

export const BordedConnector = styled.div`
  margin: 80px 0px;
  border-left: 3px solid #595959;
  border-style: dashed;
  height: auto;
  width: 10px;
  min-height: 60px;
`;
