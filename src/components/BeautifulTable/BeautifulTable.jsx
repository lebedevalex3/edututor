import React from 'react';
import './BeautifulTable.css';

const BeautifulTable = ({ data }) => {
  const headers = data[0];

  return (
    <div className="table-wrapper">
      <table className="beautiful-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeautifulTable;
