import React from "react";

export default function() {
    React.useEffect(() => {
        document.title = "Contact | csarko.sh"
    }, []);
    return (
        <h1>Contact</h1>
    );
}
