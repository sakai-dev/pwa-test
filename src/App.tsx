import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Root from "./pages/Root";
import Top from "./pages/Top"
import Magazine from "./pages/Magazine";
import useOffline from "./hooks/useOffline";

export default function App() {
    const {isOffline} = useOffline()
    return (
        <BrowserRouter basename='/pwa-test'>
            <div className="App">
                <div className="Link">
                    <Link to={"/"}>/</Link>
                    <Link to={"/top"}>/top</Link>
                    <Link to={"/magazine"}>/magazine</Link>
                </div>
                <div className={"NetworkStatus"}>
                    ネットワーク：{isOffline ? "OFFLINE" : "ONLINE"}
                </div>
                <Routes>
                    <Route path={"/"} element={<Root/>}/>
                    <Route path={"/top"} element={<Top/>}/>
                    <Route path={"/magazine"} element={<Magazine/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}