import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ImgSlider from "../components/ImgSlider";
import ReactGA from "react-ga4";

export default function Root() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return (
        <div>
        </div>
    );
}