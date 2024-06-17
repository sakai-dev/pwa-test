import React from 'react';
import ImgSlider from "../components/ImgSlider";
import ReactGA from "react-ga4";

export default function Root() {
    ReactGA.send({hitType: "pageview", page: "/"});

    return (
        <div>
        </div>
    );
}