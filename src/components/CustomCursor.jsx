import React, { useEffect, useState } from 'react';
import '../App.css'; // Certifique-se de ter este arquivo CSS

const colors = ['#327199', '#993399'];

const CustomCursor = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setTrail((prevTrail) => [
        ...prevTrail.slice(-5), // Manter apenas os últimos 5 rastros para suavidade
        { ...newPosition, color: colors[colorIndex] },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(colorInterval);
    };
  }, [colorIndex]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: colors[colorIndex],
          boxShadow: `0 0 30px 10px ${colors[colorIndex]}`, // Ajustar a sombra
          width: '20px', // Tamanho maior para o círculo principal
          height: '20px',
        }}
      ></div>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            backgroundColor: pos.color,
            opacity: 0.3 - (index * 0.05), // Suavizando a opacidade
            transition: 'opacity 0.1s ease', // Suavizando a transição
          }}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
