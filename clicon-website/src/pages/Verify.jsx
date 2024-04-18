import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CheckmarkLogo from "../assets/images/checkmark.png"
import { useNavigate, useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { BACKEND_URL } from '../constants'

import "../styles/account.css"

const Verify = () => {
    const [searchParams] = useSearchParams()
    // console.log()
    const verificationToken = searchParams.get("token")
    const email = searchParams.get("email") 

    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const verifyAccount = async() => {
        const res = await axios.post(`${BACKEND_URL}/api/auth/verify`, {
            verificationToken, email
        })
 
        if(res.data.success){
            toast(res.data.message, { type: "success", draggable: false }) 
        } else{
            setErrorMessage(res.data.message)
        }
    }

    useEffect(() => {
        verifyAccount()
    }, [verificationToken, email])

    return (
        <>
            <BreadCrumb parentSection={"User Account"} mainSection={"Account Verification"} />
            <div className="account-body">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-xxl-4 col-lg-5 '>
                            <div className="account-wrapper verify">
                                <div className="account-header-text">
                                    <h2>Account Verification</h2> 
                                </div>
                                <div className="account-checkmark-logo">
                                    <img src={CheckmarkLogo} alt="" />
                                </div>
                                <div className="account-wrapper-text">
                                    <p>Your account has been successfully verified! Please proceed to login!</p>
                                </div>
                                <div className="account-login-btn">
                                    <button className="btn btn-primary w-100" onClick={() => navigate("/signin")}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify