import React, { useState } from "react";

import { Styles } from "./table.styles";

const Table = ({
  loading = false,
  columns = [],
  data = [],
  dataLimit = 8,
  pagination = true,
}) => {
  const [currentPage, setCurrentPage] = useState({
    start: 0,
    end: dataLimit,
  });
  const pages =
    dataLimit > data.length ? 1 : Math.ceil(data.length / dataLimit);
  const newData = [...data];

  const getPaginationGroup = () => {
    const items = Array.from({ length: pages }).map((item, index) => {
      return index;
    });
    return items;
  };

  const goPage = (value) => {
    setCurrentPage({
      start: value * dataLimit,
      end: value * dataLimit + dataLimit,
    });
  };

  const nextPage = () => {
    if (currentPage.end / dataLimit <= pages - 1) {
      setCurrentPage({
        start: currentPage.start + dataLimit,
        end: currentPage.end + dataLimit,
      });
    }
  };

  const prevPage = () => {
    if (currentPage.start > 0) {
      setCurrentPage({
        start: currentPage.start - dataLimit,
        end: currentPage.end - dataLimit,
      });
    }
  };

  return (
    <Styles>
      <table className="table-box">
        <thead className="table-row table-head">
          <tr>
            {columns.map((item, key) => {
              return (
                <th className="table-cell" key={key}>
                  <p>{item.title}</p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {newData
            .slice(currentPage.start, currentPage.end)
            .map((item, key) => {
              return (
                <tr className="table-row" key={key}>
                  {columns.map((column, index) => {
                    return (
                      <td className="table-cell" key={index}>
                        {column?.render !== undefined ? (
                          column.render(item[column.dataIndex], item, key)
                        ) : (
                          <p>{item[column.dataIndex]}</p>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      {pagination ? (
        <div className="pagination">
          <button type="button" onClick={prevPage}>
            voltar
          </button>
          <ul>
            {getPaginationGroup().map((item, key) => {
              return (
                <li
                  key={key}
                  className={`${
                    currentPage.start / dataLimit === item ? "active" : ""
                  }`}
                  onClick={() => goPage(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={nextPage}>
            próximo
          </button>
        </div>
      ) : (
        false
      )}
      {loading === true ? (
        <div className="center">
          <div className="loading" />
        </div>
      ) : null}
      {data.length === 0 && loading === false ? (
        <div className="no-data">
          <h2>Não há dados!</h2>
        </div>
      ) : null}
    </Styles>
  );
};

export default Table;
