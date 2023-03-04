import React, {Fragment} from "react";

import './App.css';
import Header from '../src/components/Layout/Header';
import MainPage from "./components/MainPage/MainPage";
import MainAbout from "./components/MainPage/MainAbout/MainAbout";
import MainSkill from "./components/MainPage/MainSkill/MainSkill";
import MainInterest from "./components/MainPage/MainInterest/MainInterest";
import Footer from "./components/Layout/Footer";

function App() {
    return (
        <Fragment>
            <Header />
            <MainPage />
            <MainAbout />
            <MainSkill />
            <MainInterest />
            <Footer />
        </Fragment>
    );
}

export default App;
