import React from 'react'
import './index.css'
import Projects from '../Projects/index';

function Main() {
    const handleLinkedInClick = () => {
        // Replace 'your_linkedin_profile_url' with the actual URL of your LinkedIn profile
        window.location.href = 'https://www.linkedin.com/in/shiva-prasad-m-37a64b218/';
    };

    return (
        <>
            <section id='about'>
                <div className='color-bg'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="609" viewBox="0 0 720 629" fill="none">

                        <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435" />

                        <clipPath id="customClipPath">
                            <path d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" />
                        </clipPath>
                        <image href="https://raw.githubusercontent.com/shivaprasadmakela/my-portfolio/master/public/profile-2.png" x="150" y="90" width="550" height="550" clip-path="url(#customClipPath)" />
                    </svg>

                </div>
                <nav>
                    <h1 className='title' onClick={() => (window.location.href = './#about')}>Shiva Prasad M</h1>
                    <ul>
                        <li><a href="#about" onClick={() => (window.location.href = './#about')}>About</a></li>
                        <li><a href="#projects" onClick={() => (window.location.href = './#projects')}>Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className='main-container'>
                    <div className='details-contaiener'>
                        <p className='a'>UI/UX Designer</p>
                        <h1 className='title2'>Hello,  my name is <br /> Shiva Prasad</h1>
                        <p className='paradis'>Motivated B.Tech graduate with expertise <br /> in both front-end and back-end web development.<br /> </p>
                        <button className='projectBtn' onClick={() => (window.location.href = './#projects')}>Projects</button>
                        <button className='linkdinBtn' onClick={handleLinkedInClick}>Linkdin</button>
                    </div>

                </div>
            </section>
            <Projects />
        </>
    );
}

export default Main;
