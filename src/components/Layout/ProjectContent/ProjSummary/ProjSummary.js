import React from 'react';

import classes from './ProjSummary.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";


const ProjSummary = (props) => {
    return (
        <>
            <ProjectSeparator title={props.summary.title}/>
            <div className={classes['rstl-container']}>
                <div className={classes['rstl-wrap']}>
                    <div className={classes.intro}>
                        {props.summary.summary.title}
                        <ul>
                            {props.summary.summary.list.map(li => {
                                return (<li key={li.id}>{li.sentence}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjSummary;
