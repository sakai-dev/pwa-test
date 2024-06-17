import React from 'react';
import ImgSlider from "../components/ImgSlider";
import ReactGA from "react-ga4";

export default function ImgViewer() {
    ReactGA.send({hitType: "pageview", page: "/img-viewer"});

    return (
        <div>
            <h1>Img</h1>
            <ImgSlider/>
        </div>
    );
}