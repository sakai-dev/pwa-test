import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Root from "./pages/Root";
import Top from "./pages/Top"
import ImgViewer from "./pages/ImgViewer";
import IframeViewer from './pages/IframeViewer';
import useOffline from "./hooks/useOffline";
import ReactGA from "react-ga4";

export default function App() {
    const {isOffline} = useOffline()
    ReactGA.initialize("G-52YM9YRQXY");

    return (
        <BrowserRouter basename='/pwa-test'>
            <div className="App">
                <div className="Link">
                    <Link to={"/"}>/</Link>
                    <Link to={"/top"}>/top</Link>
                    <Link to={"/img-viewer"}>/img-viewer</Link>
                    <Link to={"/iframe-viewer"}>/iframe-viewer</Link>
                </div>
                {/* <div className={"NetworkStatus"}>
                    ネットワーク：{isOffline ? "OFFLINE" : "ONLINE"}
                </div> */}
                <Routes>
                    <Route path={"/"} element={<Root/>}/>
                    <Route path={"/top"} element={<Top/>}/>
                    <Route path={"/img-viewer"} element={<ImgViewer/>}/>
                    <Route path={"/iframe-viewer"} element={<IframeViewer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}