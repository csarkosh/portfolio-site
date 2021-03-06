import React from "react";
import "./SocialLinks.scss";
import Github from "./svg/Github";
import Medium from "./svg/Medium";
import Codepen from "./svg/Codepen";
import Linkedin from "./svg/Linkedin";

export default function () {
    return (
        <div className="social-links">
            <a
                aria-label="Github"
                href="https://github.com/csarkosh"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Github />
            </a>
            <a
                aria-label="Medium"
                href="https://medium.com/@csarkosh"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Medium />
            </a>
            <a
                aria-label="Codepen"
                href="https://codepen.io/csarkosh"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Codepen />
            </a>
            <a
                aria-label="Linkedin"
                href="https://www.linkedin.com/public-profile/in/csarkosh"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Linkedin />
            </a>
        </div>
    )
}
