import React from 'react';

import InfoCard from "./MotionCard";
import classes from './ProjectMotion.module.css';

const ProjectMotion = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.cardWraps}>
                {props.motion.map((motion,index) =>
                    <InfoCard
                        key={index}
                        title={motion.title}
                        item={motion.item}
                    />
                )}
            </div>
        </div>
    )
};

export default ProjectMotion;
