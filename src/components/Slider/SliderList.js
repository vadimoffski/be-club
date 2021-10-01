import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Parallax,
    Autoplay,
    Pagination,
    Mousewheel,
    A11y,
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import imagebg from './images/home-pic1.jpg'

import img_slide_2 from './images/img-2.jpg'

import dj1 from './images/dj-1.jpg'
import dj2 from './images/dj-2.jpg'

import './Slider.css'

SwiperCore.use([Parallax, Autoplay, Pagination, Mousewheel, A11y])

const Slider = () => {
    return (
        <>
            <Swiper
                a11y={true}
                speed={3000}
                parallax={true}
                loop={true}
                touchRatio={0.2}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                watchSlidesProgress={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="page__main-block main-block">
                        <div className="main-block__container _container">
                            <div className="main-block__body">
                                <h1
                                    className="main-block__title"
                                    data-swiper-parallax-x="-500"
                                >
                                    Make Clubbing
                                </h1>
                                <div
                                    className="main-block__text"
                                    data-swiper-parallax-x="-300"
                                >
                                    Great Again!
                                </div>
                                <div
                                    className="main-block__buttons"
                                    data-swiper-parallax-opacity="0"
                                    data-swiper-parallax-scale="0"
                                >
                                    <a href="/" className="main-block__button">
                                        More about us
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="main-block__image">
                            <img src={imagebg} alt="home-pic1" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page__main-block main-block">
                        <div className="main-block__container _container">
                            <div className="main-block__slide2">
                                <h1
                                    className="main-block__title-slide-2"
                                    data-swiper-parallax-y="100"
                                >
                                    Our DJ's:
                                </h1>
                                <div
                                    className="main-block__our-dj our-dj"
                                    data-swiper-parallax-opacity="0"
                                    data-swiper-parallax-scale="0"
                                >
                                    <div className="our-dj__item">
                                        <div className="dj-item__desc">
                                            <h2>DJ Alex</h2>
                                        </div>
                                        <img src={dj1} alt="dj" />
                                    </div>
                                    <div className="our-dj__item">
                                        <div className="dj-item__desc">
                                            <h2>DJ SALOMON</h2>
                                        </div>
                                        <img src={dj2} alt="dj" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-block__image">
                            <img src={img_slide_2} alt="img1" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider
