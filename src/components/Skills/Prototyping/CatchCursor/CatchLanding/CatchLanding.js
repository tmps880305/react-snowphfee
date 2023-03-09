import React from 'react';

import classes from './CatchLanding.module.css';
import mainImage from '../../../../../assets/img/projects/catchcursor/catch_main.png'

const CatchLanding = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <div className={classes.ttlContainer}>
                    <h2 className={classes.mainTitle}>Catch Cursor</h2>
                    <div className={classes.subTitle}>voice user interface makes you speak to your mouse</div>
                </div>
            </div>
            <img src={mainImage} className={classes.mainImage} alt="main-background"/>
        </div>
    )
};

export default CatchLanding;
