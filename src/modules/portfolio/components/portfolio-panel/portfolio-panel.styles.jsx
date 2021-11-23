import styled from "styled-components";

export const PortfolioPanelStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  background-image: url("https://desktop.github.com/images/star-bg.svg");
  background-repeat: no-repeat;

  background-position: 90px -100px, 0 0, 0 0;
`;

export const Title = styled.div`
  font-size: 25px;
  line-height: 30px;
  color: #e6e6e6;
  width: 100%;
  text-align: center;
`;

export const Subject = styled.div`
  text-align: center;
  font-size: 15px;
  color: #999999;
  max-width: 500px;
  width: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: auto;
  width: 100%;
  .portfolio {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }
`;

export const ProjectPanel = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  background: ${({ image }) => `url(${image})`};

  background-size: cover;
  height: 230px;
  width: 100%;
  max-width: 283px;
  & div {
    visibility: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(255, 255, 255, 0.9);
    width: 100%;
    height: 230px;
    opacity: 0.8;
    border-radius: 3px;
    transition: visibility 0s, opacity 0.5s linear;
    p {
      width: auto;
      font-size: 18px;
      font-weight: 700;
      color: black !important;
    }
    p:nth-child(2) {
      font-size: 15px;
      font-weight: 200 !important;
    }
  }

  &:hover {
    & div {
      visibility: hidden;
      opacity: 0;
    }
  }
`;
