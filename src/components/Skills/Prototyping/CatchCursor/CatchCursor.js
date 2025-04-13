import React, {useLayoutEffect, useRef} from 'react';
import {getProjectData} from "../../../../data/ProjectDataFactory";

import classes from './CatchCursor.module.css'
import CatchLanding from "./CatchLanding";
import GenericProjectPage from "../../GenericProjectPage";

const CatchCursor = () => {
    const demoRef = useRef(null);
    const data = getProjectData('catchcursor');

    const handleWatchDemo = () => {
        demoRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <GenericProjectPage
            data={data}
            classes={classes}
            LandingComponent={CatchLanding}
            onWatchDemo={handleWatchDemo}
            demoRef={demoRef}
        />
    )
};

export default CatchCursor;
