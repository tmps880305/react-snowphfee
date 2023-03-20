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
import ProjTools from "../../../Layout/ProjectContent/ProjTools/ProjToolsList";

const DUMMY_CATCHCURSOR_INFO = [
    {
        id: 1,
        title: 'Focus',
        item: 'Accessibility / UX design / Usability testing'
    },
    {
        id: 2,
        title: 'Time',
        item: 'Course Project - 11 weeks'
    },
    {
        id: 3,
        title: 'Role',
        item: 'UI develop / UX research / Program develop'
    },
    {
        id: 4,
        title: 'Tools',
        item: 'Python / Raspberry Pi / Edge Impulse / HTML'
    }
]

const CatchCursor = (props) => {
    return (
        <div className={classes}>
            <CatchLanding/>
            <ProjectInfo info={DUMMY_CATCHCURSOR_INFO}/>
            <ProjectMotion/>
            <ProjIntroduction title='Introduction'/>
            <ProjProcess title='Timeline'/>
            <ProjTools title='Tools'/>
            <ProjApproach title='Approach'/>
            <ProjResult title='Results'/>
            <ProjSummary title='Summary'/>
        </div>
    )
};

export default CatchCursor;
