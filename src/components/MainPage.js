import React from 'react';

import classes from './MainPage.module.css';
import mainImage from '../assets/img/main_image.jpg'

const MainPage = (props) => {
    return (
        <div className={classes.container}>
            <img src={mainImage} className={classes.mainImage} alt="main-background" />
        </div>
    )
};

export default MainPage;
