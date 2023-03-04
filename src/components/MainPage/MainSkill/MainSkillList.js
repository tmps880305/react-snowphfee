import React from 'react';

import classes from './MainSkillList.module.css';


const MainSkillList = (props) => {
    return (
        <div className={classes['sList-card']}>
            <div className={classes['sList-title']}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes['sList-item']}>
                {props.items.map(item=>{
                    return <div className={classes.itemText} key={item.id}>{item.title}</div>
                })}
            </div>
        </div>
    )
};

export default MainSkillList
