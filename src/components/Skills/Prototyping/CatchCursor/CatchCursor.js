import React from 'react';

import classes from './CatchCursor.module.css'
import CatchLanding from "./CatchLanding/CatchLanding";
import ProjectInfo from "../../../Layout/ProjectInfo/ProjectInfo";
import ProjectMotion from "../../../Layout/ProjectMotion/ProjectMotion";
import ProjIntroduction from "../../../Layout/ProjectContent/ProjIntroduction/ProjIntroduction";
import ProjProcess from "../../../Layout/ProjectContent/ProjProcess/ProjProcess";
import ProjApproach from "../../../Layout/ProjectContent/ProjApproach/ProjApproach";
import ProjResult from "../../../Layout/ProjectContent/ProjResult/ProjResult";
import ProjSummary from "../../../Layout/ProjectContent/ProjSummary/ProjSummary";

// const DUMMY_ProjContent = [
//     {id: 1, component: <ProjIntroduction title='Introduction'/>},
//     {id: 2, component: <ProjProcess title='Process'/>},
//     {id: 3, component: <ProjApproach title='Approach'/>},
//     {id: 4, component: <ProjResult title='Results'/>},
//     {id: 5, component: <ProjSummary title='Summary'/>}
// ]

const CatchCursor = (props) => {
    return (
        <div className={classes}>
            <CatchLanding/>
            <ProjectInfo/>
            <ProjectMotion/>
            <ProjIntroduction title='Introduction'/>
            <ProjProcess title='Process'/>
            <ProjApproach title='Approach'/>
            <ProjResult title='Results'/>
            <ProjSummary title='Summary'/>
        </div>
    )
};

export default CatchCursor;
