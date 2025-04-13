import React, {useLayoutEffect} from 'react';

import classes from './PixelPaper.module.css'
import PixelLanding from "./PixelLanding";
import {getProjectData} from "../../../../data/ProjectDataFactory";
import GenericProjectPage from "../../GenericProjectPage";

const PixelPaper = () => {
    const data = getProjectData('pixelpaper');

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <GenericProjectPage
            data={data}
            classes={classes}
            LandingComponent={PixelLanding}
        />
    )
};

export default PixelPaper;
