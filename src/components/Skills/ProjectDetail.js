import React from 'react';
import {useParams} from "react-router-dom";
import CatchCursor from "./Prototyping/CatchCursor/CatchCursor";
import ZoomRedesign from "./UxDesign/ZoomRedesign";
import PixelPaper from "./UxDesign/PixelPaper/PixelPaper";

const DUMMY_PROJECT = [
    {id: 'p1',name:'catchcursor', project: <CatchCursor key="catchcursor"/>},
    {id: 'p2',name:'zoom', project: <ZoomRedesign key="zoom"/>},
    {id: 'p3',name:'pixelpaper',project: <PixelPaper key="pixelpaper"/>}
];

const ProjectDetails = (props) => {
    const params = useParams();

    const showProject = DUMMY_PROJECT.map(project => {
        if (params.project === project.name) {
            return project.project;
        }
        else {
            return
        }
    })

    return (
        <>
            {showProject}
        </>
    )
};

export default ProjectDetails;
