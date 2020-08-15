import React from "react";
import {PROJECTS_PATH} from "./App";
import "./Home.css";
import meLake22Webp from "./img/me_lake22_cropped.webp";
import meLake22Png from "./img/me_lake22_cropped.png";
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
                    <picture>
                        <source srcSet={meLake22Png} type="image/png" />
                        <img
                            alt="me hiking"
                            className="me2"
                            src={meLake22Webp}
                        />
                    </picture>
                </div>
            </div>
            <p>
                Hey, I'm Cyrus. I'm a cloud and web programmer who is passionate about
                building apps and features that bring joy. I am always learning and
                building new things on my own. Currently, I've been studying the
                basics of 3D graphics programming and been putting together a 3D
                first-person web game
            </p>
            <p>
                You can find my open-sourced apps and games on my <Link to={PROJECTS_PATH}>projects page</Link>, and
                the code on <a aria-label="Github" href="https://github.com/csarkosh" target="_blank" rel="noopener noreferrer">my Github</a>
            </p>
        </div>
    )
}