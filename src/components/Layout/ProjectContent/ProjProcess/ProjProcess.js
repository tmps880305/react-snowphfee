import React from 'react';

import classes from './ProjProcess.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";
import processImg from "../../../../assets/img/projects/catchcursor/catch_process.png"

const ProjProcess = (props) => {
    return (
        <>
            <div className={classes['proc-container']}>
                <ProjectSeparator title={props.title}/>
                <div className={classes['proc-wrap']}>
                    <img src={processImg} alt="process-img"/>
                </div>
            </div>
        </>
    )
};

export default ProjProcess;
