import React, {useLayoutEffect, useRef} from 'react';

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

const DUMMY_CATCHCURSOR_INFO = {
    landing: {
        title: 'Catch Cursor',
        subTitle: 'voice user interface makes you speak to your mouse',
        img: {src: require('../../../../assets/img/projects/catchcursor/catch_main.png'), alt: 'catch-main'}
    },
    introduction: {
        title: 'Introduction',
        intro: 'CatchCursor is a voice user interface developed by us to provide more accessible user interface for people with physical impairments and people under hand-busy situational impairments. Using speech inputs, users can control the cursor on their computer.'
    },
    motionInfo: [
        {title: 'Focus', item: 'Accessibility / UX design / Usability testing'},
        {title: 'Time', item: 'Course Project - 11 weeks'},
        {title: 'Role', item: 'UI develop / UX research / Program develop'},
        {title: 'Tools', item: 'Python / Raspberry Pi / Edge Impulse / HTML'}
    ],
    motion: [
        {
            title: 'Prompt',
            item: 'Interface control can be made hands-free to improve accessibility for a broader range of users.'
        },
        {
            title: 'Problem',
            item: 'Physical controls may not be usable for individuals with permanent or situational impairments.'
        },
        {
            title: 'Solution',
            item: 'Build a voice user interface (VUI) that enables speech-based control of personal computers.'
        }
    ],
    timeline: {
        title: 'Timeline',
        src: require('../../../../assets/img/projects/catchcursor/catch_process.png'),
        alt: 'timeling-img'
    },
    toolInfo: {
        title: 'Tools',
        tools: [
            {
                name: 'Python',
                intro: 'The main language to run Edge Impulse client and cursor control module (PyAutoGUI).',
                img: {src: require('../../../../assets/img/icon/tools/python.png'), alt: 'py-img'}
            },
            {
                name: 'Raspberry Pi',
                intro: 'The Linux-based server, used to receive input from the microphone, send to the speech recognition system, and control the cursor.',
                img: {src: require('../../../../assets/img/icon/tools/raspberry.png'), alt: 'rasp-img'}
            },
            {
                name: 'Edge Impulse',
                intro: 'The no-code machine learning system used to build the customized speech recognition system.',
                img: {src: require('../../../../assets/img/icon/tools/edgeimpuls.png'), alt: 'edge-img'}
            },
            {
                name: 'HTML',
                intro: 'Building web page for PixelPaper demonstration.',
                img: {src: require('../../../../assets/img/icon/tools/html.png'), alt: 'html-img'}
            }
        ]
    },
    approach: {
        title: 'Approach',
        text: 'In this project, I designed and implemented a simple voice-based interface that allows users to control the mouse cursor using only speech. ' +
            'The system leverages the Web Speech API to recognize verbal commands like “move” and “catch,” triggering real-time feedback through cursor motion and animations.\n' +
            '\n' +
            'The interaction was intentionally kept playful but grounded in an accessibility context — to explore how voice interaction can support hands-free computing, especially for users with temporary or permanent impairments.'
    },
    projResults: {
        title: 'Results', subTitle: 'Demonstration', content: {
            title: 'In the following GIF, I demonstrated how to control the cursor with my voice input:',
            items: [
                'When I said \'CatchCursor\', the large grid showed up for me as a reference to make first-step selection.',
                'Next, as I said \'five\', I selected the large grid with #5, and the small grids showed up inside the selected area.',
                'Finally, as I siad \'two\', I selected the small grid with #2, and the cursor moved to the center of box #2 then clicked.'
            ]
        },
        img: {src: require('../../../../assets/img/projects/catchcursor/catch_demo.gif'), alt: 'demo-gif'}
    },
    summary: {
        title: 'Summary',
        summary: {
            title: 'PixelPaper is a Voice User Interface that allows people to control the cursor on the PC.',
            list: [
                'The system is embedded on Raspberry Pi with Python codes, which is portable and light-weighted.',
                'The speech recognition module is built with a no-code service that is more accessible for non-experts.',
                'The grid system is simple and accessible for wide range of users.'
            ]
        }
    },
    futureWork: {
        title: 'Future Works',
        subTitle: 'In the future, research and improvements could be focused on:',
        futureworks: [
            {
                title: 'More accurate destination: Current grid system is still too rough to reach all destinations on the screen.',
                items: [
                    'Precision adjustments could be add to make precise movements with absolute distance.',
                    'Automatic navigation within the selected area might be a solution in further future. Imagine saying \'Logo\', and the cursor find the logo itself and move.'
                ]
            },
            {
                title: 'More accurate speech recognition:',
                items: [
                    'Using better speech recognition module.',
                    'Customize the module for users with their own speech data.'
                ]
            },
            {
                title: 'User experience evaluations and tests:',
                items: [
                    'The system still need to be evaluated with UX design guidelines and principles.',
                    'Usability tests would be required to obtain user feedbacks.'
                ]
            }
        ]
    },
}


const CatchCursor = () => {
    const demoRef = useRef(null);

    const handleWatchDemo = () => {
        demoRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className={classes}>
            <CatchLanding landing={DUMMY_CATCHCURSOR_INFO.landing}/>
            <ProjectInfo info={DUMMY_CATCHCURSOR_INFO.motionInfo}/>
            <ProjectMotion motion={DUMMY_CATCHCURSOR_INFO.motion}/>
            <ProjIntroduction introduction={DUMMY_CATCHCURSOR_INFO.introduction} onWatchDemo={handleWatchDemo}/>
            <ProjProcess timeline={DUMMY_CATCHCURSOR_INFO.timeline}/>
            <ProjTools tools={DUMMY_CATCHCURSOR_INFO.toolInfo}/>
            <ProjApproach approach={DUMMY_CATCHCURSOR_INFO.approach}/>
            <ProjResult projResults={DUMMY_CATCHCURSOR_INFO.projResults} demoRef={demoRef}/>
            <ProjSummary summary={DUMMY_CATCHCURSOR_INFO.summary}/>
            <ProjFutureWork futureWork={DUMMY_CATCHCURSOR_INFO.futureWork}/>
        </div>
    )
};

export default CatchCursor;
