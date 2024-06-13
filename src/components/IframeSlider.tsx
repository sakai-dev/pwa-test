import React from "react";
import {Swiper, SwiperSlide,} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "./Slider.scss";

const slides: string[] = [
    "https://http.cat/status/100.html",
    "https://http.cat/status/101.html",
    "https://http.cat/status/102.html",
    "https://http.cat/status/103.html",
    "https://http.cat/status/200.html",
    "https://http.cat/status/201.html",
    "https://http.cat/status/202.html",
    "https://http.cat/status/203.html",
    "https://http.cat/status/204.html",
    "https://http.cat/status/205.html",
    "https://http.cat/status/206.html",
    "https://http.cat/status/207.html",
    "https://http.cat/status/208.html",
];

export default function IframeSlider() {
    return (
        <Swiper
            pagination={{type: 'fraction'}}
            modules={[Pagination]}
        >
            {slides.map((src: string, index: number) => (
                <SwiperSlide key={index}>
                    <iframe src={src} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}