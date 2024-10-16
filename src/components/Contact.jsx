import React from 'react';
import { FaInstagram, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="py-16 ">
            <div className="container mx-auto flex flex-col items-start space-y-4">
                <a href='https://www.instagram.com/toloto.dev/' target="_blank">
                    <div className="flex items-center">
                        <FaInstagram className="text-2xl mr-4" />
                        <span className="text-lg">toloto.dev</span>
                    </div>
                </a>
                <div className="flex items-center">
                    <FaEnvelope className="text-2xl mr-4" />
                    <span className="text-lg">lucastoloto.silva@gmail.com</span>
                </div>
                <div className="flex items-center">
                    <FaGithub className="text-2xl mr-4" />
                    <a href="https://github.com/lucas-tolotosilva" target="_blank" rel="noopener noreferrer" className="text-lg">
                        github.com/lucas-tolotosilva
                    </a>
                </div>
                <div className="flex items-center">
                    <FaLinkedin className="text-2xl mr-4" />
                    <a href="https://www.linkedin.com/in/lucas-tolotosilva/" target="_blank" rel="noopener noreferrer" className="text-lg">
                        linkedin.com/in/lucas-tolotosilva
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
