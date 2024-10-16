import React from 'react';
import '../App.css'; // Certifique-se de importar o CSS apropriado

const BackgroundEffect = () => {
  return (
    <div className="h-full w-full absolute">
      {/* Top left*/}
      <div className="bg-radial-blue blur-3xl w-96 h-96 top-0 left-0 absolute "></div>
      <div className='bg-radial-blue blur-3xl w-96 h-96 -top-40 left-96 absolute '> </div>
      <div className='bg-radial-purple blur-3xl w-96 h-96 -top-20 left-52 absolute '></div>
      
      {/* Top right*/}
      <div className="bg-radial-blue blur-3xl w-96 h-96 -top-40 right-0 absolute "></div>
      <div className="bg-radial-purple blur-3xl w-96 h-96 -top-20 right-10 absolute "></div>
      
      {/* Bottom */}
      <div className='bg-radial-purple blur-3xl w-96 h-96 -bottom-20 right-52 absolute '></div>
      <div className='bg-radial-blue blur-3xl w-96 h-96 -bottom-40 right-96 absolute '></div>
    </div>
  );
};

export default BackgroundEffect;
