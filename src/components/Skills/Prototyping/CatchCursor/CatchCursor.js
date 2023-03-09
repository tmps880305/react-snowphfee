import React from 'react';

import CatchLanding from "./CatchLanding/CatchLanding";
import ProjectInfo from "../../../Layout/ProjectInfo/ProjectInfo";
import ProjectMotion from "../../../Layout/ProjectMotion/ProjectMotion";

const CatchCursor = (props) => {
    return (
        <>
            <CatchLanding/>
            <ProjectInfo/>
            <ProjectMotion/>
        </>
    )
};

export default CatchCursor;
