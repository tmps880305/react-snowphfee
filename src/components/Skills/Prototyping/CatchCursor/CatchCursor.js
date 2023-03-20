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

const DUMMY_CATCHCURSOR_INFO = {
    motionInfo: [
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
    ],
    timeline: {
        title: 'Timeline',
        src: require('../../../../assets/img/projects/catchcursor/catch_process.png'),
        alt: 'timeling-img'
    },
    toolInfo: {
        title: 'Tools',
        idPref: 'catch-tool-',
        tools: [
            {
                id: 'catch-tool-1',
                name: 'Python',
                intro: 'The main language to run Edge Impulse client and cursor control module (PyAutoGUI).',
                img: {src: require('../../../../assets/img/icon/tools/python.png'), alt: 'py-img'}
            },
            {
                id: 'catch-tool-2',
                name: 'Raspberry Pi',
                intro: 'The Linux-based server, used to receive input from the microphone, send to the speech recognition system, and control the cursor.',
                img: {src: require('../../../../assets/img/icon/tools/raspberry.png'), alt: 'rasp-img'}
            },
            {
                id: 'catch-tool-3',
                name: 'Edge Impulse',
                intro: 'The no-code machine learning system used to build the customized speech recognition system.',
                img: {src: require('../../../../assets/img/icon/tools/edgeimpuls.png'), alt: 'edge-img'}
            },
            {
                id: 'catch-tool-4',
                name: 'HTML',
                intro: 'Building web page for CatchCursor demonstration.',
                img: {src: require('../../../../assets/img/icon/tools/html.png'), alt: 'html-img'}
            }
        ]
    },
    approach: {title:'Approach'},
    projResults:{title:'Results'},
    futureWork: {title:'Future Works'},
    summary: {title:'Summary'}
}


const CatchCursor = () => {
    return (
        <div className={classes}>
            <CatchLanding/>
            <ProjectInfo info={DUMMY_CATCHCURSOR_INFO.motionInfo}/>
            <ProjectMotion/>
            <ProjIntroduction title='Introduction'/>
            <ProjProcess timeline={DUMMY_CATCHCURSOR_INFO.timeline}/>
            <ProjTools tools={DUMMY_CATCHCURSOR_INFO.toolInfo}/>
            <ProjApproach approach={DUMMY_CATCHCURSOR_INFO.approach}/>
            <ProjResult projResults={DUMMY_CATCHCURSOR_INFO.projResults}/>
            <ProjSummary summary={DUMMY_CATCHCURSOR_INFO.summary}/>
        </div>
    )
};

export default CatchCursor;
