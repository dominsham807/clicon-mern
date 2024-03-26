import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/banner.css"
import { FaArrowRight } from 'react-icons/fa6' 

const Banner = () => {  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='banner-section'>
            <div className="container">
                <div className="row banner-row">
                    <div className="col-xxl-8 banner-slider-area">
                        <div className="banner-area__slider">
                            <Slider {...settings} className='slider-slides'>
                                <div className='single-slider'>
                                    <div className="slider-content"> 
                                        <div className="slider-description">
                                            <h6 className="slider-subtitle">
                                                <span className="line"></span>
                                                THE BEST PLACE TO PLAY
                                            </h6>
                                            <h1 className="slider-title">XBox Consoles</h1>
                                            <p className="slider-text">
                                                Save up to 50% on selecting XBox games. Get 3 months of PC Game Pass for $2 USD.
                                            </p>
                                            <a className="slider-button" href='/shop'>
                                                SHOP NOW 
                                                <FaArrowRight />
                                            </a>
                                        </div> 
                                        <div className="slider-image">
                                            <img src="https://clicon-html.netlify.app/image/banner/x-box.png" alt="" />
                                            <div className="slider-price">
                                                $299
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className='single-slider'>
                                    <div className="slider-content"> 
                                        <div className="slider-description">
                                            <h6 className="slider-subtitle">
                                                <span className="line"></span>
                                                BUY THINGS ONLINE
                                            </h6>
                                            <h1 className="slider-title">XBox Consoles</h1>
                                            <p className="slider-text">
                                                Save up to 50% on selecting XBox games. Get 3 months of PC Game Pass for $2 USD.
                                            </p>
                                            <a className="slider-button" href='/shop'>
                                                SHOP NOW 
                                                <FaArrowRight />
                                            </a>
                                        </div> 
                                        <div className="slider-image">
                                            <img src="https://clicon-html.netlify.app/image/banner/x-box.png" alt="" />
                                            <div className="slider-price">
                                                $299
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="banner-area">
                            <div className="banner-one">
                                <div className="banner-content">
                                    <p>Summer Sales</p>
                                    <h3>New Google<br/> Pixel 6 Pro</h3>
                                </div>
                                <div className="banner-image">
                                    <img src="https://clicon-html.netlify.app/image/add/add-mobile-1.png" alt="" />
                                </div>
                                <span className="badge">
                                    29% OFF
                                </span>
                                <a className="slider-button banner" href='/shop'>
                                    SHOP NOW 
                                    <FaArrowRight />
                                </a>
                            </div>
                            <div className="banner-two">
                                <div className="">
                                    <img src="https://clicon-html.netlify.app/image/add/airpods.png" alt="" />
                                </div>
                                <div className="banner-content__2">
                                    <h3>
                                        Xiaomi 
                                        <br />
                                        FlipBuds Pro
                                    </h3>
                                    <h5>$229 USD</h5>
                                    <a className="slider-button banner second" href='/shop'>
                                        SHOP NOW 
                                        <FaArrowRight />
                                    </a>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner