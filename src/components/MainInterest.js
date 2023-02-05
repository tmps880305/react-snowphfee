import React from 'react';

import classes from './MainInterest.module.css';
import MainInterestList from "./MainInterestList";

const MainInterest = () => {

    const DUMMY_INTEREST_LISTS = [
        {
            id: 1,
            image: 'snowboard'
        },
        {
            id: 1,
            image: 'coffee'
        },
        {
            id: 3,
            image: 'photo'
        }

    ]

    return (
        <div className={classes.wrap}>
            <div className={classes['info-container']}>
                <h2>Interests</h2>
                <div className={classes['info-li-container']}>
                    {DUMMY_INTEREST_LISTS.map(item => {
                        return <MainInterestList key={item.id} image={item.image}/>
                    })}
                </div>
                <div className={classes['info-background']}>
                </div>
            </div>
        </div>
    )
};

export default MainInterest;
