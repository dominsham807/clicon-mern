import React from 'react'
import { useLocation } from "react-router-dom"
import BreadCrumb from '../components/BreadCrumb'

import "../styles/checkout.css"

const CheckoutSuccess = () => {
    const location = useLocation()

    const orderId = location.state.orderId
    console.log(orderId)

    return (
        <>
        <BreadCrumb parentSection={"Shopping Cart"} mainSection={"Checkout Success"} />
        <div className="checkout-success-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-lg-6">
                        <div className="checkout-success-body-wrapper">
                            <div className="success-icon">
                                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.2" d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" fill="#2DB324"></path>
                                    <path d="M59.125 35.75L38.9469 55L28.875 45.375" stroke="#2DB324" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" stroke="#2DB324" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div> 
                            <h2 className="checkout-success-text">Your order is placed successfully</h2>
                            <div className="checkout-btn-group">
                                <a href="/dashboard" className="btn btn-outline-primary">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 13.75L10 18.125L17.5 13.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M2.5 10L10 14.375L17.5 10" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Go to Dashboard
                                </a>
                                <a href={`/order/${orderId}`} className="btn btn-primary"> 
                                    View Your Order
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.125 10H16.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CheckoutSuccess