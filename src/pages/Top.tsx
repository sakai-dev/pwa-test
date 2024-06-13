import React from 'react';
import "./Top.scss"
import ContentButton from "../components/ContentButton";
import ContentButton2 from "../components/ContentButton2";

export default function Top() {
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