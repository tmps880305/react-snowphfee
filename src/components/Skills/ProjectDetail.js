import React from 'react';
import {useParams} from "react-router-dom";
import CatchCursor from "./Prototyping/CatchCursor/CatchCursor";
import ZoomRedesign from "./UxDesign/ZoomRedesign/ZoomRedesign";
import PixelPaper from "./UxDesign/PixelPaper/PixelPaper";
import Portfolio from "./FrontEnd/Portfolio/Portfolio";

const DUMMY_PROJECT = [
    {id: 'p1',name:'catchcursor', project: <CatchCursor key="catchcursor"/>},
    {id: 'p2',name:'zoom', project: <ZoomRedesign key="zoom"/>},
    {id: 'p3',name:'pixelpaper',project: <PixelPaper key="pixelpaper"/>},
    {id: 'p4',name:'portfolio',project: <Portfolio key="portfolio"/>}
];

const ProjectDetails = () => {
    const params = useParams();

    const showProject = DUMMY_PROJECT.map(project => {
        if (params.project === project.name) {
            return project.project;
        }
        else {
            return null
        }
    })

    return (
        <>
            {showProject}
        </>
    )
};

export default ProjectDetails;
