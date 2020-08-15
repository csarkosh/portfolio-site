import React from 'react'

export default function({
    previewImg,
    description,
    technologies,
    ghUrl,
    demoUrl,
    inProgress
}) {
    const wrapperClass = inProgress ? 'project in-progress' : 'project'
    return (
        <div className={wrapperClass}>
            {previewImg}
            <p>{description}</p>
            <p>
                <b>Technologies:</b> {technologies}
            </p>
            <p className="project-bottom">
                <b>
                    <a
                        aria-label="Github"
                        href={ghUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </b>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <b>
                    <a
                        aria-label="Readme Viewer"
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </a>
                </b>
            </p>
        </div>
    )
}
