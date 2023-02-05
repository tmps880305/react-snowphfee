import React from 'react';

import classes from "./NavButton.module.css";

const NavButton = () => {

    const DUMMY_DROP_LISTS=[
        {
            id: 1,
            item: 'Web development',
            link: '/'
        },
        {
            id: 2,
            item: 'UX design',
            link: '/'
        },
        {
            id: 1,
            item: 'Prototyping',
            link: '/'
        }
    ];

    return (
        <nav className={classes.navbar}>
            <ul className={classes['drop-ul']}>
                <li className={classes.dropdown}>
                    <a href="/">Professionals</a>
                    <ul className={classes['dropdown-content']}>
                        {DUMMY_DROP_LISTS.map(item=>{
                            return <li><a key={item.id} href={item.link} className={classes.dropItem}>{item.item}</a></li>
                        })}
                    </ul>
                </li>
                <li>
                    <a href="/">Resume</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
            </ul>
        </nav>
    )

};

export default NavButton;
