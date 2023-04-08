import React, { useState, useRef, useEffect } from 'react';

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
  width: '250px',
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

function isValidFraction(fraction) {
  const [numerator, denominator] = fraction.split('/');
  return (
    fraction.split('/').length === 2 &&
    !isNaN(numerator) &&
    !isNaN(denominator) &&
    Number.isInteger(Number(numerator)) &&
    Number.isInteger(Number(denominator)) &&
    denominator > 0
  );
}

function drawFraction(canvas, numerator, denominator) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  const center = size / 2;
  const radius = center - 5;

  // Clear the canvas
  ctx.clearRect(0, 0, size, size);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Draw the sectors
  for (let i = 0; i < denominator; i++) {
    const angle1 = (2 * Math.PI * i) / denominator;
    const angle2 = (2 * Math.PI * (i + 1)) / denominator;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, angle1, angle2);

    if (i < numerator) {
      ctx.fillStyle = 'blue';
      ctx.fill();
    }
    ctx.stroke();
  }
}

export default function FractionVisualizer() {
  const [fraction, setFraction] = useState('');
  const [numerator, setNumerator] = useState(0);
  const [denominator, setDenominator] = useState(0);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawFraction(canvasRef.current, numerator, denominator);
  }, [numerator, denominator]);

  const handleChange = (e) => {
    setFraction(e.target.value);
  };

  const handleClick = () => {
    if (isValidFraction(fraction)) {
      const [num, denom] = fraction.split('/').map(Number);
      setNumerator(num);
      setDenominator(denom);
    } else {
      alert('Введите корректную дробь (например, 3/4)');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <input
        type="text"
        value={fraction}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Введите дробь (например, 3/4)"
        ref={inputRef}
        style={inputStyle}
      />
      <button onClick={handleClick} style={buttonStyle}>
        Визуализировать
      </button>
      <canvas
        ref={canvasRef}
        width="200"
        height="200"
        style={{ margin: '10px' }}
      />
    </div>
  );
}
