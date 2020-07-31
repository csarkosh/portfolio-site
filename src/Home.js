import React from "react";
import {PROJECTS_PATH} from "./App";
import "./Home.css";

export default function() {
    React.useEffect(() => {
        document.title = "Home | csarko.sh";
    }, []);
    return (
        <div id="home">
            <div>
                <div>
                    <h1>CYRUS SARKOSH</h1>
                    <h2>cloud developer, web developer, and 3d game building hobbyist</h2>
                </div>
                <div>
                    <img
                        alt="Picture of me"
                        className="me2"
                        src="/me_lake22_cropped.jpeg"
                    />
                </div>
            </div>
            <p>
                Hey, I'm Cyrus. I'm a cloud and web programmer who is passionate about
                building apps and features that bring joy. I am always learning and building new
                things on my own. Currently, I've been studying the basics on 3D graphics
                programming and been putting together a 3D, first-person web game.
            </p>
            <p>
                You can find my open-sourced apps and games on my <a href={PROJECTS_PATH}>projects page</a>, and
                the code on <a href="https://github.com/csarkosh" target="_blank" rel="noopener noreferrer">my Github</a>.
            </p>
        </div>
    )
}