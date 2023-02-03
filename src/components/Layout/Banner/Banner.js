import React from 'react';

import classes from './Banner.module.css';
import BannerList from "./BannerList";


const DUMMY_BANLISTS = [
    {
        id: 1,
        title: '01',
        items: ['Web develop', 'Front end']
    },
    {
        id: 2,
        title: '02',
        items: ['UX design']
    },
    {
        id: 3,
        title: '03',
        items: ['Prototyping', 'IoT device']
    }
];

const Banner = (props) => {

    return (
        <div className={classes['banner-container']}>
            <div className={classes.slogan}>
                <a href>Professionals</a>
            </div>
            <div className={classes['banner-li-container']}>
                {DUMMY_BANLISTS.map(item => {
                    return <BannerList
                        key={item.id}
                        title={item.title}
                        items={item.items}
                    />
                })}
            </div>
        </div>
    )
};

export default Banner
