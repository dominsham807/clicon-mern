import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { FaArrowRight, FaEye } from 'react-icons/fa'

import "../styles/account.css"

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [checkTandC, setCheckTandC] = useState(false)
    console.log(checkTandC)

    return (
        <>
        <BreadCrumb parentSection={"User Account"} mainSection={"Sign Up"} />
        <div className="account-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 ">
                        <div className="account-wrapper">
                            <div className="account-head">
                                <a href="/signin" className="head-btn text-gray-500">Sign In</a>
                                <a href="#" className="head-btn active text-gray-900 border-b-4">Sign Up</a>
                            </div>
                            <div className="account-wrapper-form">
                                <form action="#">
                                    <div className="form-group">
                                        <label htmlFor="name" className='form-label'>Name</label>
                                        <input type="text" id='name' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailAddress" className='form-label'>Email Address</label>
                                        <input type="email" id='emailAddress' className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signupPassword" className='form-label'>Password</label>
                                        <div className="password-box">
                                            <input type={showPassword ? "text" : "password"} id='signupPassword' className='form-control' /> 
                                            <FaEye className='password-eye' onClick={() => setShowPassword(!showPassword)} />
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
                                        <div className="password-box">
                                            <input type={showConfirmPassword ? "text" : "password"} id='confirmPassword' className='form-control' /> 
                                            <FaEye className='password-eye' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                        </div> 
                                    </div>
                                    <div className="form-check-wrapper">
                                        <div className="form-check">
                                            <input type="checkbox" id='agreement' className='form-check-input' onChange={() => setCheckTandC(!checkTandC)} />
                                            <label htmlFor="agreement" className='form-check-label'>
                                                Are you agree to Clicon <span>Terms of Condition</span> and <span>Privacy Policy</span>.
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100 signup-btn">
                                        Login <FaArrowRight />
                                    </button>
                                    <div className="form-wrapper-text">
                                        <p className="text">or</p>
                                    </div>
                                    <div className="form-other-login">
                                        <button className="btn w-100">
                                            <img src="https://clicon-html.netlify.app/image/logo/google-min.png" alt="" />
                                            Sign Up With Google
                                        </button>
                                        <button className="btn w-100">
                                            <img src="https://clicon-html.netlify.app/image/logo/apple-min.png" alt="" />
                                            Sign Up With Apple
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup