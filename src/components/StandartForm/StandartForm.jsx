import React, { useState } from 'react';
import Latex from 'react-latex';

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
  width: '300px',
};

const buttonStyle = {
  padding: '10px 20px',
  background: 'dodgerblue',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginBottom: '10px',
};

function toStandardForm(expression) {
  const regex = /(\d+|[a-zA-Z]\^?\d*)/g;
  const parts = expression.match(regex);
  let coefficient = 1;
  const powers = {};

  parts.forEach((part) => {
    if (/^\d+$/.test(part)) {
      coefficient *= parseInt(part);
    } else {
      const letter = part[0];
      const power = parseInt(part.slice(2)) || 1;

      if (powers[letter]) {
        powers[letter] += power;
      } else {
        powers[letter] = power;
      }
    }
  });

  const result = [
    coefficient,
    ...Object.entries(powers).map(([letter, power]) => `${letter}^${power}`),
  ].join(' * ');
  return result;
}
export default function MonomialStandardForm() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    setResult(toStandardForm(expression));
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Введите одночлен"
        style={inputStyle}
      />
      <div>
        <Latex>{'$' + expression.replace(/\*/g, ' ') + '$'}</Latex>
      </div>
      <button onClick={handleClick} style={buttonStyle}>
        Привести к стандартному виду
      </button>
      {result && (
        <div>
          <Latex>{'$' + result.replace(/\*/g, ' ') + '$'}</Latex>
        </div>
      )}
    </div>
  );
}
