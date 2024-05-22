import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ProductDetails from '../components/ProductDetails'

import "../styles/single-product.css"
import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import FlashSale from '../components/FlashSale'

const SingleProduct = () => {
    const [activeTab, setActiveTab] = useState("Description")
    const [showTab, setShowTab] = useState('Description')

    const TRANSITION_DURATION = 150

    const changeTab = (tabName) => {
        setShowTab(tabName)
        setTimeout(() => {
            setActiveTab(tabName)
        }, TRANSITION_DURATION)
    }

    return (
        <>
        <BreadCrumb parentSection={"Shop"} mainSection={"Electronics Devices"} />
        <div className="container product-detail-section">
            <ProductDetails />
            <div className="product-information">
                <div className="product-information-tabs">
                    <nav>
                        <div className="nav nav-tabs">
                            <a href="#" className={`nav-link ${activeTab === "Description" ? "active" : ""}`} onClick={(e) => {
                                e.preventDefault()
                                changeTab("Description")
                            }}>
                                Description
                            </a>
                            <a href="#" className={`nav-link ${activeTab === "Additional Information" ? "active" : ""}`} onClick={(e) => {
                                e.preventDefault()
                                changeTab("Additional Information")
                            }}>
                                Additional Information
                            </a>
                            <a href="#" className={`nav-link ${activeTab === "Specification" ? "active" : ""}`} onClick={(e) => {
                                e.preventDefault()
                                changeTab("Specification")
                            }}>
                                Specification
                            </a>
                            <a href="#" className={`nav-link ${activeTab === "Review" ? "active" : ""}`} onClick={(e) => {
                                e.preventDefault()
                                changeTab("Review")
                            }}>
                                Review
                            </a>
                        </div>
                    </nav>
                    <div className="tab-content">
                        <div className={`tab-pane fade ${activeTab === "Description" ? "active" : ""} ${showTab === "Description" ? "show" : ""} `}>
                            <div className="description-content">
                                <div className="description">
                                    <h2 className="description-title">
                                        Description
                                    </h2>
                                    <p className="description-text">
                                        The most powerful MacBook Pro ever is here. 
                                        With the blazing-fast M1 Pro or M1 Max chip — 
                                        the first Apple silicon designed for pros — 
                                        you get groundbreaking performance and amazing battery life. 
                                        Add to that a stunning Liquid Retina XDR display, 
                                        the best camera and audio ever in a Mac notebook, and all the ports you need. 
                                        The first notebook of its kind, this MacBook Pro is a beast. 
                                        M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users. 
                                        <br /><br />
                                        Even the most ambitious projects are easily handled with up to 10 CPU cores, 
                                        up to 16 GPU cores, a 16‑core Neural Engine, 
                                        and dedicated encode and decode media engines that support H.264, 
                                        HEVC, and ProRes codecs.
                                    </p>
                                </div>
                                <div className="description-content-info">
                                    <div className="feature">
                                        <h2 className="feature-title">Feature</h2>
                                        <ul>
                                            <li>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 16.5C16.1421 16.5 19.5 13.1421 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 13.1421 7.85786 16.5 12 16.5Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12 13.5C14.4853 13.5 16.5 11.4853 16.5 9C16.5 6.51472 14.4853 4.5 12 4.5C9.51472 4.5 7.5 6.51472 7.5 9C7.5 11.4853 9.51472 13.5 12 13.5Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M16.5 15V22.5L12 20.25L7.5 22.5V15" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                Free 1 Year Warranty
                                            </li>
                                            <li>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5 7.50002H20.4938C20.6432 7.49904 20.7894 7.54329 20.9132 7.62695C21.037 7.71061 21.1326 7.82977 21.1875 7.96877L22.5 11.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M1.5 13.5H16.5" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M17.625 20.25C18.8676 20.25 19.875 19.2426 19.875 18C19.875 16.7574 18.8676 15.75 17.625 15.75C16.3824 15.75 15.375 16.7574 15.375 18C15.375 19.2426 16.3824 20.25 17.625 20.25Z" stroke="#FA8232" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M6.375 20.25C7.61764 20.25 8.625 19.2426 8.625 18C8.625 16.7574 7.61764 15.75 6.375 15.75C5.13236 15.75 4.125 16.7574 4.125 18C4.125 19.2426 5.13236 20.25 6.375 20.25Z" stroke="#FA8232" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M15.375 18H8.625" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M4.125 18H2.25C2.05109 18 1.86032 17.921 1.71967 17.7803C1.57902 17.6397 1.5 17.4489 1.5 17.25V6.75C1.5 6.55109 1.57902 6.36032 1.71967 6.21967C1.86032 6.07902 2.05109 6 2.25 6H16.5V16.05" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M16.5 11.25H22.5V17.25C22.5 17.4489 22.421 17.6397 22.2803 17.7803C22.1397 17.921 21.9489 18 21.75 18H19.875" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                Free Shipping & Fasted Delivery
                                            </li>
                                            <li>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.5656 11.4186L20.25 12.5717L17.25 6.8342L19.5938 5.66232C19.7679 5.57354 19.9701 5.55722 20.1563 5.61693C20.3425 5.67665 20.4975 5.80754 20.5875 5.98107L22.8937 10.3967C22.9405 10.4851 22.9691 10.5819 22.9779 10.6816C22.9867 10.7812 22.9755 10.8815 22.9449 10.9767C22.9143 11.072 22.865 11.1601 22.7999 11.236C22.7348 11.3118 22.6551 11.3739 22.5656 11.4186V11.4186Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M3.74996 12.4784L1.43434 11.3159C1.34518 11.2722 1.26571 11.211 1.20067 11.136C1.13563 11.0609 1.08634 10.9736 1.05573 10.8791C1.02512 10.7847 1.01381 10.685 1.02248 10.5861C1.03116 10.4872 1.05963 10.391 1.10621 10.3034L3.41246 5.88774C3.50268 5.71433 3.65703 5.58299 3.84265 5.52171C4.02827 5.46042 4.23048 5.47402 4.40621 5.55961L6.74996 6.73149L3.74996 12.4784Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M20.25 12.5718L18.75 14.3343L15.3 17.7843C15.206 17.8722 15.092 17.936 14.968 17.9703C14.8439 18.0046 14.7133 18.0083 14.5875 17.9812L9.15 16.6218C9.05067 16.5941 8.95812 16.5462 8.87812 16.4812L3.75 12.478" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M18.75 14.3345L14.625 11.3345L13.425 12.2345C12.9051 12.6225 12.2737 12.8321 11.625 12.8321C10.9762 12.8321 10.3449 12.6225 9.82496 12.2345L9.31871 11.8501C9.2331 11.785 9.1623 11.7025 9.11097 11.608C9.05965 11.5135 9.02899 11.4092 9.02101 11.3019C9.01304 11.1947 9.02793 11.087 9.0647 10.9859C9.10148 10.8849 9.1593 10.7928 9.23434 10.7157L12.9093 7.0501C12.9784 6.98141 13.0603 6.927 13.1504 6.89C13.2404 6.853 13.3369 6.83414 13.4343 6.83448H17.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.80627 6.73121L11.6156 5.32496C11.7865 5.27595 11.9693 5.28924 12.1313 5.36246L15.375 6.83433" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M10.5 19.9594L7.67813 19.2469C7.56313 19.2209 7.45666 19.166 7.36875 19.0875L5.25 17.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                100% Money-back guarantee
                                            </li>
                                            <li>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.1406 12.7498H18.1406C17.7428 12.7498 17.3613 12.9079 17.08 13.1892C16.7987 13.4705 16.6406 13.852 16.6406 14.2498V17.9998C16.6406 18.3976 16.7987 18.7792 17.08 19.0605C17.3613 19.3418 17.7428 19.4998 18.1406 19.4998H19.6406C20.0384 19.4998 20.42 19.3418 20.7013 19.0605C20.9826 18.7792 21.1406 18.3976 21.1406 17.9998V12.7498ZM21.1406 12.7498C21.1407 11.5616 20.9054 10.3851 20.4484 9.28826C19.9915 8.19141 19.3218 7.19591 18.4781 6.3592C17.6344 5.52248 16.6334 4.86112 15.5328 4.41326C14.4322 3.9654 13.2538 3.73992 12.0656 3.74982C10.8782 3.74117 9.70083 3.96757 8.60132 4.41598C7.5018 4.8644 6.50189 5.52596 5.6592 6.36255C4.81651 7.19914 4.1477 8.19422 3.69131 9.29045C3.23492 10.3867 2.99997 11.5624 3 12.7498V17.9998C3 18.3976 3.15804 18.7792 3.43934 19.0605C3.72064 19.3418 4.10218 19.4998 4.5 19.4998H6C6.39782 19.4998 6.77936 19.3418 7.06066 19.0605C7.34196 18.7792 7.5 18.3976 7.5 17.9998V14.2498C7.5 13.852 7.34196 13.4705 7.06066 13.1892C6.77936 12.9079 6.39782 12.7498 6 12.7498H3" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                24/7 Customer support
                                            </li>
                                            <li>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15.75 15.75H18.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M11.25 15.75H12.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M2.25 9.08447H21.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                Secure payment method
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="shipping-info">
                                        <h2 className="shipping-title">Shipping Information</h2>
                                        <ul>
                                            <li>
                                                <span>Courier:</span>
                                                2 - 4 days, Free Shipping
                                            </li>
                                            <li>
                                                <span>Local Shipping:</span>
                                                up to one week, $19.00
                                            </li>
                                            <li>
                                                <span>UPS Ground Shipping:</span>
                                                4 - 6 days, $29.00
                                            </li>
                                            <li>
                                                <span>Unishop Global Export:</span>
                                                3 - 4 days, $39.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === "Additional Information" ? "active show" : ""}`}>
                            <div className="additional-information-content">
                                <div className="additional-information-one">
                                    <div className="additional-information-overview">
                                        <h6 className="title">Overview</h6>
                                        <ul>
                                            <li>
                                                <span className="text-gray-900">Model Name:</span>
                                                <span className="text-gray-600">MacBook Pro</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">Brand:</span>
                                                <span className="text-gray-600">Apple</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">Specific Uses:</span>
                                                <span className="text-gray-600">Personal, Gaming, Business</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">Screen Size:</span>
                                                <span className="text-gray-600">16 Inches</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">Display:</span>
                                                <span className="text-gray-600">Liquid Retina XDR display</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">Key-board:</span>
                                                <span className="text-gray-600">Magic Keyboard with Touch ID</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">Human Interface Input:</span>
                                                <span className="text-gray-600">Keyboard</span>
                                            </li>
                                            <li>
                                                <span className="text-gray-900">CPU Manufacturer:</span>
                                                <span className="text-gray-600">Apple</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="additional-information-details">
                                        <div className="content">
                                            <h1>Product Warranty:</h1>
                                            <span>For warranty information about this product, please click here.</span>
                                        </div>
                                        <div className="content">
                                            <h1>Operating System:</h1>
                                            <span>Mac OS Big Sur</span>
                                        </div>
                                        <div className="content">
                                            <h1>Dimensions:</h1>
                                            <span>Size: 304.1 x 212.4 x 15.6 mm</span>
                                            <br />
                                            <span>Weight: 3 Pounds (1.4 kg)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-information-highlights">
                                    <h6 className="title">Highlights:</h6>
                                    <ul>
                                        <li>Stylish & Portable Thin and Light Laptop</li>
                                        <li>13.3 inch Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)</li>
                                        <li>Light Laptop without Optical Disk Drive</li>
                                        <li>No cost EMI starting from $252 USD/month</li>
                                        <li>Net banking & Credit/ Debit/ ATM card </li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === "Specification" ? "active show" : ""}`}>
                            <div className="specification-content">
                                <div className="specification-one">
                                    <div className="specification-content-overview">
                                        <h6 className="title">General</h6>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="specification-content-overview">
                                        <h6 className="title">Display And Audio Features</h6>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="specification-content-overview">
                                        <h6 className="title">Port And Slot Features</h6>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="specification-content-overview">
                                        <h6 className="title">Connectivity Features</h6>
                                    </div>
                                </div>
                                <div className="specification-two">
                                <div className="specification-content-overview">
                                        <h6 className="title">Processor And Memory Features</h6>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="specification-content-overview">
                                        <h6 className="title">Additional Features</h6>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="specification-content-overview">
                                        <h6 className="title">Warranty</h6>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="specification-content-overview">
                                        <h6 className="title">Connectivity Features</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === "Review" ? "active show" : ""}`}>
                            <div className="review-content">
                                <div className="review-rating-box">
                                    <div className="customer-rating">
                                        <div className="rating-title">4.7</div>
                                        <div className="rating-stars">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfStroke />
                                            {/* <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232"></path>
                                                </svg>
                                            </i>
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232"></path>
                                                </svg>
                                            </i>
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232"></path>
                                                </svg>
                                            </i>
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FA8232"></path>
                                                </svg>
                                            </i>
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0007 17.7563C11.8548 17.7592 11.7123 17.8013 11.5882 17.8781L7.19135 20.6625C6.46948 21.1219 5.56948 20.4375 5.7851 19.5938L7.05073 14.6063C7.08774 14.4571 7.08186 14.3005 7.03375 14.1545C6.98565 14.0086 6.89729 13.8792 6.77885 13.7813L2.54135 10.2469C1.98823 9.7875 2.26948 8.85938 2.99135 8.8125L8.5226 8.45625C8.67353 8.44747 8.81862 8.39492 8.94016 8.30501C9.0617 8.21511 9.15441 8.09175 9.20698 7.95L11.2695 2.75625C11.325 2.60726 11.4249 2.47887 11.5556 2.38836C11.6864 2.29785 11.8417 2.24956 12.0007 2.25V17.7563Z" fill="#FA8232"></path>
                                                    <path d="M16.2228 14.7869L16.2228 14.7869L16.2239 14.7912L17.5924 20.1717C17.5925 20.1719 17.5925 20.172 17.5926 20.1721C17.5962 20.1867 17.5963 20.196 17.5961 20.2011C17.5958 20.2064 17.5948 20.2107 17.5933 20.2146C17.59 20.2234 17.5828 20.2341 17.5714 20.2427C17.5625 20.2495 17.556 20.2513 17.554 20.2517C17.5525 20.2512 17.5475 20.2495 17.5389 20.2442C17.5387 20.244 17.5386 20.2439 17.5384 20.2438L12.8157 17.2453C12.5721 17.0904 12.2894 17.0081 12.0007 17.0081C11.7122 17.0081 11.4296 17.0903 11.1861 17.2451C11.186 17.2451 11.1859 17.2452 11.1858 17.2453L6.7901 20.0289L6.7887 20.0298C6.7442 20.0581 6.71215 20.0614 6.689 20.0598C6.66102 20.0578 6.6256 20.0464 6.59054 20.0197C6.52203 19.9677 6.48465 19.8855 6.51175 19.7795L6.51206 19.7782L7.77769 14.7907L7.7777 14.7907L7.77866 14.7869C7.8497 14.5006 7.8384 14.2 7.74607 13.9198C7.65395 13.6403 7.4849 13.3924 7.25832 13.2045C7.25781 13.2041 7.2573 13.2037 7.25678 13.2033L3.02174 9.67094L3.02053 9.66993C3.01175 9.66264 3.00804 9.65742 3.00646 9.65492C3.00472 9.65216 3.00323 9.64894 3.00205 9.64449C2.99939 9.63438 2.99846 9.61694 3.00469 9.59679C3.01091 9.57669 3.02014 9.56693 3.02286 9.56463C3.02377 9.56386 3.02407 9.56374 3.02438 9.56361L3.02444 9.56359L3.02444 9.56359C3.02465 9.5635 3.02896 9.56168 3.03971 9.56096C3.03979 9.56096 3.03987 9.56095 3.03995 9.56095L8.56885 9.20485C8.86427 9.18714 9.14822 9.08402 9.38618 8.90799C9.62218 8.73342 9.80284 8.49462 9.90666 8.22021L11.9665 3.03308C11.9692 3.02631 11.9718 3.0195 11.9743 3.01265C11.9763 3.00723 11.9799 3.00254 11.9846 2.99923C11.9893 2.99592 11.995 2.99414 12.0007 2.99414C12.0065 2.99414 12.0121 2.99592 12.0169 2.99923C12.0216 3.00254 12.0252 3.00723 12.0272 3.01265C12.0297 3.0195 12.0322 3.02631 12.0349 3.03308L14.0948 8.22018C14.1986 8.49461 14.3793 8.73342 14.6153 8.90799C14.8532 9.08402 15.1372 9.18714 15.4326 9.20485C15.4335 9.2049 15.4344 9.20495 15.4353 9.20501L20.9615 9.56095C20.9616 9.56095 20.9617 9.56096 20.9617 9.56096C20.9727 9.56169 20.9769 9.56355 20.977 9.56359C20.9774 9.56373 20.9776 9.56381 20.9786 9.56463C20.9813 9.56693 20.9905 9.57669 20.9968 9.59679C21.003 9.61694 21.0021 9.63438 20.9994 9.64449C20.9982 9.64894 20.9967 9.65216 20.995 9.65492C20.9934 9.65742 20.9897 9.66264 20.9809 9.66993L20.9797 9.67094L16.7447 13.2033C16.7442 13.2037 16.7436 13.2041 16.7431 13.2045C16.5166 13.3924 16.3475 13.6403 16.2554 13.9198L16.9677 14.1546L16.2554 13.9198C16.1631 14.2 16.1518 14.5006 16.2228 14.7869Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </i> */}
                                        </div>
                                        <p className="rating-text">
                                            Customer Rating
                                            <span className="rating-count">(934,516)</span>
                                        </p>
                                    </div>
                                    <div className="rating-graph w-100">
                                        <div className="rating-bar-item">
                                            <div className="rating-bar-item-star">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <div className="rating-bar">
                                                <div className="rating-per" style={{ maxWidth: "85%" }}></div>
                                            </div>
                                            <div className="rating-bar-count">
                                                85%
                                                <span>(94,532)</span>
                                            </div>
                                        </div>
                                        <div className="rating-bar-item">
                                            <div className="rating-bar-item-star">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                            <div className="rating-bar">
                                                <div className="rating-per" style={{ maxWidth: "62%" }}></div>
                                            </div>
                                            <div className="rating-bar-count">
                                                62%
                                                <span>(63,252)</span>
                                            </div>
                                        </div>
                                        <div className="rating-bar-item">
                                            <div className="rating-bar-item-star">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                            </div>
                                            <div className="rating-bar">
                                                <div className="rating-per" style={{ maxWidth: "56%" }}></div>
                                            </div>
                                            <div className="rating-bar-count">
                                                56%
                                                <span>(52,489)</span>
                                            </div>
                                        </div>
                                        <div className="rating-bar-item">
                                            <div className="rating-bar-item-star">
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                            </div>
                                            <div className="rating-bar">
                                                <div className="rating-per" style={{ maxWidth: "32%" }}></div>
                                            </div>
                                            <div className="rating-bar-count">
                                                32%
                                                <span>(31,542)</span>
                                            </div>
                                        </div>
                                        <div className="rating-bar-item">
                                            <div className="rating-bar-item-star">
                                                <FaStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                            </div>
                                            <div className="rating-bar">
                                                <div className="rating-per" style={{ maxWidth: "16%" }}></div>
                                            </div>
                                            <div className="rating-bar-count">
                                                16%
                                                <span>(17,513)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FlashSale />
        </div> 
        </> 
    )
}

export default SingleProduct