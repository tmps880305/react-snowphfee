import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import useWindowDimensions from "../../../hooks/use-window-dimension";

import logoImage from '../../../assets/img/icon/logo.jpg';
import classes from './Header.module.css';
import NavButton from './NavButton';
import HamburgerMenu from "./HamburgerMenu";


const Header = () => {
    const width = useWindowDimensions().width;  // obtain screen view width from custom hook
    const [isMobile, setIsMobile] = useState(false);    // current screen status

    // Listening the width of screen and set as mobile mode when width<600
    useEffect(() => {
        width >= 900 ? setIsMobile(false) : setIsMobile(true);
    }, [width]);

    return (
        <header className={classes.header}>
            <nav className={classes.nav_container}>
                <div className={classes.nav_logo}>
                    <Link to="/"><img src={logoImage} alt="logo"/></Link>
                    <Link to="mailto:jeniwang09@gmail.com">jeniwang09@gmail.com</Link>
                </div>
                {isMobile ? <HamburgerMenu/> : <NavButton/>}
            </nav>
        </header>
    )
};

export default Header;
