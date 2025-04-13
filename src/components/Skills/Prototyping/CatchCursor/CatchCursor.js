import React, {useLayoutEffect, useRef} from 'react';
import {getProjectData} from "../../../../data/ProjectDataFactory";

import classes from './CatchCursor.module.css'
import CatchLanding from "./CatchLanding";
import ProjectInfo from "../../../Layout/ProjectInfo/ProjectInfo";
import ProjectMotion from "../../../Layout/ProjectMotion/ProjectMotion";
import ProjIntroduction from "../../../Layout/ProjectContent/ProjIntroduction/ProjIntroduction";
import ProjProcess from "../../../Layout/ProjectContent/ProjProcess/ProjProcess";
import ProjApproach from "../../../Layout/ProjectContent/ProjApproach/ProjApproach";
import ProjResult from "../../../Layout/ProjectContent/ProjResult/ProjResult";
import ProjSummary from "../../../Layout/ProjectContent/ProjSummary/ProjSummary";
import ProjTools from "../../../Layout/ProjectContent/ProjTools/ProjToolsList";
import ProjFutureWork from "../../../Layout/ProjectContent/ProjFutureWork/ProjFutureWork";

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
        <div className={classes}>
            <CatchLanding landing={data.landing}/>
            <ProjectInfo info={data.motionInfo}/>
            <ProjectMotion motion={data.motion}/>
            <ProjIntroduction introduction={data.introduction} onWatchDemo={handleWatchDemo}/>
            <ProjProcess timeline={data.timeline}/>
            <ProjTools tools={data.toolInfo}/>
            <ProjApproach approach={data.approach}/>
            <ProjResult projResults={data.projResults} demoRef={demoRef}/>
            <ProjSummary summary={data.summary}/>
            <ProjFutureWork futureWork={data.futureWork}/>
        </div>
    )
};

export default CatchCursor;
