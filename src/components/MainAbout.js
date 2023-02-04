import React from 'react';

import classes from './MainAbout.module.css';
import selfImage from '../assets/img/main_selfie.png'

const MainAbout = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.background}>
                <div className={classes['abt-container']}>
                    <div className={classes['abt-line']}>
                        <span></span>
                    </div>
                    <div className={classes['abt-selfie']}>
                        <img src={selfImage} alt="Selfie" />
                    </div>
                    <div className={classes['abt-info']}>
                        <p>I’m studying HCI at Rochester Institute of Technology. I enjoy develop various interest in my
                            free time.</p>
                    </div>
                    <div className={classes['abt-title']}>
                        <h3>Hi, I’m Jeni</h3>
                        <h3>a web developer</h3>
                    </div>
                    <div className={classes['abt-but']}>
                        <button>About me</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainAbout;
