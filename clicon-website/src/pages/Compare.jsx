import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"

import "../styles/compare.css"

const Compare = () => {
    return (
        <>
        <BreadCrumb mainSection={"Compare"} />
        <div className="compare-body">
            <div className="container">
                <div className="compare-table table-responsive">
                    <table className='table-product'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <div className="compare-card">
                                        <div className="compare-close-button">
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="compare-image">
                                            <img src="https://clicon-html.netlify.app/image/product/compare-p-1.png" alt="" />
                                        </div>
                                        <div className="compare-content">
                                            Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                                        </div>
                                        <div className="compare-add-button-group">
                                            <button className="btn btn-primary compare-add">
                                                Add to Cart 
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.25 16.875C7.25 17.1511 7.02614 17.375 6.75 17.375C6.47386 17.375 6.25 17.1511 6.25 16.875C6.25 16.5989 6.47386 16.375 6.75 16.375C7.02614 16.375 7.25 16.5989 7.25 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M15.375 16.875C15.375 17.1511 15.1511 17.375 14.875 17.375C14.5989 17.375 14.375 17.1511 14.375 16.875C14.375 16.5989 14.5989 16.375 14.875 16.375C15.1511 16.375 15.375 16.5989 15.375 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M3.80469 5.625H17.8203L15.7578 12.8437C15.6842 13.1057 15.5266 13.3363 15.3093 13.5C15.0919 13.6638 14.8268 13.7516 14.5547 13.75H7.07031C6.79819 13.7516 6.53308 13.6638 6.31572 13.5C6.09836 13.3363 5.94078 13.1057 5.86719 12.8437L3.03906 2.95313C3.00169 2.82246 2.92275 2.70754 2.8142 2.62578C2.70565 2.54401 2.5734 2.49986 2.4375 2.5H1.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button> 
                                            <button className="wishlist-compare-btn">
                                                <FaHeart />
                                            </button> 
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="compare-card">
                                        <div className="compare-close-button">
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="compare-image">
                                            <img src="https://clicon-html.netlify.app/image/product/compare-p-2.png" alt="" />
                                        </div>
                                        <div className="compare-content">
                                            Apple iMac 24" 4K Retina Display M1 8 Core CPU, 8 Core GPU, 256GB SSD, Blue (MGPK3ZP/A) 2021
                                        </div>
                                        <div className="compare-add-button-group">
                                            <button className="btn btn-primary compare-add">
                                                Add to Cart 
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.25 16.875C7.25 17.1511 7.02614 17.375 6.75 17.375C6.47386 17.375 6.25 17.1511 6.25 16.875C6.25 16.5989 6.47386 16.375 6.75 16.375C7.02614 16.375 7.25 16.5989 7.25 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M15.375 16.875C15.375 17.1511 15.1511 17.375 14.875 17.375C14.5989 17.375 14.375 17.1511 14.375 16.875C14.375 16.5989 14.5989 16.375 14.875 16.375C15.1511 16.375 15.375 16.5989 15.375 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M3.80469 5.625H17.8203L15.7578 12.8437C15.6842 13.1057 15.5266 13.3363 15.3093 13.5C15.0919 13.6638 14.8268 13.7516 14.5547 13.75H7.07031C6.79819 13.7516 6.53308 13.6638 6.31572 13.5C6.09836 13.3363 5.94078 13.1057 5.86719 12.8437L3.03906 2.95313C3.00169 2.82246 2.92275 2.70754 2.8142 2.62578C2.70565 2.54401 2.5734 2.49986 2.4375 2.5H1.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button> 
                                            <button className="wishlist-compare-btn">
                                                <FaHeart />
                                            </button> 
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="compare-card">
                                        <div className="compare-close-button">
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="compare-image">
                                            <img src="https://clicon-html.netlify.app/image/product/compare-p-3.png" alt="" />
                                        </div>
                                        <div className="compare-content">
                                            Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display.
                                        </div>
                                        <div className="compare-add-button-group">
                                            <button className="btn btn-primary compare-add disable">
                                                Add to Cart 
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.25 16.875C7.25 17.1511 7.02614 17.375 6.75 17.375C6.47386 17.375 6.25 17.1511 6.25 16.875C6.25 16.5989 6.47386 16.375 6.75 16.375C7.02614 16.375 7.25 16.5989 7.25 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M15.375 16.875C15.375 17.1511 15.1511 17.375 14.875 17.375C14.5989 17.375 14.375 17.1511 14.375 16.875C14.375 16.5989 14.5989 16.375 14.875 16.375C15.1511 16.375 15.375 16.5989 15.375 16.875Z" fill="white" stroke="white" strokeWidth="1.5"></path>
                                                    <path d="M3.80469 5.625H17.8203L15.7578 12.8437C15.6842 13.1057 15.5266 13.3363 15.3093 13.5C15.0919 13.6638 14.8268 13.7516 14.5547 13.75H7.07031C6.79819 13.7516 6.53308 13.6638 6.31572 13.5C6.09836 13.3363 5.94078 13.1057 5.86719 12.8437L3.03906 2.95313C3.00169 2.82246 2.92275 2.70754 2.8142 2.62578C2.70565 2.54401 2.5734 2.49986 2.4375 2.5H1.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button> 
                                            <button className="wishlist-compare-btn disable">
                                                <CiHeart />
                                            </button> 
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="option">Customer Feedback:</td>
                                <td className='table-ratings'>
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li className='table-rating-count'>(51,750)</li>
                                    </ul> 
                                </td>
                                <td className='table-ratings'>
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li className='table-rating-count'>(50,465)</li>
                                    </ul>  
                                </td>
                                <td className='table-ratings'>
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li className='table-rating-count'>(47,510)</li>
                                    </ul>   
                                </td>
                            </tr>
                            <tr>
                                <td className="option">Price:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="option">Sold By:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="option">Brand:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="option">Model:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="option">Stock Status:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="option">Size:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="option">Weight:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Compare