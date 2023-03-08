import React from 'react';
import {Link} from "react-router-dom";

import logoImage from '../../../assets/img/icon/logo.jpg';
import classes from './Header.module.css';
import NavButton from './NavButton';


const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav_container}>
                <div className={classes.nav_logo}>
                    <Link to="/"><img src={logoImage} alt="logo"/></Link>
                    <Link to="mailto:jeniwang09@gmail.com">jeniwang09@gmail.com</Link>
                </div>
                <NavButton/>
            </nav>
        </header>
    )
};

export default Header;
