import styled from "styled-components";

export const AboutPanelStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 25px;
  line-height: 30px;
  color: #e6e6e6;
  width: 100%;
  text-align: center;
`;

export const Subject = styled.div`
  display: flex;
  flex-flow: column; 
  font-size: 15px;
  color: #000000;
  width: 100%;
  text-align: left !important;
  height: auto;
  .about {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
  }
  .about-item {
    border-radius: 5px;
    background-color: #ffffff;
    width: 283px;
    padding: 32px;
    h3 {
      color: #000000 !important;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: auto;
  width: 100%;
  padding: 0px 10px;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: 15px;
  color: #999999;
  max-width: 500px;
  width: auto;
`;

export const AboutImg = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
