import React from 'react';

import classes from './ProjApproach.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjApproach = (props) => {
    return (
        <>
            <div className={classes['appr-container']}>
                <ProjectSeparator title={props.approach.title}/>
                <div className={classes['appr-wrap']}>
                    <h3>To be updated!</h3>
                </div>
            </div>
        </>
    )
};

export default ProjApproach;
