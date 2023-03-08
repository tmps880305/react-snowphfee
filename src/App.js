import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
import MainPage from "./components/MainPage/MainPage";
import RootLayout from "./components/Layout/RootLayout";
import CatchCursor from "./components/Skills/Prototyping/CatchCursor";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        // errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: 'skills', element: <Skills/>},
            {path: 'skills/catchcursor', element: <CatchCursor/>},
            {path: 'resume', element: <Resume/>},
            {path: 'about', element: <AboutMe/>},
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
