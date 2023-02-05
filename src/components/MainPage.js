import React from 'react';

import classes from './MainPage.module.css';
import mainImage from '../assets/img/main_image.png'
import mainSlogan from '../assets/img/main_slogan.png'

const MainPage = (props) => {
    return (
        <div className={classes.container}>
            <img src={mainSlogan} className={classes.mainSlogan} alt="main-slogan" />
            <img src={mainImage} className={classes.mainImage} alt="main-background" />
        </div>
    )
};

export default MainPage;
