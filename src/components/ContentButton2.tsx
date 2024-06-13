import React from "react";
import "./ContentButton.scss"
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function ContentButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/iframe-viewer");
    }

    return (
        <div className={"content-button"}>
            <div className={"app-icon"} onClick={handleClick}></div>
            Iframe
        </div>
    )
}