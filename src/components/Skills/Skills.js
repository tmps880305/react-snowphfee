import React from 'react';
import {Link} from "react-router-dom";

const DUMMY_TYPELIST = [
    {
        id: 't1',
        type: 'front-end',
        projects: [
            {id: 'tf1', name: 'portfolio', title: 'Portfolio'},
            {id: 'tf2', name: 'reactpractice', title: 'React Practice'}
        ]
    },
    {
        id: 't2',
        type: 'UX design',
        projects: [
            {id: 'tu1', name: 'zoom', title: 'Zoom Redesign'},
            {id: 'tu2', name: 'pixelpaper', title: 'Pixel Paper'}
        ]
    },
    {
        id: 't3',
        type: 'Prototyping',
        projects: [
            {id: 'tp1', name: 'catchcursor', title: 'Catchcursor'},
        ]
    },
    {
        id: 't4',
        type: 'Accessibility',
        projects: [
            {id: 'ta1', name: 'capstone', title: 'Capstone Project'},
        ]
    }
];

const Skills = () => {
        return (
            <div>
                <h1>Skills</h1>
                {DUMMY_TYPELIST.map(typelist => (
                    <div key={typelist.id}>
                        <h2>{typelist.type}</h2>
                        <ul>
                            {typelist.projects.map(project =>
                                <li key={project.id}><Link to={project.name}>{project.title}</Link></li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
;

export default Skills;
