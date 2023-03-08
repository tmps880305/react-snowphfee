import React from 'react';

import classes from './MainLanding.module.css';
import mainImage from '../../../assets/img/main/main_image.png'

const MainLanding = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.slg}>
                <div className={classes.slg}>Design meets development - bridging the gap with multi-disciplinary
                    experience</div>
            </div>
            <img src={mainImage} className={classes.mainImage} alt="main-background"/>
        </div>
    )
};

export default MainLanding;
