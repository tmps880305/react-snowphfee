import React from 'react';

import classes from "./NavButton.module.css";

const NavButton = () => {

    const DUMMY_DROP_LISTS = [
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
            id: 3,
            item: 'Prototyping',
            link: '/'
        }
    ];

    return (
        <nav className={classes.navbar}>
            <ul className={classes['nav-ul']}>
                <li className={classes.dropdown}>
                    <div className={classes.dropWrap}>
                        <a href="/">Professionals</a>
                        <ul className={classes['dropdown-content']}>
                            {DUMMY_DROP_LISTS.map(item => {
                                return <li key={item.id}><a href={item.link}
                                                            className={classes.dropItem}>{item.item}</a></li>
                            })}
                        </ul>
                    </div>
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
