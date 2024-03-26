import React from 'react'
import "../styles/features.css"

const Features = () => {
    return (
        <div className='features-section'>
            <div className="container">
                <div className="features-wrapper">
                    <div className="single-item">
                        <div className="card-features">
                            <img src="https://clicon-html.netlify.app/image/features/package.png" alt="" />
                            <div className="features-text">
                                <h5>Fastest Delivery</h5>
                                <p>Delivery in 24 hours</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="card-features">
                            <img src="https://clicon-html.netlify.app/image/features/trophy.png" alt="" />
                            <div className="features-text">
                                <h5>24 Hours Return</h5>
                                <p>100% money-back guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <div className="card-features">
                            <img src="https://clicon-html.netlify.app/image/features/creditcard.png" alt="" />
                            <div className="features-text">
                                <h5>Secure Payment</h5>
                                <p>Your money is safe</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                    <div className="card-features">
                            <img src="https://clicon-html.netlify.app/image/features/package.png" alt="" />
                            <div className="features-text">
                                <h5>Support 24/7</h5>
                                <p>Live Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Features