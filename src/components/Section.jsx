import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Timeline from './Timeline';
import BackgroundEffect from './BackgroundEffect';

function Section({ id, title, content, onVisible }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView, id, onVisible]);

  return (
    <section ref={ref} id={id} className={`section ${inView ? 'fade-in' : ''}`}>
      <BackgroundEffect />
      <div className="section-inside">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div>{content}</div>
      </div>
      {id === 'about' && <Timeline />}
    </section>
  );
}

export default Section;
