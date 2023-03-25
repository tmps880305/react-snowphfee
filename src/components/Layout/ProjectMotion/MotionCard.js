import React from 'react';

import classes from './MotionCard.module.css';

const ProjectInfo = (props) => {
    return (
        <div className={classes.card}>
            <p>{props.title}</p>
            <div className={classes.text}>{props.item}</div>
        </div>
    )
};

export default ProjectInfo;
