import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { PiNotebook } from 'react-icons/pi'
import { FiPackage } from "react-icons/fi"

import "../styles/track-order-detail.css"
import { FaRegHandshake, FaTruckMoving } from 'react-icons/fa6'

const TrackOrderDetail = () => {
    return (
        <>
        <BreadCrumb parentSection={"Track Order"} mainSection={"Order Details"} />
        <div className="trackorder-details-body">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="shipping-details-wrapper">
                            <div className="shipping-details">
                                <div className="shipping-details-head">
                                    <div className="order-tag">
                                        <h6 className="tag-text">#96512578</h6>
                                        <p className="tag-info">
                                            4 Products
                                            <span className="dot d-none d-md-block"></span>
                                            <br className="d-md-none" />
                                            Order Placed on 20 Mar, 2024 at 7:30 PM
                                        </p>
                                    </div>
                                    <div className="price-tag">
                                        <span>$1200.00</span>
                                    </div>
                                </div>
                                <div className="shipping-details-text">
                                    Order expected arrival date: <span>28 Mar, 2024</span>
                                </div>
                                <div className="shipping-details-progress">
                                    <div className="next-step-item next-step-item-finish">
                                        <div className="next-step-item-tail">
                                            <div className="next-step-item-tail-underlay">
                                                <div className="next-step-item-tail-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="next-step-item-container">
                                            <div className="next-step-item-node">
                                                <span className="next-step-item-node-dot"></span>
                                                <div className="complete-check">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.125 3.375L4.875 8.625L2.25 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="next-step-item-title">
                                                <div>
                                                    <PiNotebook className='next-step-item-icon' />
                                                </div>
                                                <p>Order Placed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="next-step-item next-step-item-pending">
                                        <div className="next-step-item-tail">
                                            <div className="next-step-item-tail-underlay">
                                                <div className="next-step-item-tail-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="next-step-item-container">
                                            <div className="next-step-item-node">
                                                <span className="next-step-item-node-dot"></span>
                                            </div>
                                            <div className="next-step-item-title">
                                                <div>
                                                    <FiPackage className='next-step-item-icon' />
                                                </div>
                                                <p>Packaging</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="next-step-item">
                                        <div className="next-step-item-tail">
                                            <div className="next-step-item-tail-underlay">
                                                <div className="next-step-item-tail-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="next-step-item-container">
                                            <div className="next-step-item-node">
                                                <span className="next-step-item-node-dot"></span>
                                            </div>
                                            <div className="next-step-item-title">
                                                <div>
                                                    <FaTruckMoving className='next-step-item-icon' />
                                                </div>
                                                <p>On the Road</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="next-step-item">
                                        <div className="next-step-item-tail">
                                            <div className="next-step-item-tail-underlay">
                                                <div className="next-step-item-tail-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="next-step-item-container">
                                            <div className="next-step-item-node">
                                                <span className="next-step-item-node-dot"></span>
                                            </div>
                                            <div className="next-step-item-title">
                                                <div>
                                                    <FaRegHandshake className='next-step-item-icon' />
                                                </div>
                                                <p>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-activity-wrapper">
                                <h6 className="activity-title">Order Activity</h6>
                                <ul className="order-activity">
                                    <li>
                                        <span className="activity-icon bg-success-50">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                        <span className="activity-text-wrapper">
                                            <span>Your order has been successfully delivered! Thank you for shopping at Clicon!</span>
                                            <span className="date">28 Mar, 2024 at 7:30 PM</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="activity-icon bg-secondary-50">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.25 21.75H18.75" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                        <span className="activity-text-wrapper">
                                            <span>Your order is on the road</span>
                                            <span className="date">26 Mar, 2024 at 2:10 PM</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="activity-icon bg-secondary-50">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 12H15" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9 15H15" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M5.25 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V18.75C19.5 19.3467 19.2629 19.919 18.841 20.341C18.419 20.7629 17.8467 21 17.25 21H6.75C6.15326 21 5.58097 20.7629 5.15901 20.341C4.73705 19.919 4.5 19.3467 4.5 18.75V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75V3.75Z" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7.5 2.25V5.25" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12 2.25V5.25" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M16.5 2.25V5.25" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                        <span className="activity-text-wrapper">
                                            <span>Your order has been confirmed and pending for delivery! Thank you for shopping at Clicon!</span>
                                            <span className="date">20 Mar, 2024 at 4:30 PM</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrackOrderDetail