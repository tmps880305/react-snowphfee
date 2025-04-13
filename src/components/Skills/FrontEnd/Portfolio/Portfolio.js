import React, {useLayoutEffect} from 'react';

import classes from './Portfolio.module.css';
import PortLanding from "./PortLanding";
import {getProjectData} from "../../../../data/ProjectDataFactory";
import GenericProjectPage from "../../GenericProjectPage";

const Portfolio = () => {
    const data = getProjectData('portfolio');

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <GenericProjectPage
            data={data}
            classes={classes}
            LandingComponent={PortLanding}
        />
    )
};

export default Portfolio;
