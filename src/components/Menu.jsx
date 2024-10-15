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
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
