const MathContent = ({ children }) => {
    const renderMathContent = (content) => {
      if (typeof content !== 'string') {
        return content;  // Если это не строка, просто возвращаем содержимое как есть
      }
  
      const regex = /\$(.*?)\$/g;
      const parts = [];
      let lastIndex = 0;
  
      let match;
      while ((match = regex.exec(content)) !== null) {
        const math = match[1];
        parts.push(content.substring(lastIndex, match.index));
        parts.push(<MathRender key={match.index}>{math}</MathRender>);
        lastIndex = match.index + match[0].length;
      }
  
      parts.push(content.substring(lastIndex));
  
      return parts;
    };
  
    return <>{renderMathContent(children)}</>;
  };