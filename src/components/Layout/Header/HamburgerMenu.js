import React, {useState} from 'react';

import classes from './HamburgerMenu.module.css'

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <nav className={classes['hamburger-nav']}>
                <div className={classes['hamburger-menu']} onClick={handleMenuClick}>
                    <div className={`${classes.line} ${classes['line-1']} ${menuOpen ? classes.open : ""}`}></div>
                    <div className={`${classes.line} ${classes['line-2']} ${menuOpen ? classes.open : ""}`}></div>
                    <div className={`${classes.line} ${classes['line-3']} ${menuOpen ? classes.open : ""}`}></div>
                </div>
                <div className={`${menuOpen ? classes.open : classes.menu}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HamburgerMenu
