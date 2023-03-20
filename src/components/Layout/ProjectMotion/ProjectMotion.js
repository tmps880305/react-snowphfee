import React from 'react';

import InfoCard from "./MotionCard";
import classes from './ProjectMotion.module.css';

const DUMMY_MOTION = [
    {
        id: 1,
        title: 'Prompt',
        item: 'Interface control could become hand-free to be more accessible for people'
    },
    {
        id: 2,
        title: 'Problem',
        item: 'Physical interface control might not be usable for people with (situational) impairments.'
    },
    {
        id: 3,
        title: 'Solution',
        item: 'Construct voice user interface (VOI) to provide speech-input control for personal computers.'
    }
]

const ProjectMotion = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.cardWraps}>
                {DUMMY_MOTION.map(motion =>
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
