import React from 'react';

import MainLanding from "./MainLanding/MainLanding";
import MainAbout from "./MainAbout/MainAbout";
import MainSkill from "./MainSkill/MainSkill";
import MainInterest from "./MainInterest/MainInterest";

const MainPage = () => {
    return (
        <>
            <MainLanding/>
            <MainAbout/>
            <MainSkill/>
            <MainInterest/>
        </>
    )
};

export default MainPage;
