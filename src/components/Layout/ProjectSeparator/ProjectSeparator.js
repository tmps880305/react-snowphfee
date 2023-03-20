import React from 'react';

import classes from './ProjectSeparator.module.css';

const ProjectSeparator = (props) => {
    return (
        <div className={classes['sep-container']}>
            <div className={classes['sep-wrap']}>
                <span className={classes.line}></span>
                <p>{props.title}</p>
                <span className={classes.line}></span>
            </div>
        </div>
    )
};

export default ProjectSeparator;
