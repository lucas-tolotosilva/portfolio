import React from 'react';
import CustomCursor from './components/CustomCursor';
import Menu from './components/Menu';
import Section from './components/Section';
import './App.css';

const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: (
      <p>
        I'm Lucas, a dedicated developer with a knack for building efficient and scalable web applications...
      </p>
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
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <CustomCursor />
      <div className="flex-grow">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
      <Menu sections={sections} />
    </div>
  );
}

export default App;
