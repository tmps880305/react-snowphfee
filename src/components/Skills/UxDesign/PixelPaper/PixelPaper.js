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

const DUMMY_CATCHCURSOR_INFO = {
    landing: {
        title: 'Pixel Paper',
        subTitle: 'Making learning platforms more usable through research-driven UX design',
        img: {src: require('../../../../assets/img/projects/pixelpaper/pixel_main.png'), alt: 'pixel-main'}
    },
    introduction: {
        title: 'Introduction',
        intro: 'Pixel Paper is a prototype of an educational system that provides online learning resources. It features a digital library, course dashboard, personal storage locker, and built-in messaging.\n' +
            '\n' +
            'As part of a 13-week usability project, I designed and conducted a study to evaluate how users interact with four key features: Collect, Upload, Create, and Contact. The goal was to identify usability issues and recommend actionable design improvements.'
    },
    motionInfo: [
        {
            title: 'Focus',
            item: 'UX researcher / Usability testing'
        },
        {
            title: 'Time',
            item: 'Course Project - 13 weeks'
        },
        {
            title: 'Role',
            item: 'UX research'
        },
        {
            title: 'Tools',
            item: 'Figma'
        }
    ],
    motion: [
        {
            title: 'Prompt',
            item: 'Evaluate and improve the usability of an educational platform prototype - Pixel Paper.'
        },
        {
            title: 'Problem',
            item: 'Pixel Paper lacks consistent language and clear interaction feedback.'
        },
        {
            title: 'Solution',
            item: 'Apply Heuristic evaluation and usability testing to guide improvements.'
        }
    ],
    timeline: {
        title: 'Timeline',
        src: require('../../../../assets/img/projects/pixelpaper/pixel_process.png'),
        alt: 'timeling-img'
    },
    toolInfo: {
        title: 'Tools',
        tools: [
            {
                name: 'Figma',
                intro: 'Figma was used to create prototypes of changes.',
                img: {src: require('../../../../assets/img/icon/tools/figma.png'), alt: 'figma-img'}
            }
        ]
    },
    approach: {
        title: 'Approach',
        text: 'We conducted a between-subjects usability test with two participant groups: undergraduate and graduate students. Each participant completed four realistic tasks using the Pixel Paper prototype:\n' +
            '\t•\tFinding and saving books\n' +
            '\t•\tUploading assignments\n' +
            '\t•\tCreating private documents\n' +
            '\t•\tMessaging professors\n' +
            '\n' +
            'Participants completed pre- and post-test surveys, followed a think-aloud protocol, and were observed during task execution. Feedback was gathered through both quantitative metrics (Likert scale ratings, Net Promoter Score) and qualitative observations (task behavior, emotional reactions, feature requests).'
    },
    projResults: {
        title: 'Results', subTitle: '', content: {
            title: 'We identified five key usability issues through task analysis and user feedback:',
            items: [
                'Lack of feedback\n' +
                '\t•\tUsers were unsure if actions like saving a book were successful.\n' +
                '\t•\t🛠️ Recommendation: Add visual confirmation or labels for actions like “add” or “save.”',
                'Confusing architecture\n' +
                '\t•\tUsers couldn’t locate features like assignment upload from the dashboard.\n' +
                '\t•\t🛠️ Recommendation: Create clearer navigation paths for core tasks.',
                'Unclear terminology\n' +
                '\t•\tThe term “New” instead of “Add” confused users during document creation.\n' +
                '\t•\t🛠️ Recommendation: Use consistent, user-centered language.',
                'Hidden feedback during document creation\n' +
                '\t•\tParticipants weren’t sure if documents were saved.\n' +
                '\t•\t🛠️ Recommendation: Show a save confirmation or include a save button.',
                'Disconnected messaging function\n' +
                '\t•\tUsers tried to find professor contacts in course pages instead of the message panel.\n' +
                '\t•\t🛠️ Recommendation: Integrate professor info across both course and messaging modules.'
            ]
        },
        img: {src: require('../../../../assets/img/projects/pixelpaper/pixel_image.jpg'), alt: 'img-gif'}
    },
    summary: {
        title: 'Summary',
        summary: {
            title: 'This project helped me apply usability testing methods in a real-world scenario with real users. By designing task-based tests, running moderated sessions, and analyzing user behavior, I learned how to translate usability principles into practical design feedback.',
            list: []
        }
    },
    futureWork: {
        title: 'Future Works',
        subTitle: 'In the future, research and improvements could be focused on:',
        futureworks: [
            {
                title: 'Redesign UI for mobile platforms (iOS usability testing planned)',
                items: []
            },
            {
                title: 'Test in real-world conditions (e.g., walking, standing)',
                items: []
            },
            {
                title: 'Add accessibility checks and dark mode support',
                items: []
            },
            {
                title: 'Improve dashboard, message UX, and system feedback across platforms',
                items: []
            }

        ]
    },
}


const PixelPaper = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className={classes}>
            <PixelLanding landing={DUMMY_CATCHCURSOR_INFO.landing}/>
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

export default PixelPaper;
