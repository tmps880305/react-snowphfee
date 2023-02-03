import React, {Fragment} from "react";

import './App.css';
import Header from '../src/components/Layout/Header';
import MainPage from "./components/MainPage";
import MainAbout from "./components/MainAbout";
import Banner from "./components/Layout/Banner/Banner";

function App() {
    return (
        <Fragment>
            <Header />
            <MainPage />
            <MainAbout />
            <Banner />
        </Fragment>
    );
}

export default App;
