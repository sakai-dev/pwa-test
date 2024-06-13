import React from "react";
import {Swiper, SwiperSlide,} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "./MagazineViewer.scss";

const slides: string[] = [
    " https://http.cat/100.png",
    " https://http.cat/101.png",
    " https://http.cat/102.png",
    " https://http.cat/103.png",
    " https://http.cat/200.png",
    " https://http.cat/201.png",
    " https://http.cat/202.png",
    " https://http.cat/203.png",
    " https://http.cat/204.png",
    " https://http.cat/205.png",
    " https://http.cat/206.png",
    " https://http.cat/207.png",
    " https://http.cat/208.png",
    " https://http.cat/404.png",
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