import React from 'react';
import {useParams} from "react-router-dom";
import CatchCursor from "./Prototyping/CatchCursor";
import ZoomRedesign from "./UxDesign/ZoomRedesign";

const DUMMY_PROJECT = [
    {id: 'p1',name:'catchcursor', project: <CatchCursor/>},
    {id: 'p2',name:'zoom', project: <ZoomRedesign/>}
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
