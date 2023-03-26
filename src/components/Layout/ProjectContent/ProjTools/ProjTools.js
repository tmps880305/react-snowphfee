import React from 'react';

import classes from './ProjTools.module.css';

const ProjTools = (props) => {
    const listId = "0" + (props.listNum + 1);   // Create list number for tools

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
