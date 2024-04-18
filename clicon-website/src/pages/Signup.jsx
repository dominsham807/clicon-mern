import React, { useEffect, useState } from 'react'
import axios from "axios"
import BreadCrumb from '../components/BreadCrumb'
import { FaArrowRight, FaEye } from 'react-icons/fa'
import { BACKEND_URL } from '../constants'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import "../styles/account.css"
import { useSelector } from 'react-redux'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [checkTandC, setCheckTandC] = useState(false) 

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
   
    const [errorMessage, setErrorMessage] = useState("")

    const { user } = useSelector((state) => state.userReducer)

    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate("/")
        }
    }, [user])

    const handleSignup = async(e) => {
        e.preventDefault()

        try{
            if(!firstName || !lastName || !username || !email || !password || !confirmPassword){
                toast.error("Please fill in all the fields")
            } else{
                if(password !== confirmPassword){
                    toast.error("Passwords not matched! Please try again!")
                } else if(!checkTandC){
                    toast.error("Please accept the condition to proceed")
                } else{
                    const res = await axios.post(`${BACKEND_URL}/api/v1/auth/register`,{
                        firstName, lastName, username, email, password, confirmPassword
                    })
                    if(res.data.success){
                        toast(res.data.message, { type: "success", draggable: false })
                        navigate("/signin")
                    } else{
                        setErrorMessage(res.data.message)
                    }
                } 
            } 
        } catch(error){
            console.log(error)            
            toast("Something Went Wrong", { type: "error", draggable:false })
        }
    }

    return (
        <>
        <BreadCrumb parentSection={"User Account"} mainSection={"Sign Up"} />
        <div className="account-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 ">
                        <div className="account-wrapper">
                            <div className="account-head">
                                <a href="/signin" className="head-btn text-gray-500">Sign In</a>
                                <a href="#" className="head-btn active text-gray-900 border-b-4">Sign Up</a>
                            </div>
                            <div className="account-wrapper-form">
                                <form onSubmit={handleSignup}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="firstName" className='form-label'>First Name</label>
                                                <input type="text" id='firstName' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="lastName" className='form-label'>Last Name</label>
                                                <input type="text" id='lastName' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className='form-label'>Username</label>
                                        <input type="text" id='username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailAddress" className='form-label'>Email Address</label>
                                        <input type="email" id='emailAddress' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signupPassword" className='form-label'>Password</label>
                                        <div className="password-box">
                                            <input type={showPassword ? "text" : "password"} id='signupPassword' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                                            <FaEye className='password-eye' onClick={() => setShowPassword(!showPassword)} />
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
                                        <div className="password-box">
                                            <input type={showConfirmPassword ? "text" : "password"} id='confirmPassword' className='form-control' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
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
                                    {errorMessage && (
                                        <div className="error-message-wrapper">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <button className="btn btn-primary w-100 signup-btn" type='submit'>
                                        Sign Up <FaArrowRight />
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