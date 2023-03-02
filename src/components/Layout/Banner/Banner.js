import React from 'react';

import classes from './Banner.module.css';
import BannerList from "./BannerList";


const DUMMY_BANNER_LISTS = [
    {
        id: 1,
        title: '01',
        items: [{id: '1-1', title: 'Web develop'}, {id: '1-2', title: 'Front end'}]
    },
    {
        id: 2,
        title: '02',
        items: [{id: '2-1', title: 'UX design'}]
    },
    {
        id: 3,
        title: '03',
        items: [{id: '3-1', title: 'Prototyping'}, {id: '3-2', title: 'IoT device'}]
    },
    {
        id: 4,
        title: '04',
        items: [{id: '4-1', title: 'Accessibility'}]
    }
];

const Banner = (props) => {

    return (
        <div className={classes['banner-container']}>
            <div className={classes['banner-wrapper']}>
                <div className={classes.slogan}>
                    <h2>Professionals</h2>
                </div>
                <div className={classes['banner-li-container']}>
                    {DUMMY_BANNER_LISTS.map(item => {
                        return <BannerList
                            key={item.id}
                            title={item.title}
                            items={item.items}
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default Banner
