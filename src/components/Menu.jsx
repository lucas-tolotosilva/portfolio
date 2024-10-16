import React from 'react';

function Menu({ sections, activeSection }) {
  return (
    <nav className="fixed right-0 top-0 h-screen flex flex-col justify-center space-y-4 mr-80">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block p-4 transition-all duration-300
                ${activeSection === section.id ? 'active' : ''} 
                cursor-none`}
            >
              {/* Dividindo o título em letras e colocando cada letra em um span */}
              {section.title.split('').map((char, i) => (
                <span key={i} className="letter-span">
                  {char}
                </span>
              ))}
            </a>
          </li>
        ))}
      </ul>
      {/* Linha que cresce ao lado */}
      <div className="active-line"></div>
    </nav>
  );
}

export default Menu;
