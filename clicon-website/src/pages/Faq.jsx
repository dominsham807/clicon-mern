import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
// import ReactHtmlParser from "react-html-parser"
import { faqData } from '../data/mockData.js'

import "../styles/faq.css"
import Collapse from '../components/Collapse.jsx'

const Faq = () => {
    const [showAccordion, setShowAccordion] = useState(-1)
    
    return (
        <>
        <BreadCrumb mainSection={"FAQs"} />
        <div className="faq-body">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="faq-section">
                            <h2 className="faq-title">Frequently Asked Questions</h2>
                            <div className="accordion-section"> 
                                {faqData.map((faq, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button ${showAccordion !== index ? "collapsed" : ""}`} onClick={() => {
                                                if(showAccordion === index){
                                                    setShowAccordion(-1)
                                                } else{
                                                    setShowAccordion(index)
                                                }
                                            }}>
                                                {faq.title}
                                            </button>
                                        </h2>
                                        <Collapse open={showAccordion === index}>
                                            <div className="accordion-body">
                                                {faq.content}
                                            </div>
                                        </Collapse>
                                        {/* <div className={`accordion-collapse collapse ${showAccordion === index ? "is-open" : ""}`}>
                                            <div className="accordion-body">
                                                afds
                                            </div>
                                        </div> */}
                                    </div>
                                ))}
                                {/* <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className={`accordion-button ${!showAccordion ? "collapsed" : ""}`} onClick={() => setShowAccordion(!showAccordion)}>
                                            Suspendisse ultrices pharetra libero sed interdum.
                                        </button>
                                    </h2>
                                    <div className={`accordion-collapse collapse ${showAccordion ? "show" : ""}`}>
                                        <div className="accordion-body">
                                            <p>
                                                Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. 
                                                Morbi aliquet pulvinar orci non vulputate. 
                                                Donec aliquet ullamcorper gravida. 
                                                Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                                                Sed molestie accumsan dui, non iaculis magna mattis id. 
                                                Ut consectetur massa at viverra euismod. 
                                                Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                                                Praesent eget sem purus.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="faq-support-body">
                            <div className="support-form-content">
                                <div className="support-head">
                                    <h2 className="support-title">Didn't find your answer? Ask for support</h2>
                                    <p className="support-text">
                                        If you have any questions or enquiries, please dial 2180 0000 to our company for help
                                    </p>
                                </div>
                                <div className="support-form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder='Email Address' />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder='Subject' />
                                    </div>
                                    <div className="form-textarea">
                                        <textarea cols="30" rows="10" placeholder='Message (Optional)'></textarea>
                                    </div>
                                    <div className="form-button">
                                        <button className="btn btn-primary" type='submit'>
                                            Send Message
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.625 10H17.375" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Faq