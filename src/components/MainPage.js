import React from 'react';

import classes from './MainPage.module.css';
import mainImage from '../assets/img/main_image.png'

const MainPage = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.slg}>
                <h2 className={classes.slg}>Design meets development - bridging the gap with multi-disciplinary
                    experience</h2>
            </div>
            <img src={mainImage} className={classes.mainImage} alt="main-background"/>
        </div>
    )
};

export default MainPage;
