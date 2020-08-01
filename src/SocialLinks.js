import React from "react";
import "./SocialLinks.css";
import Github from "./svg/Github";
import Medium from "./svg/Medium";
import Codepen from "./svg/Codepen";
import Linkedin from "./svg/Linkedin";

export default function () {
    return (
        <div id="social-links">
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
    )
}
