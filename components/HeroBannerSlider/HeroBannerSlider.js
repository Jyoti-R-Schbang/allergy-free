import React from 'react';
import Image from 'next/image';
import styles from "./herobanner.module.css"
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

let data = [
    {
        title: "Outdoor Allergies.",
        subTitle: "Take the first step towards understanding and managing ",
        buttonLink: "#",
        image: "/images/banner_1.png",
        id: '1'
    },
    // {
    //     title: "Outdoor Allergies.",
    //     subTitle: "Take the first step towards understanding and managing ",
    //     buttonLink: "#",
    //     image: "/images/banner_2.png",
    //     id: '1'
    // },
    // {
    //     title: "Outdoor Allergies.",
    //     subTitle: "Take the first step towards understanding and managing ",
    //     buttonLink: "#",
    //     image: "/images/banner_3.png",
    //     id: '1'
    // },
]

const HeroBannerSlider = () => {

    if (!data) return

    return (
        <>
            {
                data && data.length > 0 &&
                    <div className='relative'>
                        <Swiper
                            slidesPerView={1}
                            modules={[Autoplay, EffectFade, Pagination]}
                            pagination={{ clickable: false, el: "#home-swiper-custom-pagination" }}
                            autoplay={{ delay: 2000 }}
                            effect="fade"
                        >
                            {
                                data.length > 0 &&
                                data.map((item, index) =>
                                    <SwiperSlide key={index}>
                                        <div className={styles.heroBanner}>
                                            <div className='relative h-full'>
                                                <Image src={item.image} fill alt={item.title} />
                                            </div>
                                            <div className={styles.contentContainer}>
                                                <div className={styles.contentWrapper}>
                                                    <div className={styles.subTitle}>{item.subTitle}</div>
                                                    <div className={styles.title}>{item.title}</div>
                                                    <div className={styles.button}>
                                                        <Link href={item.buttonLink || "#"}>
                                                            <button>know More</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div id='home-swiper-custom-pagination' />
                    </div>
                    // :
                    // <div></div>
            }
        </>
    )
}

export default HeroBannerSlider