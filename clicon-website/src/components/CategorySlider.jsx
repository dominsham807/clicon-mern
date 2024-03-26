import React from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { categories } from '../data/mockData.js'

import "../styles/category-slider.css"

const CategorySlider = () => {   
    return (
        <div className='shop-category-section'>
            <div className="container">
                <h1 className='category-title'>Shop with Categories</h1>
                <div className='category-slider'>       
                    <Swiper
                        modules={[Navigation]} 
                        onSlideChange={() => console.log('slide change')}
                        spaceBetween={25}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        breakpoints={{
                            1200:{
                                slidesPerView: 5
                            },
                            991:{
                                slidesPerView: 4
                            },
                            768: {
                                slidesPerView: 3
                            },
                            576: {
                                slidesPerView: 2
                            }
                        }}
                        loop
                        autoplay={{
                            stopOnLastSlide: false
                        }}
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <div className="category-card">
                                    <img src={category.image[0]} alt="" className='category-image' />
                                    <h6 className="category-text">{category.name}</h6>
                                </div>
                            </SwiperSlide>
                        ))}

                        <SwiperSlide>
                            <div className="category-card">
                                <img src="https://clicon-html.netlify.app/image/product/product-14.png" alt="" className='category-image' />
                                <h6 className="category-text">TV & Homes</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-card">
                                <img src="https://clicon-html.netlify.app/image/product/product-12.png" alt="" className='category-image' />
                                <h6 className="category-text">Accessories</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-card">
                                <img src="https://clicon-html.netlify.app/image/product/product-9.png" alt="" className='category-image' />
                                <h6 className="category-text">Computer & Laptop</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-card">
                                <img src="https://clicon-html.netlify.app/image/product/product-11.png" alt="" className='category-image' />
                                <h6 className="category-text">Headphones</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-card">
                                <img src="https://clicon-html.netlify.app/image/product/product-10.png" alt="" className='category-image' />
                                <h6 className="category-text">Smartphones</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-card">
                                <img src="https://clicon-html.netlify.app/image/product/product-9.png" alt="" className='category-image' />
                                <h6 className="category-text">Computer & Laptop</h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button className="slick-arrow-carousel button-prev review-swiper-button-prev" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 12H3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <button className="slick-arrow-carousel button-next review-swiper-button-next" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div> 
            </div>
        </div>
    )
}

export default CategorySlider 