import React from 'react';

import classes from './MainInterestList.module.css';

const MainInterestList = (props) => {
    const interestImage = require(`../../../assets/img/main/main_interest_` + props.image + `.png`);

    return (
        <div className={classes['interest-container']}>
            <img src={interestImage} alt="interest_img"/>
        </div>
    )
};

export default MainInterestList;
