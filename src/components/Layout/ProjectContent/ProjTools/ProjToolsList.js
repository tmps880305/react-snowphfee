import React from 'react';

import classes from './ProjToolsList.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

import ProjTools from "./ProjTools";

const DUMMY_TOOL_INFO = [
    {
        id: 'catch-tool-1',
        name:'Python',
        intro: 'Main language to run Edge Impulse client and cursor control module (PyAutoGUI).',
        img: {src: require('../../../../assets/img/icon/tools/python.png'), alt: 'py-img'}
    },
    {
        id: 'catch-tool-2',
        name:'Raspberry Pi',
        intro: 'Act as the server, running Python codes in a Linux environment.',
        img: {src: require('../../../../assets/img/icon/tools/raspberry.png'), alt: 'rasp-img'}
    },
    {
        id: 'catch-tool-3',
        name:'Edge Impulse',
        intro: 'The no-code machine learning system constructed the speech recognition.',
        img: {src: require('../../../../assets/img/icon/tools/edgeimpuls.png'), alt: 'edge-img'}
    },
    {
        id: 'catch-tool-4',
        name:'HTML',
        intro: 'Building web page for CatchCursor demonstration.',
        img: {src: require('../../../../assets/img/icon/tools/html.png'), alt: 'html-img'}
    }
]

const ProjToolsList = (props) => {
    return (
        <>
            <div className={classes['tool-container']}>
                <ProjectSeparator title={props.title}/>
                <div className={classes['tool-wrap']}>
                    {DUMMY_TOOL_INFO.map(tool=>{
                        return (
                            <ProjTools
                                key={tool.id}
                                tool={tool}
                                idPref="catch-tool-"   //idPref is the prefix of id before the number. Ex. 'tool' in 'tool1'
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default ProjToolsList;
