import React from 'react';

import InfoCard from "./InfoCard";
import classes from './ProjectInfo.module.css';

const DUMMY_INFO = [
    {
        id: 1,
        title: 'Focus',
        item: 'Accessibility / UX design / Usability testing'
    },
    {
        id: 2,
        title: 'Time',
        item: 'April 2022 - May 2022'
    },
    {
        id: 3,
        title: 'Role',
        item: 'UI develop / UX research / Program develop'
    },
    {
        id: 4,
        title: 'Tool',
        item: 'Figma / Python / Edge Impulse / HTML-Css-JS'
    }
]

const ProjectInfo = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.cardWraps}>
                {DUMMY_INFO.map(info =>
                    <InfoCard
                        key={info.id}
                        title={info.title}
                        item={info.item}
                    />
                )}
            </div>
        </div>
    )
};

export default ProjectInfo;
