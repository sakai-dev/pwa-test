import React from "react";
import "./ContentButton.scss"
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function ContentButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/magazine");
    }

    return (
        <div className={"content-button"}>
            <div className={"app-icon"} onClick={handleClick}></div>
            マガジン
        </div>
    )
}