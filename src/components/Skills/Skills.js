import React from 'react';
import {Link} from "react-router-dom";

import cntClasses from '../Layout/ProjectContent/ProjContent.module.css';
import classes from './Skills.module.css';
import ProjectSeparator from "../Layout/ProjectSeparator/ProjectSeparator";

// const DUMMY_TYPELIST = [
//     {
//         id: 't1',
//         type: 'front-end',
//         projects: [
//             {id: 'tf1', name: 'portfolio', title: 'Portfolio'},
//             {id: 'tf2', name: 'reactpractice', title: 'React Practice'}
//         ]
//     },
//     {
//         id: 't2',
//         type: 'UX design',
//         projects: [
//             {id: 'tu1', name: 'zoom', title: 'Zoom Redesign'},
//             {id: 'tu2', name: 'pixelpaper', title: 'Pixel Paper'}
//         ]
//     },
//     {
//         id: 't3',
//         type: 'Prototyping',
//         projects: [
//             {id: 'tp1', name: 'catchcursor', title: 'Catchcursor'},
//         ]
//     },
//     {
//         id: 't4',
//         type: 'Accessibility',
//         projects: [
//             {id: 'ta1', name: 'capstone', title: 'Capstone Project'},
//         ]
//     }
// ];

const DUMMY_PROJECTS = [
    {
        type: 'Prototyping',
        img: {src: require('../../assets/img/projects/catchcursor/catch_main.png'), alt: 'catch-main'},
        title: 'Catch Cursor',
        subTitle: 'voice user interface makes you speak to your mouse',
        link: 'catchcursor'
    },
    {
        type: 'UX Design',
        img: {src: require('../../assets/img/projects/zoom/zoom_main.jpg'), alt: 'zoom-main'},
        title: 'Zoom Redesign',
        subTitle: 'Improve Zoom for online course conditions',
        link: 'zoom'
    },
    {
        type: 'UX Research',
        img: {src: require('../../assets/img/projects/pixelpaper/pixel_main.png'), alt: 'pixel-main'},
        title: 'Pixel Paper',
        subTitle: 'Usability evaluation for a course system prototype',
        link: 'pixelpaper'
    }
];


const Skills = () => {
        return (
            <div className={cntClasses.cntContainer}>
                <div className={classes['skill-wrap']}>
                    <h2>Projects</h2>
                    {DUMMY_PROJECTS.map((project, index) => {
                        return (
                            <div key={index} className={cntClasses.cntWrap}>
                                <ProjectSeparator title={project.type}/>
                                <Link to={project.link} className={classes['skill-card']}>
                                    <div className={classes.imgWrap}>
                                        <img src={project.img.src} alt={project.img.alt}/>
                                    </div>
                                    <div className={classes.text}>
                                        <h3>{project.title}</h3>
                                        <div className={classes.subTitle}>{project.subTitle}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                    {/*{DUMMY_TYPELIST.map(typelist => (*/}
                    {/*    <div key={typelist.id}>*/}
                    {/*        <h2>{typelist.type}</h2>*/}
                    {/*        <ul>*/}
                    {/*            {typelist.projects.map(project =>*/}
                    {/*                <li key={project.id}><Link to={project.name}>{project.title}</Link></li>*/}
                    {/*            )}*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
            </div>
        )
    }
;

export default Skills;
