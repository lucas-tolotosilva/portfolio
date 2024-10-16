import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import amais from '../img/amais.png'
import vet from '../img/vet.png'
import '../App.css'

// Dados dos projetos
const projects = [
  {
    id: 1,
    title:  '+ Assessoria e Eventos',
    image: amais,
    url: 'https://www.amaisassessoriaeeventos.com/',
    description: 'The A+ Assessoria e Eventos project helped me evolve significantly as a developer. Using React, I built a dynamic, fast, and reusable UI, while Tailwind CSS simplified the design process with utility-first styling. I also integrated Firebase for hosting and real-time database management, making it easy to handle user interactions and backend tasks. This project sharpened my skills in creating scalable, modern web applications.'
  },
  {
    id: 2,
    title: 'VetPrecision',
    image: vet,
    url: 'https://vetprecision.com.br/',
    description: 'VetPrecision is an innovative web application designed to streamline veterinary practices and enhance patient care. Built using React and Tailwind CSS, the platform provides a user-friendly interface for veterinarians to manage patient records, appointments, and treatments efficiently. The use of React allows for a responsive design and a seamless user experience, while Tailwind CSS enables quick and flexible styling. This project has significantly improved my skills in web development and demonstrated the power of modern frameworks in creating efficient solutions.'
  },
  
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-4xl font-bold container-projects text-center mb-8">Meus Projetos</h2>
      <div className="container-projects grid grid-cols-2 gap-8 ">
        {projects.map((project) => (
          <div key={project.id} className="project-card p-4 bg-transparent-200 backdrop-blur-tt text-white rounded-xl shadow-box">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-2xl mt-4">{project.title}</h3>
            <button
              className="mt-4 py-2 px-4 bg-blue-200 text-white rounded-full cursor-none hover:bg-purple-100"
              onClick={() => openModal(project)}
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      {/* Modal do projeto */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
}

export default Projects;
