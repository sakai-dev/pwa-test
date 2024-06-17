import React from 'react';
import IframeSlider from "../components/IframeSlider";
import ReactGA from "react-ga4";

export default function IframeViewer() {
    ReactGA.send({hitType: "pageview", page: "/iframe-viewer"});

    return (
        <div>
            <h1>Iframe</h1>
            <IframeSlider/>
        </div>
    );
}