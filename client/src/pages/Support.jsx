import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

import "../styles/support.css"

const Support = () => {
    return (
        <>
        <BreadCrumb mainSection={"Customer Support"} />
        <div className="support-section-banner">
            <div className="container">
                <div className="col-xxl-5 col-lg-8">
                    <div className="content-area">
                        <h6 className="subtitle">Help Center</h6>
                        <h2>How can we help you?</h2>
                        <div className="content-area-search">
                            <form action="#">
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Enter your question or keywords for help' />
                                    <div className="search-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M16.4434 16.4434L20.9996 20.9996" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <button className="btn btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-section-01">
            <div className="container">
                <div className="features-section-title">What can we assist you today?</div>
                <div className="row card-row">
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/truck.png" alt="" />
                            <h2 className="features-card-title">Track Order</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/lockopen.png" alt="" />
                            <h2 className="features-card-title">Reset Password</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/creditcard.png" alt="" />
                            <h2 className="features-card-title">Payment Option</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/user.png" alt="" />
                            <h2 className="features-card-title">User & Account</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/stack.png" alt="" />
                            <h2 className="features-card-title">Wishlist & Compare</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/notepad.png" alt="" />
                            <h2 className="features-card-title">Shipping & Billing</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/creditcard.png" alt="" />
                            <h2 className="features-card-title">Shopping Cart</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="features-card">
                            <img src="https://clicon-html.netlify.app/image/support/storefront.png" alt="" />
                            <h2 className="features-card-title">Sell on Clicon</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Support