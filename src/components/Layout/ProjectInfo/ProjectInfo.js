import React from 'react';

import InfoCard from "./InfoCard";
import classes from './ProjectInfo.module.css';

const ProjectInfo = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.cardWraps}>
                {props.info.map((info, index) =>
                    <InfoCard
                        key={index}
                        title={info.title}
                        item={info.item}
                    />
                )}
            </div>
        </div>
    )
};

export default ProjectInfo;
