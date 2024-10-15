import React from 'react';

function Menu({ sections }) {
  return (
    <nav className="fixed right-0 top-0 h-screen flex flex-col justify-center space-y-4">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
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
