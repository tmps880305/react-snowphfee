// src/analytics.js
import ReactGA from 'react-ga4';

// const TRACKING_ID = "GTM-K44K9JSF"; // Replace this with your actual GA tracking ID
const TRACKING_ID = "G-SW4496BYCB";
// const GTAG_ID = "G-SW4496BYCB";

const initGA = () => {
    ReactGA.initialize(TRACKING_ID);
    // Gtag.initialize(GTAG_ID);
};

const trackPage = (page) => {
    ReactGA.pageview(page);
};

export {initGA, trackPage};
