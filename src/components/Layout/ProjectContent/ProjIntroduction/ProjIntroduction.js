import React from 'react';

import cntClasses from '../ProjContent.module.css';
import classes from './ProjIntroduction.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjIntroduction = (props) => {
    return (
        <div className={cntClasses.cntContainer}>
            <ProjectSeparator title={props.introduction.title}/>
            <div className={cntClasses.cntWrap}>
                <div className={classes.intro}>
                    CatchCursor is a voice user interface developed by us to provide more accessible user interface
                    for people with physical impairments and people under hand-busy situational impairments. Using
                    speech inputs, users can control the cursor on their computer.
                </div>
            </div>
        </div>
    )
};

export default ProjIntroduction;
