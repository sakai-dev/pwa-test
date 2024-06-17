import React from 'react';
import "./Top.scss"
import ContentButton from "../components/ContentButton";
import ContentButton2 from "../components/ContentButton2";
import ReactGA from "react-ga4";

export default function Top() {
    ReactGA.send({hitType: "pageview", page: "/top"});

    return (
        <div>
            <h1>TOP</h1>
            <div className={"content-container"}>
                <ContentButton/>
                <ContentButton2/>
            </div>
        </div>
    );
}