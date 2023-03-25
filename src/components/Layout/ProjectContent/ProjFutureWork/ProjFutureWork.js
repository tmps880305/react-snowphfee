import React from 'react';

import classes from './ProjFutureWork.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjFutureWork = (props) => {
    return (
        <>
            <ProjectSeparator title={props.futureWork.title}/>
            <div className={classes['rstl-container']}>
                <div className={classes['rstl-wrap']}>
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
        </>
    )
};

export default ProjFutureWork;
