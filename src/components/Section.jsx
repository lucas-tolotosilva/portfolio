import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Timeline from './Timeline';  // Importando a linha do tempo

function Section({ id, title, content, onVisible }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id); // Chama a função quando a seção fica visível
    }
  }, [inView, id, onVisible]);

  return (
    <section ref={ref} id={id} className={`section ${inView ? 'fade-in' : ''}`}>
      <div className='section-inside'>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div>{content}</div>
      </div>
      {id === 'about' && <Timeline />} {/* Mostra a linha do tempo na seção About */}
    </section>
  );
}

export default Section;
