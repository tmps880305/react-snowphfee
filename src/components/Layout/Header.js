import React from 'react';

import logoImage from '../../assets/img/logo.jpg';
import classes from './Header.module.css';
import NavButton from './NavButton';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.nav_container}>
                <div className={classes.nav_logo}>
                    <a href="/"><img src={logoImage} alt="logo"/></a>
                    <a href="mailto:jeniwang09@gmail.com">jeniwang09@gmail.com</a>
                </div>
                <NavButton/>
            </div>
        </header>
    )
};

export default Header;
