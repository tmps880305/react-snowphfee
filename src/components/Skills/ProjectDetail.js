import React, {useRef} from 'react';
import {Navigate, useParams} from "react-router-dom";
import CatchLanding from "./Prototyping/CatchCursor/CatchLanding";
import classesCatch from "./Prototyping/CatchCursor/CatchCursor.module.css";
import PixelLanding from "./UxDesign/PixelPaper/PixelLanding";
import classesPixel from "./UxDesign/PixelPaper/PixelPaper.module.css";
import PortLanding from "./FrontEnd/Portfolio/PortLanding";
import classesPortfolio from "./FrontEnd/Portfolio/Portfolio.module.css";

import {getProjectData} from "../../data/ProjectDataFactory";
import GenericProjectPage from "./GenericProjectPage";

const landingComponents = {
    catchcursor: CatchLanding,
    pixelpaper: PixelLanding,
    portfolio: PortLanding
};

const projectClasses = {
    catchcursor: classesCatch,
    pixelpaper: classesPixel,
    portfolio: classesPortfolio
};

const ProjectDetails = () => {
    const {projectId} = useParams();
    const data = getProjectData(projectId);
    const demoRef = useRef(null);

    const isValidProject = projectId in landingComponents;

    if (!isValidProject) {
        return <Navigate to="/not-found" replace/>; // OR return <div>Project not found</div>
    }

    const LandingComponent = landingComponents[projectId];
    const classes = projectClasses[projectId];

    const handleWatchDemo = () => {
        demoRef.current?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <GenericProjectPage
            data={data}
            classes={classes}
            LandingComponent={LandingComponent}
            onWatchDemo={handleWatchDemo}
            demoRef={demoRef}
        />
    )
};

export default ProjectDetails;
