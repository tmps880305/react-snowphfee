import React from 'react';

import cntClasses from '../ProjContent.module.css';
import classes from './ProjFutureWork.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjFutureWork = (props) => {
    return (
        <div className={cntClasses.cntContainer}>
            <ProjectSeparator title={props.futureWork.title}/>
            <div className={cntClasses.cntWrap}>
                <div className={classes['ftwrk-cnt']}>
                    <div className={classes.intro}>
                        In the future, research and improvements could be focused on:
                        {props.futureWork.futureworks.map(work => {
                            return (
                                <ul key={work.id}>
                                    <li>
                                        {work.title}
                                        <ol>
                                            {work.items.map(item =>
                                                <li key={item.id}>{item.sentence}</li>
                                            )}
                                        </ol>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjFutureWork;
