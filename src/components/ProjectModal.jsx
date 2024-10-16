import React from 'react';

function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 bg-black w-full h-full flex justify-center items-center z-50 bg-black-100 backdrop-blur-lg">
            <div className="bg-black-900 rounded-lg p-10 relative w-[1000px] h-[400px] mx-auto flex gap-10">
                <button
                    className="absolute top-2 right-2 text-black text-2xl hover:scale-150 cursor-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className='w-1/2 '>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded mb-4 hover:scale-110 transition-all delay-75 duration-300"
                    />
                    <div className='w-full h-full cursor-none'>
                        <button className='bg-blue-200 px-5 py-1.5 rounded-full mt-4 text-lg hover:bg-purple-100 hover:cursor-none'><a className='cursor-none' href={project.url} target='_blank'> Visitar </a> </button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-gray-200">{project.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
