import React from 'react';

import classes from './ProjProcess.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjProcess = (props) => {
    return (
        <>
            <div className={classes['proc-container']}>
                <ProjectSeparator title={props.timeline.title}/>
                <div className={classes['proc-wrap']}>
                    <img src={props.timeline.src} alt={props.timeline.alt}/>
                </div>
            </div>
        </>
    )
};

export default ProjProcess;
