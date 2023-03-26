import React from 'react';

import cntClasses from '../ProjContent.module.css';
import classes from './ProjSummary.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";


const ProjSummary = (props) => {
    return (
        <div className={cntClasses.cntContainer}>
            <ProjectSeparator title={props.summary.title}/>
            <div className={cntClasses.cntWrap}>
                <div className={classes['sum-cnt']}>
                    <div className={classes.intro}>
                        {props.summary.summary.title}
                        <ul>
                            {props.summary.summary.list.map((li,index) => {
                                return (<li key={index}>{li}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjSummary;
