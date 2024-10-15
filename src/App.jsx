import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Menu from './components/Menu';
import Section from './components/Section';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';
import BackgroundEffect from './components/BackgroundEffect';

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
      <ul>
        <li><strong>Languages:</strong> HTML, CSS, JavaScript, Python, PHP</li>
        <li><strong>Frameworks:</strong> React, Angular, Django, Laravel</li>
        <li><strong>Tools & Technologies:</strong> Git, Docker, AWS</li>
      </ul>
    ),
  },
  {
    id: 'projects',
    title: 'Projects',
    content: (
      <div>
        <h3>E-commerce Website</h3>
        <p>Developed a fully functional e-commerce website using React and Node.js...</p>
        <h3>Personal Blog</h3>
        <p>Created a personal blog platform with Django, featuring user authentication...</p>
      </div>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <div>
        <p>Email: lucas@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/lucas">linkedin.com/in/lucas</a></p>
        <p>GitHub: <a href="https://www.github.com/lucas">github.com/lucas</a></p>
      </div>
    ),
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id); // Inicializa com a primeira seção

  return (
    <div className="">
      <BackgroundEffect/>
      <CustomCursor />
      <div className="flex-grow">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            content={section.content}
            onVisible={() => setActiveSection(section.id)} // Atualiza a seção ativa
          />
        ))}
      </div>
      <Menu sections={sections} activeSection={activeSection} /> {/* Passa a seção ativa */}
    </div>
  );
}

export default App;
