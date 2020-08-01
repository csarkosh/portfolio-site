import React from 'react'
import "./Projects.css";
import Tools from "./svg/Tools";

export default function() {
    React.useEffect(() => {
        document.title = "Projects | csarko.sh";
    }, []);
    return (
        <div id="projects">
            <h1>Projects</h1>
            <p>
                I'm a software engineer who loves working on projects that bring joy to people whether that's
                making the day-to-day easier through the cloud and web apps I build professionally, or helping
                people decompress through the computer games I build as an enthusiast
            </p>
            <p>
                Some technologies I enjoy working with are React, Node.js, <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">Terraform</a> (infrastructure
                as code tool), and many more.
            </p>
            <p>
                If you'd like to look further into the code I write, then check out my <a href="https://github.com/csarkosh" target="_blank" rel="noopener noreferrer">Github</a>.
            </p>
            <div className="projects-container">
                <div className="project">
                    <img src="/readme-viewer-desktop.png" width={292}  alt="Desktop" />
                    <img src="/readme-viewer-mobile.png" width={92}  alt="Mobile" />
                    <p>
                        I created <a href="https://readme-viewer.csarko.sh" target="_blank" rel="noopener noreferrer">readme-viewer.csarko.sh</a> as
                        an exercise to create a 100% serverless web app on AWS with an A+ security rating
                        on <a href="https://observatory.mozilla.org/analyze/readme-viewer.csarko.sh" target="_blank" rel="noopener noreferrer">Mozilla's Observatory tool</a>
                    </p>
                    <p>
                        <b>Technologies:</b> AWS, CircleCI, Docker, NodeJS, React, and Terraform
                    </p>
                    <p className="project-bottom">
                        <b><a href="https://github.com/csarkosh/readme-viewer" target="_blank" rel="noopener noreferrer">Github</a></b>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <b><a href="https://readme-viewer.csarko.sh" target="_blank" rel="noopener noreferrer">Website</a></b>
                    </p>
                </div>
                <div className="project in-progress">
                    <div>
                        <div>
                            <Tools width={200} />
                            <p>In Progress</p>
                        </div>
                        <p>
                            A 3D web game with a first-person camera
                        </p>
                        <p>
                            <b>Technologies:</b> AWS, Babylon.js, Docker, Github Actions, React, and Terraform
                        </p>
                    </div>
                    <p>
                        <b><a href="https://github.com/csarkosh/3d-web-game" target="_blank" rel="noopener noreferrer">Github</a></b>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <b><a href="https://webgl.csarko.sh" target="_blank" rel="noopener noreferrer">Website</a></b>
                    </p>
                </div>
            </div>
        </div>
    );
}
