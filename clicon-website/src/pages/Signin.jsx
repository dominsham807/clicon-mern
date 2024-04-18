import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaEye } from 'react-icons/fa'
import BreadCrumb from '../components/BreadCrumb'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { BACKEND_URL } from '../constants'
import { loginUser } from '../redux/reducers/userReducer.js'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'
import axios from 'axios'

import "../styles/account.css"

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [auth, setAuth] = useAuth()

    const { user } = useSelector((state) => state.userReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate("/")
        }
    }, [user])

    const handleSignin = async(e) => {
        e.preventDefault()

        try{
            const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
                email, password
            })
            if(res?.data?.success){ 
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                dispatch(loginUser(res.data.user))
                localStorage.setItem("auth", JSON.stringify(res.data))
                window.location.reload()
                toast.success(res.data.message)
                navigate("/")
            } 
        } catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
    }

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
                                <form onSubmit={handleSignin}> 
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