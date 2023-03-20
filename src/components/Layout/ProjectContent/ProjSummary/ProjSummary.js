import React from 'react';

import classes from './ProjSummary.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjSummary = (props) => {
    return (
        <>
            <ProjectSeparator title={props.summary.title}/>
            <div>
                <h1>Project Summary</h1>
            </div>
        </>
    )
};

export default ProjSummary;
