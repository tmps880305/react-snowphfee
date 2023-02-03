import React, {Fragment} from 'react';

import logoImage from '../../assets/img/logo.jpg';
import classes from './Header.module.css';
import NavButton from './NavButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.nav_container}>
                    <img src={logoImage} alt="logo"/>
                    <a href="/">jw1109@rit.edu</a>
                    <NavButton/>
                </div>
            </header>
        </Fragment>
    )
};

export default Header;
