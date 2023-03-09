import React from 'react';

import classes from './InfoCard.module.css';

const ProjectInfo = (props) => {
    return (
        <div className={classes.card}>
            <h3>{props.title}</h3>
            <p>{props.item}</p>
        </div>
    )
};

export default ProjectInfo;
