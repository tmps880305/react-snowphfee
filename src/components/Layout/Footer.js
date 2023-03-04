import React from 'react';

import classes from './Footer.module.css';
import FooterList from "./FooterList";

const Footer = () => {
    const DUMMY_FOOTER_LISTS = [
        {
            id: 1,
            name: 'Email',
            content: 'Email',
            link: 'mailto:jeniwang09@gmail.com'
        },
        {
            id: 2,
            name: 'LinkedIn',
            content: 'Jen- I',
            link: 'https://www.linkedin.com/in/jen-i-wang-8899a7221/'
        }
    ]

    return (
        <div className={classes['foot-wrap']}>
            <div className={classes['foot-container']}>
                <h3>Contact me</h3>
                <div className={classes['foot-li-wrap']}>
                    {DUMMY_FOOTER_LISTS.map(item => {
                        return <FooterList key={item.id} name={item.name} content={item.content} link={item.link}/>
                    })}
                </div>

            </div>
        </div>
    )
};

export default Footer;
