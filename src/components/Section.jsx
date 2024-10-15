import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../App.css';

function Section({ id, title, content, onVisible }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      onVisible(); // Chama a função quando a seção entra em vista
    }
  }, [inView, onVisible]);

  return (
    <section ref={ref} id={id} className={`section ${inView ? 'fade-in' : ''}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div>{content}</div>
    </section>
  );
}

export default Section;
