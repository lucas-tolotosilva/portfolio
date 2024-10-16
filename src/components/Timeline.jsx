import React, { useEffect, useState } from 'react';
import '../App.css';

const timelineData = [
  { date: '2020', title: 'Curso Técnico em Informática ', description: 'Etec de Botucatu.' },
  { date: '2021', title: 'Faculdade - Análise e Desenvolvimento de Sistemas', description: 'Fatec de Botucatu.' },
  { date: '2024', title: 'Próximo Capítulo', description: 'Construindo...' }
];

const Timeline = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  // Controla a animação, revelando cada item gradualmente
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex < timelineData.length - 1 ? prevIndex + 1 : prevIndex));
    }, 1000); // Define o tempo para cada etapa aparecer
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="compact-timeline-container">
      <div className="compact-timeline-line"></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`compact-timeline-item ${index <= visibleIndex ? 'visible' : ''}`}
        >
          <div className="compact-timeline-content">
            <div className="text-base font-bold mb-0.5 text-blue-200">{item.date}</div>
            <div className="compact-timeline-arrow"></div>
            <h3 className='text-base mb-0.8'>{item.title}</h3>
            <p className='text-[0.8rem] text-[#bbbbbb]'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
