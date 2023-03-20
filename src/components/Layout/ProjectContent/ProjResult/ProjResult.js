import React from 'react';

import classes from './ProjResult.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjResult = (props) => {
    return (
        <>
            <ProjectSeparator title={props.title}/>
            <div>
                <h1>Project Results</h1>
            </div>
        </>
    )
};

export default ProjResult;
