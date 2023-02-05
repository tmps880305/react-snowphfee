import React from 'react';

import classes from './FooterList.module.css';

const FooterList = (props) => {
    const iconImage = require(`../../assets/icon/icon_` + props.name + `.png`);

    return (
        <div className={classes['foot-list']}>
            <img src={iconImage} />
            <a href={props.link} target="_blank">{props.content}</a>
        </div>
    )
};

export default FooterList;
