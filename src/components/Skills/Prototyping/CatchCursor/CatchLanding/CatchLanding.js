import React from 'react';

import classes from './CatchLanding.module.css';

const CatchLanding = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <div className={classes.ttlContainer}>
                    <h2 className={classes.mainTitle}>{props.landing.title}</h2>
                    <div className={classes.subTitle}>{props.landing.subTitle}</div>
                </div>
            </div>
            <img className={classes.mainImage} src={props.landing.img.src} alt={props.landing.img.alt}/>
        </div>
    )
};

export default CatchLanding;
