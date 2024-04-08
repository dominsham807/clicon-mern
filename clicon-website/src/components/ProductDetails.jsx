import React, { useEffect, useRef, useState } from 'react'  
import { FaFacebook, FaAngleDown, FaStar, FaInstagram, FaPinterest } from 'react-icons/fa'
import { BsCopy } from "react-icons/bs"
import { CiHeart } from 'react-icons/ci'

import "../styles/product-details.css"

const ProductDetails = ({selectedProduct}) => {
    const { name, sku, image, brand, price, discountedPrice, availability, ratings, category, promotion, discountPercentage } = selectedProduct 
    
    const [showSizeBox, setShowSizeBox] = useState(false)
    const [showMemoryBox, setShowMemoryBox] = useState(false)
    const [showStorageBox, setShowStorageBox] = useState(false) 

    const sizes = ['XL', 'Large', 'Medium', 'Small']
    const memories = ['16GB', '32GB', '64GB']
    const storages = ['1TV SSD', '2TV SSD', '4TV SSD']

    const [color, setColor] = useState("")
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [selectedMemory, setSelectedMemory] = useState(memories[0])
    const [selectedStorage, setSelectedStorage] = useState(storages[0])  
 
    console.log(color)
    console.log(selectedSize)

    const [productQty, setProductQty] = useState(1)

    const sizeRef = useRef()
    const memoryRef = useRef()
    const storageRef = useRef()

    const sizeHandler = (e) => {
        if(!sizeRef.current.contains(e.target) && e.target !== sizeRef.current){
            setShowSizeBox(false)
        }
    }

    const memoryHandler = (e) => {
        if(!memoryRef.current.contains(e.target) && e.target !== memoryRef.current){
            setShowMemoryBox(false)
        }
    }

    const storageHandler = (e) => {
        if(!storageRef.current.contains(e.target) && e.target !== storageRef.current){
            setShowStorageBox(false)
        }
    }

    const handleIncreaseQty = () => { 
        if(productQty < 10){
            setProductQty(quantity => quantity += 1)
        }
    }
    const handleDecreaseQty = () => {
        if(productQty > 1){
            setProductQty(quantity => quantity -= 1)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setProductQty(e.target.value)
    }

    useEffect(() => {  
        document.addEventListener("click", sizeHandler)  
        document.addEventListener("click", memoryHandler)  
        document.addEventListener("click", storageHandler)  

        return() => { 
            document.removeEventListener("click", sizeHandler) 
            document.removeEventListener("click", memoryHandler) 
            document.removeEventListener("click", storageHandler) 
        }
    }, [])

    return ( 
        <div className="row">
            <div className="col-xxl-6 ">
                <div className="slider-area">
                    <div className="single-big-image">
                        <img src={image} alt="" draggable={false} />
                    </div> 
                    {/* <div className="slider-images">
                        <Swiper  
                            modules={[Navigation]}  
                            spaceBetween={25}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.image-swiper-button-next',
                                prevEl: '.image-swiper-button-prev',
                            }}
                            breakpoints={{ 
                                991:{
                                    slidesPerView: 5
                                },
                                768: {
                                    slidesPerView: 6
                                },
                                0: {
                                    slidesPerView: 6
                                } 
                            }}
                            loop
                            autoplay={{
                                stopOnLastSlide: false
                            }}
                        >
                            {imageSlidesShow.map((slide, index) => (
                                <SwiperSlide className={`single-slide-image ${selectedImage === slide ? "active" : ""}`} onClick={() => setSelectedImage(slide)} key={index}>
                                    <img src={slide} alt="Single Slide" />
                                </SwiperSlide>
                            ))} 
                        </Swiper>
                        <button className="slick-arrow-carousel image-carousel button-prev image-swiper-button-prev" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.25 12H3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button className="slick-arrow-carousel image-carousel button-next image-swiper-button-next" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>  */}
                </div>
            </div>
            <div className="col-xxl-6 ">
                <div className="modal-slider-content">
                    <div className="ratings">
                        <div className="rating-stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="ratings-info">
                            <div className="rating-text">
                                Star Ratings: {ratings} / 5
                            </div>
                            <div className="user-feedback-text">
                                (21,671 User feedback)
                            </div>
                        </div>
                    
                    </div>
                    <div className="slider-content-title">
                        {name}
                    </div>
                    <div className="slider-content-fact">
                        <ul>
                            <li>Sku: <span>{sku}</span></li>      
                            <li>Availability: 
                                {availability ? (
                                    <span className='stock'> In Stock</span>
                                ) : (
                                    <span className='stock unavailable'> Out of Stock</span>
                                )}
                                {/* <span className='stock'>In Stock</span> */}
                            </li>      
                            <li>Brand: <span>{brand}</span></li>     
                            <li>Category: <span>{category?.charAt(0).toUpperCase() + category?.slice(1)}</span></li>     
                        </ul>
                    </div>
                    <div className="slider-content-price">
                        <div className="price">
                            {discountedPrice ? (
                                <>
                                <span>${price}</span>
                                <del>${discountedPrice}</del></>
                            ) : (
                                <>
                                <span>${price}</span>
                                </>
                            )} 
                        </div>
                        {discountPercentage ? (
                            <div className="offer-badge">
                                {discountPercentage}% OFF 
                            </div>
                        ) : (
                            <></>
                        )} 
                    </div>
                    <div className="slider-content-form">
                        <div className="slider-content-form-color">
                            <h6 className="form-title">Color</h6>
                            <div className="choose-color">
                                <div className="form-check">
                                    <input type="radio" className='form-check-input gray' onChange={() => setColor("gray")} name='flexRadioDefault' checked={color === "gray"} />  
                                </div>
                                <div className="form-check">
                                    <input type="radio" className='form-check-input silver' onChange={() => setColor("silver")} name='flexRadioDefault' checked={color === "silver"} /> 
                                </div>
                            </div>
                        </div>
                        <div className="slider-content-form-size">
                            <h6 className="form-title">Size</h6>
                            <div className="selectbox" ref={sizeRef}>
                                <div className="size-select" onClick={() => setShowSizeBox(!showSizeBox)}>
                                    <div className="current-selected">{selectedSize}</div>
                                    <FaAngleDown className={`arrow ${showSizeBox ? "active" : ""}`} />
                                </div>
                                <ul className={`slider-select-list ${showSizeBox ? "active" : ""}`}>
                                    {sizes.map((size, index) => (
                                        <li 
                                            key={index}
                                            className={`option ${selectedSize === size ? "selected" : ""}`}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedSize(size)
                                                setShowSizeBox(false)
                                            }}
                                        >
                                            {size}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="slider-content-form-memory">
                            <h6 className="form-title">Memory</h6>
                            <div className="selectbox" ref={memoryRef}>
                                <div className="memory-select" onClick={() => setShowMemoryBox(!showMemoryBox)}>
                                    <div className="current-selected">{selectedMemory}</div>
                                    <FaAngleDown className={`arrow ${showMemoryBox ? "active" : ""}`} />
                                </div>
                                <ul className={`slider-select-list ${showMemoryBox ? "active" : ""}`}>
                                    {memories.map((memory, index) => (
                                        <li 
                                            key={index}
                                            className={`option ${selectedMemory === memory ? "selected" : ""}`}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedMemory(memory)
                                                setShowMemoryBox(false)
                                            }}
                                        >
                                            {memory}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="slider-content-form-storage">
                            <h6 className="form-title">Storage</h6>
                            <div className="selectbox" ref={storageRef}>
                                <div className="storage-select" onClick={() => setShowStorageBox(!showStorageBox)}>
                                    <div className="current-selected">{selectedStorage}</div>
                                    <FaAngleDown className={`arrow ${showStorageBox ? "active" : ""}`} />
                                </div>
                                <ul className={`slider-select-list ${showStorageBox ? "active" : ""}`}>
                                    {storages.map((storage, index) => (
                                        <li 
                                            key={index}
                                            className={`option ${selectedStorage === storage ? "selected" : ""}`}
                                            onClick={() => {
                                                setSelectedStorage(storage)
                                                setShowStorageBox(false)
                                            }}
                                        >
                                            {storage}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="slider-buttons-group">
                        <div className="product-quantity-count">
                            <button className="button-count quantity-decrease" onClick={() => handleDecreaseQty()}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <input type="number" className='number-product' value={productQty} onChange={handleChange} min={1} max={10} />
                            <button className="button-count quantity-increase" onClick={() => handleIncreaseQty()}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M8 2.5V13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-add-button">
                            <a href="#" className="btn btn-primary">
                                Add To Cart
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75 20.25C8.75 20.6642 8.41421 21 8 21C7.58579 21 7.25 20.6642 7.25 20.25C7.25 19.8358 7.58579 19.5 8 19.5C8.41421 19.5 8.75 19.8358 8.75 20.25Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                    <path d="M18.5 20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25C17 19.8358 17.3358 19.5 17.75 19.5C18.1642 19.5 18.5 19.8358 18.5 20.25Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                    <path d="M4.46562 6.75H21.2844L18.8094 15.4125C18.7211 15.7269 18.532 16.0036 18.2711 16.2C18.0103 16.3965 17.6922 16.5019 17.3656 16.5H8.38437C8.05783 16.5019 7.7397 16.3965 7.47886 16.2C7.21803 16.0036 7.02893 15.7269 6.94062 15.4125L3.54688 3.54375C3.50203 3.38696 3.4073 3.24905 3.27704 3.15093C3.14677 3.05282 2.98808 2.99983 2.825 3H1.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="product-buy-button">
                            <a className="btn btn-outline-primary">
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className="slider-content-links">
                        <div className="link-left">
                            <a href="/wishlist">
                                <CiHeart className='heart-icon' />
                                Add to Wishlist
                            </a>
                            <a href="/compare">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5186 9.34692H21.0186V4.84692" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M6.16895 6.16885C6.93431 5.40236 7.84329 4.79429 8.84387 4.37941C9.84445 3.96453 10.917 3.75098 12.0002 3.75098C13.0834 3.75098 14.1559 3.96453 15.1565 4.37941C16.1571 4.79429 17.0661 5.40236 17.8314 6.16885L21.0189 9.34698" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M7.48145 14.6531H2.98145V19.1531" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M17.8314 17.8312C17.0661 18.5977 16.1571 19.2058 15.1565 19.6206C14.1559 20.0355 13.0834 20.2491 12.0002 20.2491C10.917 20.2491 9.84445 20.0355 8.84387 19.6206C7.84329 19.2058 6.93431 18.5977 6.16895 17.8312L2.98145 14.6531" stroke="#475156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                Compare
                            </a>
                        </div>
                        <div className="link-right">
                            Share Product: 
                            <ul> 
                                <li>
                                    <FaFacebook />
                                </li>
                                <li>
                                    <BsCopy />
                                </li>
                                <li>
                                    <FaInstagram />
                                </li>
                                <li>
                                    <FaPinterest />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="slider-payment-box">
                        <p>100% Guarantee Safe Checkout</p>
                        <img src="https://clicon-html.netlify.app/image/payment-method.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails