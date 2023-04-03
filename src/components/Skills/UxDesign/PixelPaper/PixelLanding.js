import React from 'react';

import skClasses from '../../SkillsLanding.module.css';

const PixelLanding = (props) => {
    return (
        <div className={skClasses.container}>
            <div className={`${skClasses.title} ${skClasses.titleLeft}`}>
                <div className={skClasses.ttlContainer}>
                    <h2 className={skClasses.mainTitle}>{props.landing.title}</h2>
                    <div className={skClasses.subTitle}>{props.landing.subTitle}</div>
                </div>
            </div>
            <img className={skClasses.mainImage} src={props.landing.img.src} alt={props.landing.img.alt}/>
        </div>
    )
};

export default PixelLanding;
