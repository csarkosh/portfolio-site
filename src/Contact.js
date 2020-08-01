import React from "react";
import SocialLinks from "./SocialLinks";

export default function() {
    React.useEffect(() => {
        document.title = "Contact | csarko.sh"
    }, []);
    return (
        <div>
            <h1>Hey, there</h1>
            <p>
                Looking to get in touch? I'd love to hear from you. The best way to
                get in touch with me is to send me a digital note at
                &nbsp;<a href="mailto:cyrussarkosh@gmail.com">cyrussarkosh@gmail.com</a>
            </p>
            <SocialLinks />
        </div>
    );
}
