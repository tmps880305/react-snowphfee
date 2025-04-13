import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./NavButton.module.css";

const NavButton = (props) => {

    // const DUMMY_DROP_LISTS = [
    //     {
    //         item: 'Front-end',
    //         link: 'skills'
    //     },
    //     {
    //         item: 'UX design',
    //         link: 'skills'
    //     },
    //     {
    //         item: 'Prototyping',
    //         link: 'skills'
    //     },
    //     {
    //         item: 'Accessibility',
    //         link: 'skills'
    //     }
    // ];

    const DUMMY_DROP_LISTS = [
        {item: 'Catch Cursor', link: 'skills/catchcursor'},
        {item: 'Pixel Paper', link: 'skills/pixelpaper'},
        {item: 'React - Portfolio', link: 'skills/portfolio'},
    ];


    const resumeLink = 'https://snowphfee.com/resume.pdf';


    const butClickHandler = () => {
        props.onNavButClicked();
    }

    return (
        <div className={classes.navbar}>
            <ul className={classes['nav-ul']}>
                <li className={classes.dropdown}>
                    <div className={classes.dropWrap}>
                        <NavLink to="skills" onClick={butClickHandler}>Projects</NavLink>
                        <ul className={classes['dropdown-content']}>
                            {DUMMY_DROP_LISTS.map((item, index) => {
                                return <li key={index}>
                                    <NavLink to={item.link} className={classes.dropItem}>{item.item}</NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink to={resumeLink} target="_blank" rel="noopener noreferrer">Resume</NavLink>
                </li>
                <li>
                    <NavLink to='about' onClick={butClickHandler}>About</NavLink>
                </li>
            </ul>
        </div>
    )

};

export default NavButton;
