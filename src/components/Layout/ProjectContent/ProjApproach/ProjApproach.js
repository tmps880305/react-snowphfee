import React from 'react';

import classes from './ProjApproach.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjApproach = (props) => {
    return (
        <>
            <ProjectSeparator title={props.title}/>
            <div>
                <h1>Project Approach</h1>
            </div>
        </>
    )
};

export default ProjApproach;
