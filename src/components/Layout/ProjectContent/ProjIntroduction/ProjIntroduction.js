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
                    {props.introduction.intro}
                </div>
                {props.onWatchDemo && <a onClick={props.onWatchDemo} className={classes.watchDemoBtn}>
                    ↓ Watch Demo ↓
                </a>}
            </div>

        </div>
    )
};

export default ProjIntroduction;
