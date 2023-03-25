import React from 'react';

import cntClasses from '../ProjContent.module.css'
import classes from './ProjProcess.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjProcess = (props) => {
    return (
        <>
            <div className={cntClasses.cntContainer}>
                <ProjectSeparator title={props.timeline.title}/>
                <div className={cntClasses.cntWrap}>
                    <img className={classes['proc-img']} src={props.timeline.src} alt={props.timeline.alt}/>
                </div>
            </div>
        </>
    )
};

export default ProjProcess;
