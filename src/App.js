import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {initGA} from './components/utl/analytics';

import './App.css';
import MainPage from "./components/MainPage/MainPage";
import RootLayout from "./components/Layout/RootLayout";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import ProjectDetail from "./components/Skills/ProjectDetail";
import TrackPage from './components/utl/TrackPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        // errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: 'skills', element: <Skills/>},
            {path: 'skills/:project', element: <ProjectDetail/>},
            {path: 'about', element: <AboutMe/>},
        ]
    },
]);

function App() {
    React.useEffect(() => {
        initGA();
    }, []);

    return (
        <RouterProvider router={router}>
            <TrackPage/>
        </RouterProvider>
    );

    // return <RouterProvider router={router}/>;
}

export default App;
