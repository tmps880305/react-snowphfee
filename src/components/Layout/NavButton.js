import React, {Fragment} from 'react';

import classes from "./NavButton.module.css";

const HeaderCartButton = (props) => {

    return (
        <Fragment>
            <nav className={classes.navbar}>
                <ul className={classes['drop-ul']}>
                    <li className={classes.dropdown}>
                        <a href="/">Professionals</a>
                        <ul className={classes['dropdown-content']}>
                            <li><a href="/">Web development</a></li>
                            <li><a href="/">UX design</a></li>
                            <li><a href="/">Prototyping</a></li>
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
        </Fragment>
    )

};

export default HeaderCartButton;