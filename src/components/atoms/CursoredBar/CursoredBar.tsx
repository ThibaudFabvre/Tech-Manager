import React, { useState } from 'react';

interface CursoredBarProps {
  value: any
  onChange: (newValue: any) => void
  spectre: string
  gradient?: string
}

const CursoredBar: React.FC<CursoredBarProps> = ({
  onChange, spectre, value, gradient,
}) => {
  const [cursorPositionInPercentage, setCursorPositionInPercentage] = useState(80);

  const rangeRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: any) => {
    e.preventDefault();
    if (rangeRef.current) {
      const rangeRect = rangeRef.current.getBoundingClientRect();
      const x = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
      let percentage = ((x - rangeRect.left) / rangeRect.width) * 100;
      if (percentage < 0) {
        percentage = 0;
      } else if (percentage > 100) {
        percentage = 100;
      }

      setCursorPositionInPercentage(percentage);
      onChange({ percentage, gradient });
    }
  };

  const handleMouseDown = (e: any) => {
    handleChange(e);
    window.addEventListener('mousemove', handleChange);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleChange);
    window.removeEventListener('mouseup', handleMouseUp);
  };
  return (
    <div
      style={{
        height: 40,
        display: 'flex',
        alignItems: 'center',
        marginTop: 18,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 12,
          width: '100%',
          backgroundImage: spectre,
          borderRadius: 25,
          boxShadow: 'rgba(0, 0, 0, 0.37) 0px 1px 4px 0px',
        }}
        ref={rangeRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleChange}
        onTouchStart={handleChange}
      >
        <div
          ref={sliderRef}
          style={{
            marginLeft: `${cursorPositionInPercentage}%`,
            color: value,
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.37) 0px 1px 4px 0px',
            width: 24,
            height: 24,
            borderRadius: 25,
          }}
        />
      </div>
    </div>
  );
};

export default CursoredBar;
