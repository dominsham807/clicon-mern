import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

import "../styles/wishlist.css"

const Wishlist = () => {
    return (
        <>
        <BreadCrumb mainSection={"Wishlist"} />
        <div className="wishlist-body">
            <div className="container">
                <div className="wishlist-wrapper">
                    <h6 className="wishlist-title">Wishlist</h6>
                    <div className="wishlist-table">
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Products</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Stock Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='wishlist-product'>
                                        <span className="wishlist-product-wrapper">
                                            <img src="https://clicon-html.netlify.app/image/product/wishlist-1.png" alt="" />
                                            <span className="wishlist-product-text">
                                                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black
                                            </span>
                                        </span>
                                    </td>
                                    <td className='wishlist-price'>
                                        <del className="del-price text-gray-400">$1299</del>
                                        <span className="text-gray-900">$999</span>
                                    </td>
                                    <td className='wishlist-stock text-success-500'>
                                        In Stock
                                    </td>
                                    <td className='wishlist-actions'>
                                        <div className="wishlist-button-wrapper">
                                            <button className="btn btn-primary add-to-cart-btn">
                                                Add to Cart
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.75 16.875C7.75 17.1511 7.52614 17.375 7.25 17.375C6.97386 17.375 6.75 17.1511 6.75 16.875C6.75 16.5989 6.97386 16.375 7.25 16.375C7.52614 16.375 7.75 16.5989 7.75 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M15.875 16.875C15.875 17.1511 15.6511 17.375 15.375 17.375C15.0989 17.375 14.875 17.1511 14.875 16.875C14.875 16.5989 15.0989 16.375 15.375 16.375C15.6511 16.375 15.875 16.5989 15.875 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M4.30469 5.625H18.3203L16.2578 12.8437C16.1842 13.1057 16.0266 13.3363 15.8093 13.5C15.5919 13.6638 15.3268 13.7516 15.0547 13.75H7.57031C7.29819 13.7516 7.03308 13.6638 6.81572 13.5C6.59836 13.3363 6.44078 13.1057 6.36719 12.8437L3.53906 2.95313C3.50169 2.82246 3.42275 2.70754 3.3142 2.62578C3.20565 2.54401 3.0734 2.49986 2.9375 2.5H1.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                            <button className="close-btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='wishlist-product'>
                                        <span className="wishlist-product-wrapper">
                                            <img src="https://clicon-html.netlify.app/image/product/wishlist-2.png" alt="" />
                                            <span className="wishlist-product-text">
                                                TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear
                                            </span>
                                        </span>
                                    </td>
                                    <td className='wishlist-price'>
                                        <del className="del-price text-gray-400">$250</del>
                                        <span className="text-gray-900">$222</span>
                                    </td>
                                    <td className='wishlist-stock text-danger-500'>
                                        Out of Stock
                                    </td>
                                    <td className='wishlist-actions'>
                                        <div className="wishlist-button-wrapper">
                                            <button className="btn btn-primary add-to-cart-btn disabled">
                                                Add to Cart
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.75 16.875C7.75 17.1511 7.52614 17.375 7.25 17.375C6.97386 17.375 6.75 17.1511 6.75 16.875C6.75 16.5989 6.97386 16.375 7.25 16.375C7.52614 16.375 7.75 16.5989 7.75 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M15.875 16.875C15.875 17.1511 15.6511 17.375 15.375 17.375C15.0989 17.375 14.875 17.1511 14.875 16.875C14.875 16.5989 15.0989 16.375 15.375 16.375C15.6511 16.375 15.875 16.5989 15.875 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M4.30469 5.625H18.3203L16.2578 12.8437C16.1842 13.1057 16.0266 13.3363 15.8093 13.5C15.5919 13.6638 15.3268 13.7516 15.0547 13.75H7.57031C7.29819 13.7516 7.03308 13.6638 6.81572 13.5C6.59836 13.3363 6.44078 13.1057 6.36719 12.8437L3.53906 2.95313C3.50169 2.82246 3.42275 2.70754 3.3142 2.62578C3.20565 2.54401 3.0734 2.49986 2.9375 2.5H1.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                            <button className="close-btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Wishlist