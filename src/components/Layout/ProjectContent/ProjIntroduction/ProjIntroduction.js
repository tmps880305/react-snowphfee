import React from 'react';

import classes from './ProjIntroduction.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjIntroduction = (props) => {
    return (
        <>
            <div className={classes['intro-container']}>
            <ProjectSeparator title={props.title}/>
                <div className={classes['intro-wrap']}>
                    <div className={classes.intro}>
                        Hand-free interface control provides accessibility for people with physical impairments and
                        hand-busy
                        situational impairments.
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjIntroduction;
