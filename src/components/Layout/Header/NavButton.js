import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./NavButton.module.css";

const NavButton = () => {

    // const DUMMY_DROP_LISTS = [
    //     {
    //         id: 1,
    //         item: 'Front-end',
    //         link: 'skills'
    //     },
    //     {
    //         id: 2,
    //         item: 'UX design',
    //         link: 'skills'
    //     },
    //     {
    //         id: 3,
    //         item: 'Prototyping',
    //         link: 'skills'
    //     },
    //     {
    //         id: 4,
    //         item: 'Accessibility',
    //         link: 'skills'
    //     }
    // ];

    const DUMMY_DROP_LISTS = [
        {
            id: 1,
            item: 'Catch Cursor',
            link: 'skills/catchcursor'
        },
        {
            id: 2,
            item: 'Pixel Paper',
            link: 'skills'
        },
        {
            id: 3,
            item: 'React - Portfolio',
            link: 'skills'
        },
        // {
        //     id: 4,
        //     item: 'Accessibility',
        //     link: 'skills'
        // }
    ];

    const resumeLink = 'https://drive.google.com/file/d/1WGzdJTH2XVJ2jpC0J0nBBxejS8alp6Md/view?usp=share_link';

    return (
        <div className={classes.navbar}>
            <ul className={classes['nav-ul']}>
                <li className={classes.dropdown}>
                    <div className={classes.dropWrap}>
                        <NavLink to="skills">Skills</NavLink>
                        <ul className={classes['dropdown-content']}>
                            {DUMMY_DROP_LISTS.map(item => {
                                return <li key={item.id}><NavLink to={item.link}
                                                            className={classes.dropItem}>{item.item}</NavLink></li>
                            })}
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink to={resumeLink} target="_blank" rel="noopener noreferrer">Resume</NavLink>
                </li>
                <li>
                    <NavLink to='about'>About</NavLink>
                </li>
            </ul>
        </div>
    )

};

export default NavButton;
