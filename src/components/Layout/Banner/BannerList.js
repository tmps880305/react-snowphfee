import React from 'react';

import classes from './BannerList.module.css';


const BannerList = (props) => {
    return (
        <div className={classes['bList-card']}>
            <div className={classes['bList-title']}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes['bList-item']}>
                {props.items.map(item=>{
                    return <p key={item.id}>{item.title}</p>
                })}
            </div>
        </div>
    )
};

export default BannerList
