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
import ProjFutureWork from "../../../Layout/ProjectContent/ProjFutureWork/ProjFutureWork";

const DUMMY_CATCHCURSOR_INFO = {
    landing: {
        title: 'Catch Cursor',
        subTitle: 'voice user interface makes you speak to your mouse',
        img: {src: require('../../../../assets/img/projects/catchcursor/catch_main.png'), alt: 'catch-main'}
    },
    introduction: {title: 'Introduction'},
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
    motion: [
        {
            id: 1,
            title: 'Prompt',
            item: 'Interface control could become hand-free to be more accessible for people'
        },
        {
            id: 2,
            title: 'Problem',
            item: 'Physical interface control might not be usable for people with (situational) impairments.'
        },
        {
            id: 3,
            title: 'Solution',
            item: 'Construct voice user interface (VOI) to provide speech-input control for personal computers.'
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
    approach: {title: 'Approach'},
    projResults: {title: 'Results'},
    summary: {title: 'Summary'},
    futureWork: {
        title: 'Future Works',
        futureworks: [
            {
                id: 'f1',
                title: 'More accurate destination: Current grid system is still too rough to reach all destinations on the screen.',
                items: [
                    {
                        id: '-1',
                        sentence: 'Precision adjustments could be add to make precise movements with absolute distance.'
                    },
                    {
                        id: '-2',
                        sentence: 'Automatic navigation within the selected area might be a solution in further future. Imagine saying \'Logo\', and the cursor find the logo itself and move.'
                    }
                ]
            },
            {
                id: 'f2',
                title: 'More accurate speech recognition:',
                items: [
                    {
                        id: '-1',
                        sentence: 'Using better speech recognition module.'
                    },
                    {
                        id: '-2',
                        sentence: 'Customize the module for users with their own speech data.'
                    }
                ]
            }
        ]
    },
}


const CatchCursor = () => {
    return (
        <div className={classes}>
            <CatchLanding landing={DUMMY_CATCHCURSOR_INFO.landing}/>
            <ProjectInfo info={DUMMY_CATCHCURSOR_INFO.motionInfo}/>
            <ProjectMotion motion={DUMMY_CATCHCURSOR_INFO.motion}/>
            <ProjIntroduction introduction={DUMMY_CATCHCURSOR_INFO.introduction}/>
            <ProjProcess timeline={DUMMY_CATCHCURSOR_INFO.timeline}/>
            <ProjTools tools={DUMMY_CATCHCURSOR_INFO.toolInfo}/>
            <ProjApproach approach={DUMMY_CATCHCURSOR_INFO.approach}/>
            <ProjResult projResults={DUMMY_CATCHCURSOR_INFO.projResults}/>
            <ProjSummary summary={DUMMY_CATCHCURSOR_INFO.summary}/>
            <ProjFutureWork futureWork={DUMMY_CATCHCURSOR_INFO.futureWork}/>
        </div>
    )
};

export default CatchCursor;
