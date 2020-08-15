import React from 'react'
import "./Projects.scss";
import Tools from "./svg/Tools";
import desktopImg from './img/readme-viewer-desktop.png'
import Project from "./Project";

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
                Some technologies I enjoy working with are React, Node.js, <a aria-label="Terraform" href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">Terraform</a> (infrastructure
                as code tool), and many more
            </p>
            <p>
                If you'd like to look further into the code I write, then check out my <a aria-label="Github" href="https://github.com/csarkosh" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
            <div className="projects-container">
                <Project
                    demoUrl="https://readme-viewer.csarko.sh"
                    ghUrl="https://github.com/csarkosh/readme-viewer"
                    technologies="AWS, CircleCI, Docker, NodeJS, React, and Terraform"
                    description={
                        <React.Fragment>
                            I created <a aria-label="Readme Viewer" href="https://readme-viewer.csarko.sh" target="_blank" rel="noopener noreferrer">readme-viewer.csarko.sh</a> as
                            an exercise to create a 100% serverless web app on AWS with an A+ security rating
                            on <a aria-label="Mozilla Observatory" href="https://observatory.mozilla.org/analyze/readme-viewer.csarko.sh" target="_blank" rel="noopener noreferrer">Mozilla's Observatory tool</a>
                        </React.Fragment>
                    }
                    previewImg={
                        <img
                            alt="Desktop"
                            src={desktopImg}
                            width="100%"
                        />
                    }
                />
                <Project
                    demoUrl="https://webgl.csarko.sh"
                    description="A 3D web game with a first-person camera"
                    ghUrl="https://github.com/csarkosh/3d-web-game"
                    inProgress
                    technologies="AWS, Babylon.js, Docker, Github Actions, React, Terraform, and WebGL"
                    previewImg={
                        <div style={{ textAlign: 'center' }}>
                            <Tools width={200} />
                            <p>In Progress</p>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
