import React from 'react';

import classes from './BannerList.module.css';


const BannerList = (props) => {
    return (
        <div className={classes['bList-card']}>
            <div className={classes['bList-title']}>
                <a href>{props.title}</a>
            </div>
            <div className={classes['bList-item']}>
                {props.items.map(item=>{
                    return <a href>{item}</a>
                })}
            </div>
        </div>
    )
};

export default BannerList
