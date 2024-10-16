import React from 'react';

function Menu({ sections, activeSection, onSectionClick }) {
  return (
    <nav className="fixed right-0 top-0 h-screen flex flex-col justify-center space-y-4 mr-80">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id} className={`transition-all duration-300 `}>
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault(); // Evitar comportamento padrão
                onSectionClick(section.id); // Chama a função ao clicar
                document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' }); // Scroll suave
              }}
              className={`block p-4 transition-all duration-300 cursor-none hover:scale-105 `}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="active-line"></div>
    </nav>
  );
}

export default Menu;
// ${activeSection === section.id ? 'text-blue-500 font-bold' : ''}
// ${activeSection === section.id ? 'translate-x-[-10px]' : ''}