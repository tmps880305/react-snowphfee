import React from 'react';

import logoImage from '../../assets/img/logo.jpg';
import classes from './Header.module.css';
import NavButton from './NavButton';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.nav_container}>
                <img src={logoImage} alt="logo"/>
                <a href="mailto:jeniwang09@gmail.com">jeniwang09@gmail.com</a>
                <NavButton/>
            </div>
        </header>
    )
};

export default Header;
