import React, { useState } from 'react';
import './index.css';
import AddProjects from '../AddProjects/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
 // Update import for Instagram icon



const Projects = () => {

    const handleinstaInClick = () => {
        // Replace 'your_linkedin_profile_url' with the actual URL of your LinkedIn profile
        window.location.href = 'https://www.instagram.com/';
    };

    const handleLinkedInClick = () => {
        // Replace 'your_linkedin_profile_url' with the actual URL of your LinkedIn profile
        window.location.href = 'https://www.linkedin.com/in/shiva-prasad-m-37a64b218/';
    };

    const [projectData, setProjectData] = useState([
        // Existing project data
        {
            title: 'Rock Paper',
            image: 'https://raw.githubusercontent.com/shivaprasadmakela/my-portfolio/master/public/assets/rock-paper.jpg',
            description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            liveDemoLink: 'https://rockpaperscshi.ccbp.tech/',
            alt: "profile"
        },
        {
            title: 'Jobby App',
            image: 'https://raw.githubusercontent.com/shivaprasadmakela/my-portfolio/master/public/assets/job-search.png',
            description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            liveDemoLink: 'https://jobbyappshv.ccbp.tech/login',
            alt: "profile"
        },
        {
            title: 'Todo List',
            image: 'https://raw.githubusercontent.com/shivaprasadmakela/my-portfolio/master/public/assets/to-do-list.png',
            description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            liveDemoLink: 'https://todoshivapra.ccbp.tech/',
            alt: "profile"
        },
    ]);

    const addProject = (newProject) => {
        setProjectData((prevProjects) => [...prevProjects, newProject]);
    };

    return (
        <>
         <AddProjects addProject={addProject} />
            <section id="projects">
               
                <h2>Projects <div className='style'></div></h2>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {projectData.map((project, index) => (
                            <div className="details-container color-container" key={index}>

                                <div className='cont'>
                                    <h2 className="experience-sub-title project-title">{project.title}</h2>
                                    <p className='discription'>{project.description}</p>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onClick={() => (window.location.href = project.liveDemoLink)}
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                                <div className="article-container">
                                    <img

                                        src={project.image}

                                        alt={project.alt}
                                        className="project-img"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            <div className='iconsContainer' id='contact'>
           
            <div>
            <FontAwesomeIcon className='icons' icon={faInstagram} alt="Instagram Icon" onClick={handleinstaInClick}/>
            <FontAwesomeIcon className='icons' icon={faLinkedin} alt="link Icon" onClick={handleLinkedInClick}/>
            <FontAwesomeIcon className='icons' icon={faEnvelope} alt="mail Icon" />
            </div>
            
            <p className='copyrights'>Copyright © 2024.  All rights reserved</p>
            </div>
            
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,240C384,256,480,288,576,272C672,256,768,192,864,186.7C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    );
};

export default Projects;