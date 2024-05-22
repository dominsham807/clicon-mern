import React from 'react'
import "../styles/footer.css"

const Footer = () => {
    return (
        <>
        <div className='footer-section'>
            <div className="container">
                <div className="row card-footer-row">
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <div className="footer-widget">
                            <div className="logo">
                                <a href="#">
                                    <img src="https://clicon-html.netlify.app/image/logo/logo-primary.png" alt="" />
                                </a>
                            </div>
                            <div className="widget-contact-info">
                                <span className="text-one">
                                    Customer Supports
                                </span>
                                <span className="phone">
                                    +852-9091-8589
                                </span>
                                <span className="text-one">
                                    Flat B-C, 57/F, Tower 3, Ocean Pointe,<br />
                                    Sham Tseng, New Territories
                                </span>
                                <span className="email">
                                    dominicsham2000@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
                        <h3 className="footer-title">
                            Top Category
                        </h3>
                        <ul className="category-links">
                            <li>
                                <a href="#">
                                    Computer & Laptop
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Headphones
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Camera & Photos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    TV & Homes
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Accessories
                                </a>
                            </li>
                            <div className='text-btn'>
                                <a href="/products">
                                    Browse All Products
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.125 10H16.875" stroke="#EBC80C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#EBC80C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
                        <h3 className="footer-title">
                            Quick Links
                        </h3> 
                        <ul className="category-links">
                            <li>
                                <a href="/shop">
                                    Shop Products
                                </a>
                            </li>
                            <li>
                                <a href="/cart">
                                    Shopping Cart
                                </a>
                            </li>
                            <li>
                                <a href="/wishlist">
                                    Wishlist
                                </a>
                            </li>
                            <li>
                                <a href="/compare">
                                    Compare
                                </a>
                            </li>
                            <li>
                                <a href="/orders">
                                    Track Order
                                </a>
                            </li>
                            <li>
                                <a href="/support">
                                    Customer Help
                                </a>
                            </li>
                            <li>
                                <a href="/about">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xxl-2 col-lg-4 col-sm-6 col-12">
                        <h3 className="footer-title">
                            Download App
                        </h3> 
                        <div className="app-button-group">
                            <a href="#" className="google-play-btn">
                                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.087 14.813L5.29175 0.979426L22.8438 11.0562L19.087 14.813V14.813ZM1.69015 0.166626C0.877351 0.592226 0.333351 1.36663 0.333351 2.37463V29.9586C0.333351 30.9666 0.877351 31.741 1.69015 32.1666L17.7334 16.1634L1.69015 0.166626ZM28.271 14.269L24.5894 12.1378L20.4822 16.1698L24.5894 20.2018L28.3462 18.0706C29.471 17.1762 29.471 15.1634 28.271 14.269V14.269ZM5.29175 31.3602L22.8438 21.2834L19.087 17.5266L5.29175 31.3602V31.3602Z" fill="white"></path>
                                </svg>
                                <div className="app-button-text">
                                    <span className="app-text-one">Get it now</span>
                                    <span className="app-text-two">Google Play</span>
                                </div>
                            </a>
                            <a href="#" className="app-play-btn">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_762_10665)">
                                        <path d="M29.056 25.438C28.5893 26.5249 28.013 27.5614 27.336 28.5313C26.4307 29.8213 25.69 30.714 25.1193 31.21C24.2347 32.0233 23.286 32.4407 22.2707 32.464C21.542 32.464 20.6633 32.2567 19.64 31.836C18.6133 31.4173 17.67 31.2093 16.8073 31.2093C15.9027 31.2093 14.9327 31.4173 13.8947 31.836C12.8553 32.2567 12.018 32.476 11.378 32.4973C10.4047 32.5393 9.43401 32.1107 8.46468 31.21C7.84668 30.67 7.07401 29.746 6.14735 28.4367C5.15335 27.038 4.33601 25.4167 3.69601 23.5673C3.01068 21.5707 2.66668 19.6367 2.66668 17.7647C2.66668 15.62 3.13001 13.7707 4.05801 12.2207C4.78801 10.9753 5.75801 9.994 6.97268 9.27267C8.16433 8.55956 9.52403 8.17581 10.9127 8.16067C11.686 8.16067 12.7 8.4 13.9607 8.87C15.2173 9.34133 16.024 9.58067 16.378 9.58067C16.642 9.58067 17.5387 9.30067 19.058 8.74333C20.4953 8.226 21.708 8.012 22.7013 8.09667C25.394 8.314 27.4167 9.37533 28.7613 11.2873C26.354 12.746 25.1627 14.7893 25.1867 17.4107C25.208 19.4527 25.9487 21.152 27.4047 22.5007C28.0647 23.1273 28.8013 23.6113 29.6207 23.9547C29.4489 24.4552 29.2606 24.9499 29.056 25.438ZM22.8813 1.14067C22.8813 2.74067 22.2967 4.23533 21.1313 5.618C19.7247 7.26267 18.024 8.21267 16.1793 8.06267C16.1546 7.86139 16.1421 7.65879 16.142 7.456C16.142 5.92 16.8107 4.276 17.9987 2.93133C18.592 2.25067 19.3453 1.68467 20.26 1.23333C21.1733 0.788667 22.036 0.542667 22.848 0.5C22.8713 0.714 22.8813 0.928 22.8813 1.14V1.14067Z" fill="white"></path>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_762_10665">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <div className="app-button-text">
                                    <span className="app-text-one">Get it now</span>
                                    <span className="app-text-two">Apple Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                        <h3 className="footer-title">
                            Popular Tags
                        </h3> 
                        <ul className="footer-tags">
                            <li>Game</li> 
                            <li>iPhone</li> 
                            <li>TV</li> 
                            <li>Asus Laptop</li> 
                            <li>MacBook</li> 
                            <li>SSD</li> 
                            <li>Graphics Card</li> 
                            <li>Power Bank</li> 
                            <li>Smart TV</li> 
                            <li>Speaker</li> 
                            <li>Tablet</li> 
                            <li>Samsung</li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-section">
            Clicon : Ecommerce Web Company © 2024. Designed by Dominic Sham
        </div>
        </>
    
    )
}

export default Footer