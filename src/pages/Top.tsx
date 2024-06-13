import React from 'react';
import "./Top.scss"
import ContentButton from "../components/ContentButton";

export default function Top() {
    return (
        <div>
            <h1>TOP</h1>
            <div className={"content-container"}>
                <ContentButton/>
            </div>
        </div>
    );
}