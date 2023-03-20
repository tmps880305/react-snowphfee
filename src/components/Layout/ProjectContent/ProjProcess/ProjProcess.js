import React from 'react';

import classes from './ProjProcess.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjProcess = (props) => {
    return (
        <>
            <ProjectSeparator title={props.title}/>
            <div>
                <h1>Project Process</h1>
            </div>
        </>
    )
};

export default ProjProcess;
