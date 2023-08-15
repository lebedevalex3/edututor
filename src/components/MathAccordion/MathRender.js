import React, { useEffect, useRef } from 'react';
import katex from 'katex';

const MathRender = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(children, containerRef.current);
    }
  }, [children]);

  return <span ref={containerRef}></span>;
};

export default MathRender;