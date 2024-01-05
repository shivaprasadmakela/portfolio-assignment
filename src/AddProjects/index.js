// AddProjects.js
import React, { useState } from 'react';
import './index.css';

const AddProjects = ({ addProject }) => {
    const [projectName, setProjectName] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleAddClick = () => {
        // Create a new project object with user input
        const newProject = {
            title: projectName,
            image: 'https://www.shutterstock.com/image-photo/on-light-background-wooden-letters-260nw-1895118145.jpg', // You can use a default image or let the user upload one
            description: projectDescription,
            liveDemoLink: projectLink,
        };

        // Call the addProject function from props to update the state in the parent component
        addProject(newProject);

        // Clear the input fields
        setProjectName('');
        setProjectLink('');
        setProjectDescription('');
    };

    return (
        <>
            <section>
                <h2>Add Projects <div className='style'></div></h2>
                <div className='projectInputCont'>
                    <label>
                        ProjectName <br />
                        <input type='text' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    </label>
                    <label>
                        ProjectLink <br />
                        <input type='text' value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
                    </label>
                    <label>
                        Description <br />
                        <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}></textarea>
                    </label>
                    <button className='addBtn' onClick={handleAddClick}>ADD</button>
                    <svg className='colorss' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,240C384,256,480,288,576,272C672,256,768,192,864,186.7C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

                </div>
            </section>

        </>
    );
};

export default AddProjects;
