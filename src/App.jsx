import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Menu from './components/Menu';
import Section from './components/Section';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const sections = [
  {
    id: 'about',
    title: 'Welcome',
    content: (
      <div>
        <h1 className='font-default text-white font-normal text-md'>
          <ReactTypingEffect
            text={["Hi there, I'm Lucas Toloto"]}
            speed={100}
            eraseSpeed={50}
            typingDelay={100}
            eraseDelay={2000}
            cursorRenderer={cursor => <span>{cursor}</span>}
            displayTextRenderer={(text, i) => (
              <span className='bg-purple-50 px-2 py-2 rounded mr-2'>
                {text.split('').map((char, i) => (
                  <span key={i} className={i === 10 ? 'text-lg ml-1' : ''}>{char}</span>
                ))}
              </span>
            )}
          />
        </h1>
        <p className='text-6xl font-bold mb-4 mt-2'>
          Web Developer
        </p>
        <p className='w-[570px] text-justify text-white-90'>
          Passionate and creative developer with a strong background in frontend development, I specialize in creating responsive and user-friendly web applications.
          My mission is to leverage my technical skills to build impactful digital solutions and continuously innovate in the tech industry.
        </p>
      </div>
    ),
  },
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <Skills />
    ),
  },
  {
    id: 'projects',
    title: 'Projects',
    content: (
      <Projects />
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <Contact />
    ),
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleScroll = () => {
    const sectionElements = sections.map(section => document.getElementById(section.id));

    sectionElements.forEach(section => {
      const { top } = section.getBoundingClientRect();
      if (top <= window.innerHeight / 2 && top >= -window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <CustomCursor />
      <div className="flex-grow">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            content={section.content}
            onVisible={() => setActiveSection(section.id)}
          />
        ))}
      </div>
      <Menu
        sections={sections}
        activeSection={activeSection}
        onSectionClick={setActiveSection}
      />
    </div>
  );
}

export default App
