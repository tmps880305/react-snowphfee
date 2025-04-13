import React from 'react';

import cntClasses from '../ProjContent.module.css';
import classes from './ProjApproach.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjApproach = (props) => {
    return (
        <div className={cntClasses.cntContainer}>
            <ProjectSeparator title={props.approach.title}/>
            <div className={cntClasses.cntWrap}>
                <div className={classes['appr-cnt']}>
                    <div className={classes.intro}>
                        {props.approach.text}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjApproach;
