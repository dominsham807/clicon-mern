import React, { useState } from 'react'
import ArrowRight from "../assets/img/ArrowRight.svg"
import ArrowX from "../assets/img/X.svg"
import "../styles/header.css"

const Header = ({ setShowHeader }) => { 
    return (
        <header>
            <div className="black" id="blackFriday">
                <div className="container-black container">
                    <div className="black-fr">
                        <div className="yellow">
                            <p>Black</p>
                        </div>
                        <p>Friday</p>
                    </div>
                    <div className="sales">
                        <p>Up to</p>
                        <p>59%</p>
                        <p>OFF</p>
                    </div>
                    <a href="#" className='shopnow-btn button'>
                        <p>SHOP NOW</p>
                        <img src={ArrowRight} alt="Arrow" />
                    </a>
                </div>
                <div className="btnx" onClick={() => setShowHeader(false)}>
                    <img src={ArrowX} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header