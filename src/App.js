import React, {Fragment} from "react";

import './App.css';
import Header from '../src/components/Layout/Header';
import MainPage from "./components/MainPage";
import MainAbout from "./components/MainAbout";

function App() {
    return (
        <Fragment>
            <Header />
            <MainPage />
            <MainAbout />
        </Fragment>
    );
}

export default App;
