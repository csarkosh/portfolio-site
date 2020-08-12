import React from "react";
import {PROJECTS_PATH} from "./App";
import "./Home.css";
import meLake22 from "./img/me_lake22_cropped.webp";
import SocialLinks from "./SocialLinks";
import {NavLink as Link} from "react-router-dom";

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
                    <SocialLinks />
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
                Hey, I'm Cyrus. I'm a professional cloud and web developer, and a 
                3D game-building hobbyiest. I am always learning and building new 
                things on my own. Currently, I've been studying the basics of 3D 
                graphics programming and been putting together a 3D first-person 
                web game
            </p>
            <p>
                You can find my open-sourced apps and games on my <Link to={PROJECTS_PATH}>projects page</Link>, and
                the code on <a aria-label="Github" href="https://github.com/csarkosh" target="_blank" rel="noopener noreferrer">my Github</a>
            </p>
        </div>
    )
}
