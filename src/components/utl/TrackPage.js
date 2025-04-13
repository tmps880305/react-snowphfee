// src/TrackPage.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPage } from './analytics'; // Ensure this import path is correct based on your project structure

const TrackPage = () => {
    const location = useLocation();

    useEffect(() => {
        // Track page view when location changes
        trackPage(location.pathname + location.search);
    }, [location]); // Dependency on location ensures this runs on location change

    return null; // This component does not render anything
};

export default TrackPage;
