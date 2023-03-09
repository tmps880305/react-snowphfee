import React from 'react';

import InfoCard from "./MotionCard";
import classes from './ProjectMotion.module.css';

const DUMMY_MOTION = [
    {
        id: 1,
        title: 'Prompt',
        item: 'Evaluate usability and user experience for our customer – Pixel Paper'
    },
    {
        id: 2,
        title: 'Problem',
        item: 'Is Pixel Paper usable enough for students with/without experience using online course system?'
    },
    {
        id: 3,
        title: 'Solution',
        item: 'By going through the Heuristic Evaluation and usability test, issues were concluded for Pixel Paper to consider improving.'
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
