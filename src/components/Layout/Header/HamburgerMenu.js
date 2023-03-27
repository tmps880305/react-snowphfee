import React, {useState} from 'react';

import classes from './HamburgerMenu.module.css'
import NavButton from "./NavButton";

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <nav className={`${classes['hamburger-nav']} ${menuOpen ? classes.open : ''}`}>
                <div className={classes['hamburger-wrap']} onClick={handleMenuClick}>
                    <div className={classes['hamburger-menu']}>
                        <div className={`${classes.line} ${classes['line-1']}`}></div>
                        <div className={`${classes.line} ${classes['line-2']}`}></div>
                        <div className={`${classes.line} ${classes['line-3']}`}></div>
                    </div>
                </div>
                <div className={`${classes.menu}`}>
                    <NavButton/>
                </div>
            </nav>
        </div>
    )
}

export default HamburgerMenu
