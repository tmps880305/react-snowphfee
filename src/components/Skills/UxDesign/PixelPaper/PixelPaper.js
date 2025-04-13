import React, {useLayoutEffect} from 'react';

import classes from './PixelPaper.module.css'
import PixelLanding from "./PixelLanding";
import ProjectInfo from "../../../Layout/ProjectInfo/ProjectInfo";
import ProjectMotion from "../../../Layout/ProjectMotion/ProjectMotion";
import ProjIntroduction from "../../../Layout/ProjectContent/ProjIntroduction/ProjIntroduction";
import ProjProcess from "../../../Layout/ProjectContent/ProjProcess/ProjProcess";
import ProjApproach from "../../../Layout/ProjectContent/ProjApproach/ProjApproach";
import ProjResult from "../../../Layout/ProjectContent/ProjResult/ProjResult";
import ProjSummary from "../../../Layout/ProjectContent/ProjSummary/ProjSummary";
import ProjTools from "../../../Layout/ProjectContent/ProjTools/ProjToolsList";
import ProjFutureWork from "../../../Layout/ProjectContent/ProjFutureWork/ProjFutureWork";
import {getProjectData} from "../../../../data/ProjectDataFactory";
import GenericProjectPage from "../../GenericProjectPage";

const PixelPaper = () => {
    const data = getProjectData('pixelpaper');

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        // <div className={classes}>
        //     <PixelLanding landing={data.landing}/>
        //     <ProjectInfo info={data.motionInfo}/>
        //     <ProjectMotion motion={data.motion}/>
        //     <ProjIntroduction introduction={data.introduction}/>
        //     <ProjProcess timeline={data.timeline}/>
        //     <ProjTools tools={data.toolInfo}/>
        //     <ProjApproach approach={data.approach}/>
        //     <ProjResult projResults={data.projResults}/>
        //     <ProjSummary summary={data.summary}/>
        //     <ProjFutureWork futureWork={data.futureWork}/>
        // </div>
        <GenericProjectPage
            data={data}
            classes={classes}
            LandingComponent={PixelLanding}
        />
    )
};

export default PixelPaper;
