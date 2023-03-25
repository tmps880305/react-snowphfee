import React from 'react';

import InfoCard from "./MotionCard";
import classes from './ProjectMotion.module.css';

const ProjectMotion = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.cardWraps}>
                {props.motion.map(motion =>
                    <InfoCard
                        key={motion.id}
                        title={motion.title}
                        item={motion.item}
                    />
                )}
            </div>
        </div>
    )
};

export default ProjectMotion;
