import React from 'react'

export default function() {
    React.useEffect(() => {
        document.title = "Projects | csarko.sh";
    }, []);
    return (
        <h1>Projects</h1>
    );
}