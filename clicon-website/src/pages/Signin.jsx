import React, { useState } from 'react'

import "../styles/account.css"
import { FaArrowRight, FaEye } from 'react-icons/fa'
import BreadCrumb from '../components/BreadCrumb'

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
        <BreadCrumb parentSection={"User Account"} mainSection={"Sign In"} />
        <div className="account-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 ">
                        <div className="account-wrapper">
                            <div className="account-head">
                                <a href="#" className="head-btn active text-gray-900 border-b-4">Sign In</a>
                                <a href="/signup" className="head-btn text-gray-500">Sign Up</a>
                            </div>
                            <div className="account-wrapper-form">
                                <form action="#"> 
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
                                        <a href="/forget-password" className="forgot-btn">Forget Password</a>
                                    </div>
                                    <button className="btn btn-primary w-100 login-btn">
                                        Login <FaArrowRight />
                                    </button>
                                    <div className="form-wrapper-text">
                                        <p className="text">or</p>
                                    </div>
                                    <div className="form-other-login">
                                        <button className="btn w-100">
                                            <img src="https://clicon-html.netlify.app/image/logo/google-min.png" alt="" />
                                            Login With Google
                                        </button>
                                        <button className="btn w-100">
                                            <img src="https://clicon-html.netlify.app/image/logo/apple-min.png" alt="" />
                                            Login With Apple
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

export default Signin