import React from "react";
import {Swiper, SwiperSlide,} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "./MagazineViewer.scss";

const slides: string[] = [
    " https://http.cat/100",
    " https://http.cat/101",
    " https://http.cat/102",
    " https://http.cat/103",
    " https://http.cat/200",
    " https://http.cat/201",
    " https://http.cat/202",
    " https://http.cat/203",
    " https://http.cat/204",
    " https://http.cat/205",
    " https://http.cat/206",
    " https://http.cat/207",
    " https://http.cat/208",
];

export default function MagazineViewer() {
    return (
        <Swiper
            pagination={{type: 'fraction'}}
            modules={[Pagination]}
        >
            {slides.map((src: string, index: number) => (
                <SwiperSlide key={index}>
                    <img src={src} alt="slide"/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}