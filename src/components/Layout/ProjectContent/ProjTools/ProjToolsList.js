import React from 'react';

import classes from './ProjToolsList.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

import ProjTools from "./ProjTools";


const ProjToolsList = (props) => {


    return (
        <div className={classes['tool-container']}>
            <ProjectSeparator title={props.tools.title}/>
            <div className={classes['tool-wrap']}>
                {props.tools.tools.map(tool => {
                    return (
                        <ProjTools
                            key={tool.id}
                            tool={tool}
                            idPref={props.tools.idPref}   //idPref is the prefix of id before the number. Ex. 'tool' in 'tool1'
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default ProjToolsList;
