import React from 'react';

import classes from './ProjTools.module.css';

const ProjTools = (props) => {
    // Find the number of list item from id of tool
    const toolId = props.tool.id;
    const num = toolId.search(props.idPref) + props.idPref.length; // idPref is the prefix of id before the number
    const listId = "0" + toolId[num];   // add 0 to make listId start with 0. Ex. 01,02,03

    return (
        <div className={classes['tool-card']}>
            <div className={classes['tool-card-title']}>
                <h3>{listId}</h3>
                <div className={classes['tool-title']}>{props.tool.name}</div>
                <img src={props.tool.img.src} alt={props.tool.img.alt}/>
            </div>
            <div className={classes['tool-info']}>
                {props.tool.intro}
            </div>
        </div>
    )
};

export default ProjTools;
