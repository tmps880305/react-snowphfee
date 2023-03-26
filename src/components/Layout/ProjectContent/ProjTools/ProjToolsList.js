import React from 'react';

import cntClasses from '../ProjContent.module.css';
import classes from './ProjToolsList.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

import ProjTools from "./ProjTools";


const ProjToolsList = (props) => {


    return (
        <div className={cntClasses.cntContainer}>
            <ProjectSeparator title={props.tools.title}/>
            <div className={cntClasses.cntWrap}>
                <div className={classes['tool-wrap']}>
                    {props.tools.tools.map((tool,index) => {
                        return (
                            <ProjTools
                                key={index}
                                listNum={index}
                                tool={tool}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default ProjToolsList;
