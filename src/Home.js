import React from "react";
import {PROJECTS_PATH} from "./App";
import "./Home.css";
import Github from "./svg/Github";
import Codepen from "./svg/Codepen";
import Medium from "./svg/Medium";
import Linkedin from "./svg/Linkedin";
import meLake22 from "./img/me_lake22_cropped.jpeg";

export default function() {
    React.useEffect(() => {
        document.title = "Home | csarko.sh";
    }, []);
    return (
        <div id="home">
            <div>
                <div>
                    <h1>CYRUS SARKOSH</h1>
                    <h2 style={{ marginTop: 24 }}>cloud developer, web developer, and 3d game building hobbyist</h2>
                    <div className="icon-links">
                        <a
                            href="https://github.com/csarkosh"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Github />
                        </a>
                        <a
                            href="https://medium.com/@csarkosh"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Medium />
                        </a>
                        <a
                            href="https://codepen.io/csarkosh"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Codepen />
                        </a>
                        <a
                            href="https://www.linkedin.com/public-profile/in/csarkosh"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Linkedin />
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        alt="me hiking"
                        className="me2"
                        src={meLake22}
                    />
                </div>
            </div>
            <p>
                Hey, I'm Cyrus. I'm a cloud and web programmer who is passionate about
                building apps and features that bring joy. I am always learning and
                building new things on my own. Currently, I've been studying the
                basics of 3D graphics programming and been putting together a 3D
                first-person web game.
            </p>
            <p>
                You can find my open-sourced apps and games on my <a href={PROJECTS_PATH}>projects page</a>, and
                the code on <a href="https://github.com/csarkosh" target="_blank" rel="noopener noreferrer">my Github</a>.
            </p>
        </div>
    )
}