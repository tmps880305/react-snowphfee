import React from 'react';
import {Link} from "react-router-dom";

const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            <h2>Front-end</h2>
            <ul>
                <li>
                    <Link to=''>Portfolio</Link>
                </li>
            </ul>
            <h2>UX design</h2>
            <ul>
                <li>
                    <Link to=''>Zoom Redesign</Link>
                </li>
            </ul>
            <h2>Prototyping</h2>
            <ul>
                <li>
                    <Link to='catchcursor'>CatchCursor</Link>
                </li>
            </ul>
            <h2>Accessibility</h2>
            <ul>
                <li>
                    <Link to=''>Capstone Project</Link>
                </li>
            </ul>
        </div>
    )
};

export default Skills;
