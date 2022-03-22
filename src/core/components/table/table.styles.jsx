import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  background-color: transparent;
  .table-box {
    width: 100% !important;
    border-collapse: collapse;
  }
  .table-row { 
    font-family: sans-serif;
    background: transparent;
    padding: 12px 0;
    color: #555;
    font-size: 13px;
  }
  .table-head {
    box-shadow: none; 
    color: black;
    font-weight: 600;
    font-size: 15px;
  }
  .table-head .table-cell {
    padding: 10px 0px;
  }
  .table-cell {
    padding: 16px 0px;
    vertical-align: middle;
    text-align: left;
  }

  .table-cell p {
    margin: 0;
  }
  .first-cell {
    padding-left: 20px;
  }
  .last-cell {
    border-right: none;
  }
  a {
    text-decoration: none;
    color: #555;
  }

  .no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    width: 100%;
    margin-left: -40px;
    button {
      all: unset;
      cursor: pointer;
      padding: 4px 16px;
      background-color: #808080;
      color: white;
      height: 24px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    button:hover {
      opacity: 0.6;
    }
    ul {
      display: flex;
      gap: 8px;
      list-style: none;
      padding-inline-start: 0px;
      li {
        cursor: pointer;
        padding: 4px 16px;
        background-color: #808080;
        color: white;
      }
      li:hover {
        opacity: 0.6;
      }

      .active {
        opacity: 0.6;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .table-row {
      font-size: 11px;
    }
  }
`;
