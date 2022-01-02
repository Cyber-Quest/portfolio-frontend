import styled from "styled-components";
import theme from "theme";

export const PortfolioPanelStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("https://desktop.github.com/images/star-bg.svg");
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
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .main-projects {
    display: flex;
    flex-direction: column;
    gap: 130px;
    color: ${() => theme.primary_font_color};
    .project-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      .project-explication {
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        width: 40%;
        .project-apresentation {
          font-size: 14px;
          font-weight: 600;
          color: #00ccff !important;
        }
        .project-name {
          margin: 8px 0px 32px 0px;
        }
        .project-description {
          display:flex;
          align-items: center;
          box-shadow: 0 10px 30px -15px #0f0f0f;
          background: ${() => theme.secondary_color};
          color: #d3d8de;
          padding: 24px;
          margin-left: -62px;
          border-radius: 3px;
          min-height: 130px;
          span {
            color: #00ccff !important;
          }
        }
        .tags {
          display: flex;
          gap: 16px;
          margin-top: 16px;
          .tag {
          }
        }
        .links {
          margin-top: 16px;
          display: flex;
          gap: 8px;
          font-size: 18px;
          .link {
          }
        }
      }
    }
    .project-item:nth-child(2) {
      flex-direction: row-reverse;
      .project-explication {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        .project-description {
          margin-left: 0;
          margin-right: -62px;
        }
      }
    }
  }
`;

export const ProjectImage = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 10px 30px -15px #0f0f0f;
  background: ${({ image }) =>
    ` linear-gradient(rgba(0, 204, 255,0.2),rgba(0, 204, 255,0.2)),url(${image})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 60%;
  height: 300px;
  &:hover {
    background: ${({ image }) =>
      `  url(${image})`};
       background-size: 100% 100%;
       background-repeat: no-repeat;
  }
`;

export const ProjectPanel = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  cursor: pointer;
  min-height: 310px;
  width: 100%;
  max-width: 296px;
  background: ${() => theme.secondary_color};
  color: #d3d8de !important;
  padding: 24px;
  box-shadow: 0 10px 20px -15px #0f0f0f;
  transition: transform 125ms;
  &:hover {
    transform: translateY(-10px);
  }
  .header {
    display: flex;
    justify-content: space-between;
    width: 300px;
    .icon-folder {
      font-size: 40px;
      color: ${() => theme.third_font_color};
    }
    .links {
      display: flex;
      gap: 16px;
      font-size: 20px;
      margin-right: 48px;
      .link {
        color: #d3d8de !important;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    .body-title {
      font-size: 18px;
      font-weight: 700;
      margin-top: 16px;
      text-transform: capitalize;
    }
  }
  .tags {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    .tag {
      color: #b6bec8;
    }
  }
`;
