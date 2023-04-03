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
        subTitle: 'Usability evaluation for a course system prototype',
        img: {src: require('../../../../assets/img/projects/pixelpaper/pixel_main.png'), alt: 'pixel-main'}
    },
    introduction: {
        title: 'Introduction',
        intro: 'Pixel Paper is an education system prototype which provides online learning resources, including functions like: Library, Dashboard, Bookshelf, Locker, Messages, and Help.'
    },
    motionInfo: [
        {
            title: 'Focus',
            item: 'UX research / Usability testing'
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
            item: 'Evaluate usability and user experience for our customer – Pixel Paper.'
        },
        {
            title: 'Problem',
            item: 'Pixel Paper could become more usable by speaking the user language and increasing its consistency.'
        },
        {
            title: 'Solution',
            item: 'Prorvide suggestions after Heuristic Evaluation and usability tests.'
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
    approach: {title: 'Approach'},
    projResults: {
        title: 'Results', subTitle: '', content: {
            title: '',
            items: []
        },
        img: {src: require('../../../../assets/img/projects/pixelpaper/pixel_image.jpg'), alt: 'img-gif'}
    },
    summary: {
        title: 'Summary',
        summary: {
            title: '',
            list: []
        }
    },
    futureWork: {
        title: 'Future Works',
        futureworks: [
            {
                title: '',
                items: []
            },
            {
                title: '',
                items: []
            },
            {
                title: '',
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
