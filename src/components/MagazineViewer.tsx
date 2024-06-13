import React from "react";
import {Swiper, SwiperSlide,} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "./MagazineViewer.scss";

const slides: string[] = [
    "http://192.168.11.32/page01.png",
    "http://192.168.11.32/page02.png",
    "http://192.168.11.32/page03.png",
    "http://192.168.11.32/page04.png",
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