import React, { useEffect, useState } from 'react'
import CountUp from "react-countup"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import BreadCrumb from '../components/BreadCrumb'
import DashboardSideNav from '../components/DashboardSideNav'
import PaymentCardModal from '../components/PaymentCardModal' 

import "../styles/dashboard.css"
import { BACKEND_URL } from '../constants'

const Dashboard = () => {
    const { user } = useSelector((state) => state.userReducer)
    console.log(user)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("") 
    const [email, setEmail] = useState("") 
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [photo, setPhoto] = useState("")
    const [photoPreview, setPhotoPreview] = useState('')
    const [photoName, setPhotoName] = useState("")

    const [showCardModal, setShowCardModal] = useState(false)
    // const [orders, setOrders] = useState([])
    const [totalOrders, setTotalOrders] = useState(0)
    const [pendingOrders, setPendingOrders] = useState(0)
    const [completedOrders, setCompletedOrders] = useState(0)

    // const fetchOrders = async() => {
    //     const res = await axios.get(`${BACKEND_URL}/api/order`)
    //     setOrders(res.data.orders)
    // } 

    const getOrderStatus = async() => {
        const res = await axios.get(`${BACKEND_URL}/api/order/status`)
        setPendingOrders(res.data.pendingOrders)
        setCompletedOrders(res.data.completedOrders)
        setTotalOrders(res.data.pendingOrders + res.data.completedOrders)
    }

    const getProfile = async() => {
        const res = await axios.get(`${BACKEND_URL}/api/user/profile`) 
        console.log(res.data)

        if(res.data.success){
            setFirstName(res.data?.user.firstName)
            setLastName(res.data?.user.lastName)
            setEmail(res.data?.user.email)
            setUsername(res.data?.user.username) 
            setPhoneNumber(res.data?.user.phone) 
            setCountry(res.data?.user.country) 
            setAddress(res.data?.user.address) 
            if(res.data?.user.photo){
                setPhotoPreview(`https://clicon-server.vercel.app/profile/${res.data?.user?.photo?.filename}`)
            }
        }
    }

    useEffect(() => {
        setPhotoPreview("/icon.png")
        getProfile()  
        getOrderStatus()
    }, []) 

    return (
        <>
        <BreadCrumb mainSection={"Dashboard"} />
        <div className="dashboard-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <DashboardSideNav />
                    </div>
                    <div className="col-lg-9">
                        <div className="dashboard-body-content">
                            <div className="dashboard-info">
                                <div className="dashboard-head">
                                    <h4 className="dashboard-title">Hello, {user.lastName}</h4>
                                    <p>
                                        From your account dashboard, you can easily check & view your <a href="#">Recent Orders</a>, manage your <a href="#">Shipping and Billing Addresses</a> and
                                        edit your <a href="#">Password</a> and <a href="#">Account Details</a>.
                                    </p>
                                </div>
                                <div className="row card-row">
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="account-info-card">
                                            <div className="account-info-title">Account Info</div>
                                            <div className="account-card-body">
                                                <div className="account-card-header">
                                                    <div className="client-image">
                                                        <img src={photoPreview} alt="" />
                                                    </div>
                                                    <div className="client-info">
                                                        <h6>{firstName} {lastName}</h6>
                                                        <p>{country}</p>
                                                    </div>
                                                </div>
                                                <ul className="account-card-footer">
                                                    <li>Email: <span>dominicsham2000@gmail.com</span></li>
                                                    <li>Phone: <span>+852-9091-8589</span></li>
                                                    <li>Position: <span>Programmer</span></li> 
                                                </ul>
                                                <a href='/settings' className="btn btn-outline-secondary">Edit Account</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="billing-info-card">
                                            <div className="billing-info-title">Billing Address</div>
                                            <div className="billing-card-body">
                                                <div className="billing-card-header"> 
                                                    <div className="client-info">
                                                        <h6>Dominic Sham</h6>
                                                        <p>Flat B-C, 57/F, Tower 3, Ocean Pointe, Sham Tseng, New Territories, HK</p>
                                                    </div>
                                                </div>
                                                <ul className="billing-card-footer">
                                                    <li>Email: <span>dominicsham2000@gmail.com</span></li>
                                                    <li>Phone: <span>+852-9091-8589</span></li> 
                                                </ul>
                                                <a href='/settings' className="btn btn-outline-secondary">Edit Address</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4">
                                        <div className="row fun-card-row">
                                            <div className="col-12">
                                                <div className="fun-fact-card bg-secondary-50">
                                                    <div className="fun-icon">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.2" d="M9.2375 13.9258L5.3125 18.6258C5.21362 18.7411 5.14385 18.8785 5.10905 19.0264C5.07425 19.1743 5.07544 19.3284 5.1125 19.4758L6.65 26.4383C6.6871 26.6038 6.76569 26.7571 6.87837 26.8839C6.99105 27.0107 7.13412 27.1067 7.29412 27.1629C7.45413 27.2192 7.62581 27.2338 7.79303 27.2054C7.96024 27.1771 8.1175 27.1067 8.25 27.0008L12 24.0008C9.8 20.1758 9.0875 16.8133 9.2375 13.9258Z" fill="#2DA5F3"></path>
                                                            <path opacity="0.2" d="M22.6875 13.8379L26.6125 18.5504C26.7114 18.6658 26.7812 18.8031 26.816 18.9511C26.8508 19.099 26.8496 19.253 26.8125 19.4004L25.275 26.3504C25.2396 26.5169 25.1622 26.6717 25.0502 26.8C24.9382 26.9282 24.7953 27.0258 24.6351 27.0834C24.4749 27.141 24.3026 27.1567 24.1345 27.129C23.9665 27.1014 23.8083 27.0313 23.675 26.9254L19.925 23.9254C22.125 20.0879 22.8375 16.7254 22.6875 13.8379Z" fill="#2DA5F3"></path>
                                                            <path d="M18 28H14" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M15.375 2.47472C13 4.37472 5.06249 11.9747 12 23.9997H20C26.8 11.9747 18.975 4.38722 16.625 2.47472C16.4496 2.32827 16.2284 2.24805 16 2.24805C15.7715 2.24805 15.5503 2.32827 15.375 2.47472Z" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.2375 13.9258L5.3125 18.6258C5.21362 18.7411 5.14385 18.8785 5.10905 19.0264C5.07425 19.1743 5.07544 19.3284 5.1125 19.4758L6.65 26.4383C6.6871 26.6038 6.76569 26.7571 6.87837 26.8839C6.99105 27.0107 7.13412 27.1067 7.29412 27.1629C7.45413 27.2192 7.62581 27.2338 7.79303 27.2054C7.96024 27.1771 8.1175 27.1067 8.25 27.0008L12 24.0008" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M22.6875 13.8242L26.6875 18.6242C26.7864 18.7396 26.8561 18.877 26.8909 19.0249C26.9258 19.1728 26.9246 19.3269 26.8875 19.4742L25.35 26.4367C25.3129 26.6022 25.2343 26.7556 25.1216 26.8823C25.009 27.0091 24.8659 27.1051 24.7059 27.1614C24.5459 27.2176 24.3742 27.2323 24.207 27.2039C24.0398 27.1755 23.8825 27.1051 23.75 26.9992L20 23.9992" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#2DA5F3"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="fun-content">
                                                        <div className="fun-title">
                                                            <CountUp start={0} end={totalOrders} className='counter-number'/>
                                                            <p className="fun-text">Total Orders</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="fun-fact-card bg-primary-50">
                                                    <div className="fun-icon">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.2" d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z" fill="#FA8232"></path>
                                                            <path d="M9.5 13H22.5" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.5 17H22.5" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="fun-content">
                                                        <div className="fun-title">
                                                            <CountUp start={0} end={pendingOrders} className='counter-number'/>
                                                            <p className="fun-text">Pending Orders</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="fun-fact-card bg-success-50">
                                                    <div className="fun-icon">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.2" d="M9.2375 13.9258L5.3125 18.6258C5.21362 18.7411 5.14385 18.8785 5.10905 19.0264C5.07425 19.1743 5.07544 19.3284 5.1125 19.4758L6.65 26.4383C6.6871 26.6038 6.76569 26.7571 6.87837 26.8839C6.99105 27.0107 7.13412 27.1067 7.29412 27.1629C7.45413 27.2192 7.62581 27.2338 7.79303 27.2054C7.96024 27.1771 8.1175 27.1067 8.25 27.0008L12 24.0008C9.8 20.1758 9.0875 16.8133 9.2375 13.9258Z" fill="#2DA5F3"></path>
                                                            <path opacity="0.2" d="M22.6875 13.8379L26.6125 18.5504C26.7114 18.6658 26.7812 18.8031 26.816 18.9511C26.8508 19.099 26.8496 19.253 26.8125 19.4004L25.275 26.3504C25.2396 26.5169 25.1622 26.6717 25.0502 26.8C24.9382 26.9282 24.7953 27.0258 24.6351 27.0834C24.4749 27.141 24.3026 27.1567 24.1345 27.129C23.9665 27.1014 23.8083 27.0313 23.675 26.9254L19.925 23.9254C22.125 20.0879 22.8375 16.7254 22.6875 13.8379Z" fill="#2DA5F3"></path>
                                                            <path d="M18 28H14" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M15.375 2.47472C13 4.37472 5.06249 11.9747 12 23.9997H20C26.8 11.9747 18.975 4.38722 16.625 2.47472C16.4496 2.32827 16.2284 2.24805 16 2.24805C15.7715 2.24805 15.5503 2.32827 15.375 2.47472Z" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.2375 13.9258L5.3125 18.6258C5.21362 18.7411 5.14385 18.8785 5.10905 19.0264C5.07425 19.1743 5.07544 19.3284 5.1125 19.4758L6.65 26.4383C6.6871 26.6038 6.76569 26.7571 6.87837 26.8839C6.99105 27.0107 7.13412 27.1067 7.29412 27.1629C7.45413 27.2192 7.62581 27.2338 7.79303 27.2054C7.96024 27.1771 8.1175 27.1067 8.25 27.0008L12 24.0008" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M22.6875 13.8242L26.6875 18.6242C26.7864 18.7396 26.8561 18.877 26.8909 19.0249C26.9258 19.1728 26.9246 19.3269 26.8875 19.4742L25.35 26.4367C25.3129 26.6022 25.2343 26.7556 25.1216 26.8823C25.009 27.0091 24.8659 27.1051 24.7059 27.1614C24.5459 27.2176 24.3742 27.2323 24.207 27.2039C24.0398 27.1755 23.8825 27.1051 23.75 26.9992L20 23.9992" stroke="#2DA5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#2DA5F3"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="fun-content">
                                                        <div className="fun-title">
                                                            <CountUp start={0} end={completedOrders} className='counter-number'/>
                                                            <p className="fun-text">Completed Orders</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-card">
                                <div className="payment-card-head">
                                    <h6 className="payment-title">Payment Option</h6>
                                    <button data-bs-toggle='modal' className="payment-add-btn" onClick={() => setShowCardModal(true)}>
                                        Add Card 
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.125 10H16.875" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <PaymentCardModal showCardModal={showCardModal} setShowCardModal={setShowCardModal} />
                                </div>
                                <div className="payment-card-body">
                                    <div className="bank-card">
                                        <div className="bank-card-head">
                                            <div className="card-amount">HKD $2628.3</div>
                                            <div className="card-option">
                                                <div className="option-dots">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="bank-card-body">
                                            <h6>Card Number</h6>
                                            <div className="card-num">
                                                <span className="num">***&nbsp;***&nbsp;***&nbsp; 0807&nbsp;</span>
                                                <span className="clipboard">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.5">
                                                            <path d="M13.125 13.125H16.875V3.125H6.875V6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M13.125 6.875H3.125V16.875H13.125V6.875Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bank-card-footer">
                                            <div className="card-name">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_678_17105)">
                                                        <path d="M17.3404 26.2704H14.0764L16.1163 13.7338H19.3806L17.3404 26.2704ZM11.3306 13.7338L8.21894 22.3565L7.85073 20.4997L7.85106 20.5004L6.7528 14.8626C6.7528 14.8626 6.62001 13.7338 5.20451 13.7338H0.0603014L-6.10352e-05 13.9461C-6.10352e-05 13.9461 1.57305 14.2733 3.4141 15.379L6.24979 26.2707H9.65053L14.8434 13.7338H11.3306V13.7338ZM37.003 26.2704H40L37.387 13.7334H34.7633C33.5517 13.7334 33.2566 14.6677 33.2566 14.6677L28.3887 26.2704H31.7911L32.4715 24.4082H36.6207L37.003 26.2704ZM33.4115 21.8358L35.1264 17.1443L36.0912 21.8358H33.4115ZM28.6439 16.7485L29.1097 14.0564C29.1097 14.0564 27.6724 13.5098 26.174 13.5098C24.5543 13.5098 20.7079 14.2177 20.7079 17.66C20.7079 20.8988 25.2223 20.939 25.2223 22.6402C25.2223 24.3415 21.173 24.0366 19.8367 22.9639L19.3514 25.7788C19.3514 25.7788 20.8088 26.4867 23.0355 26.4867C25.2629 26.4867 28.6231 25.3334 28.6231 22.1946C28.6231 18.935 24.0681 18.6315 24.0681 17.2143C24.0684 15.7968 27.2472 15.9789 28.6439 16.7485V16.7485Z" fill="white"></path>
                                                        <path d="M7.85107 20.503L6.75281 14.8651C6.75281 14.8651 6.62001 13.7363 5.20451 13.7363H0.0602712L-9.15527e-05 13.9486C-9.15527e-05 13.9486 2.47243 14.461 4.84401 16.3809C7.11163 18.2159 7.85107 20.503 7.85107 20.503Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_678_17105">
                                                            <rect width="40" height="40" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="card-owner">
                                                <h6>Dominic Sham</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bank-card">
                                        <div className="bank-card-head">
                                            <div className="card-amount">HKD $3459.6</div>
                                            <div className="card-option">
                                                <div className="option-dots">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="bank-card-body">
                                            <h6>Card Number</h6>
                                            <div className="card-num">
                                                <span className="num">***&nbsp;***&nbsp;***&nbsp; 0807&nbsp;</span>
                                                <span className="clipboard">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.5">
                                                            <path d="M13.125 13.125H16.875V3.125H6.875V6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M13.125 6.875H3.125V16.875H13.125V6.875Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bank-card-footer">
                                            <div className="card-name">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_678_17088)">
                                                        <path d="M39.2118 35.0794V35.1591H39.2864C39.3004 35.1594 39.3142 35.1559 39.3264 35.149C39.3312 35.1455 39.3352 35.141 39.3378 35.1356C39.3404 35.1303 39.3416 35.1244 39.3414 35.1185C39.3416 35.1127 39.3404 35.1069 39.3378 35.1017C39.3351 35.0965 39.3312 35.0921 39.3264 35.0888C39.3143 35.0816 39.3004 35.0781 39.2864 35.0786H39.2118V35.0794ZM39.2872 35.0231C39.3192 35.0211 39.3508 35.0303 39.3768 35.049C39.3872 35.0575 39.3955 35.0683 39.4009 35.0805C39.4064 35.0928 39.4089 35.1061 39.4082 35.1195C39.4087 35.131 39.4067 35.1425 39.4023 35.1532C39.398 35.1639 39.3914 35.1735 39.383 35.1814C39.363 35.1988 39.3378 35.2092 39.3114 35.2111L39.4114 35.3247H39.3344L39.2424 35.2119H39.2126V35.3247H39.1482V35.0233H39.2882L39.2872 35.0231ZM39.2672 35.4287C39.301 35.429 39.3344 35.4222 39.3654 35.4088C39.3952 35.396 39.4224 35.3776 39.4454 35.3548C39.4684 35.3319 39.4868 35.3049 39.4996 35.2751C39.5258 35.2119 39.5258 35.141 39.4996 35.0778C39.4866 35.0482 39.4683 35.0211 39.4454 34.9982C39.4224 34.9753 39.3952 34.957 39.3654 34.9442C39.3342 34.9314 39.3008 34.9251 39.2672 34.9254C39.2329 34.9251 39.199 34.9315 39.1672 34.9442C39.1367 34.9567 39.1089 34.9751 39.0854 34.9982C39.05 35.0343 39.0261 35.08 39.0166 35.1296C39.0071 35.1792 39.0124 35.2305 39.032 35.2771C39.0442 35.307 39.0623 35.3341 39.0854 35.3568C39.1089 35.3798 39.1367 35.3982 39.1672 35.4108C39.1988 35.4242 39.2328 35.431 39.2672 35.4307V35.4287ZM39.2672 34.8529C39.3551 34.8528 39.4395 34.8872 39.5022 34.9485C39.5324 34.978 39.5565 35.0132 39.573 35.052C39.5901 35.0918 39.5989 35.1346 39.5989 35.178C39.5989 35.2213 39.5901 35.2641 39.573 35.304C39.5561 35.3426 39.5321 35.3776 39.5022 35.4074C39.4715 35.4367 39.4358 35.4603 39.3968 35.4771C39.3558 35.4944 39.3117 35.5033 39.2672 35.503C39.2221 35.5033 39.1775 35.4945 39.136 35.4771C39.0965 35.4607 39.0605 35.437 39.0298 35.4074C38.9999 35.3765 38.9762 35.3403 38.96 35.3006C38.9429 35.2608 38.9341 35.2179 38.9341 35.1746C38.9341 35.1313 38.9429 35.0884 38.96 35.0486C38.9765 35.0098 39.0006 34.9746 39.0308 34.9452C39.0611 34.915 39.0972 34.8913 39.137 34.8754C39.1785 34.858 39.2231 34.8492 39.2682 34.8495L39.2672 34.8529ZM8.6432 33.6888C8.6432 33.114 9.02119 32.6419 9.63899 32.6419C10.2294 32.6419 10.6278 33.0937 10.6278 33.6888C10.6278 34.2839 10.2294 34.7358 9.63899 34.7358C9.02119 34.7358 8.6432 34.2636 8.6432 33.6888ZM11.3008 33.6888V32.0532H10.587V32.4516C10.3606 32.1572 10.0172 31.9725 9.55019 31.9725C8.6302 31.9725 7.9082 32.6913 7.9082 33.6896C7.9082 34.688 8.6298 35.4068 9.55019 35.4068C10.017 35.4068 10.3606 35.2219 10.587 34.9276V35.3247H11.3V33.6888H11.3008ZM35.4192 33.6888C35.4192 33.114 35.7972 32.6419 36.4152 32.6419C37.0062 32.6419 37.404 33.0937 37.404 33.6888C37.404 34.2839 37.0062 34.7358 36.4152 34.7358C35.7974 34.7358 35.4192 34.2636 35.4192 33.6888ZM38.0776 33.6888V30.7402H37.3632V32.4516C37.1368 32.1572 36.7934 31.9725 36.3264 31.9725C35.4064 31.9725 34.6844 32.6913 34.6844 33.6896C34.6844 34.688 35.406 35.4068 36.3264 35.4068C36.7934 35.4068 37.1368 35.2219 37.3632 34.9276V35.3247H38.0776V33.6888ZM20.16 32.6082C20.62 32.6082 20.9154 32.8955 20.9908 33.4013H19.2876C19.3638 32.9292 19.6516 32.6082 20.1602 32.6082H20.16ZM20.1744 31.9707C19.2124 31.9707 18.5394 32.668 18.5394 33.6878C18.5394 34.7276 19.2394 35.405 20.2222 35.405C20.7166 35.405 21.1694 35.2821 21.5678 34.9468L21.218 34.4198C20.9428 34.6389 20.5924 34.7619 20.263 34.7619C19.803 34.7619 19.3842 34.5497 19.2812 33.961H21.7186C21.7256 33.8725 21.7328 33.7833 21.7328 33.6876C21.7256 32.6682 21.0928 31.9705 20.174 31.9705L20.1744 31.9707ZM28.792 33.6876C28.792 33.1129 29.17 32.6407 29.7878 32.6407C30.3782 32.6407 30.7766 33.0925 30.7766 33.6876C30.7766 34.2827 30.3782 34.7346 29.7878 34.7346C29.17 34.7346 28.7918 34.2624 28.7918 33.6876H28.792ZM31.4494 33.6876V32.0532H30.736V32.4516C30.5088 32.1572 30.1662 31.9725 29.6992 31.9725C28.7792 31.9725 28.0572 32.6913 28.0572 33.6896C28.0572 34.688 28.7788 35.4068 29.6992 35.4068C30.1662 35.4068 30.5088 35.2219 30.736 34.9276V35.3247H31.4496V33.6888L31.4494 33.6876ZM24.761 33.6876C24.761 34.6796 25.4542 35.4048 26.5122 35.4048C27.0066 35.4048 27.336 35.2952 27.6922 35.0149L27.3494 34.4401C27.0814 34.632 26.8 34.7346 26.4894 34.7346C25.9196 34.7276 25.5006 34.3172 25.5006 33.6876C25.5006 33.0581 25.9196 32.6479 26.4894 32.6407C26.7992 32.6407 27.0806 32.7433 27.3494 32.9351L27.6922 32.3604C27.3354 32.0801 27.006 31.9705 26.5122 31.9705C25.4542 31.9705 24.761 32.6955 24.761 33.6876ZM33.963 31.9705C33.5512 31.9705 33.283 32.1623 33.0976 32.4496V32.0532H32.3902V35.3229H33.1048V33.49C33.1048 32.9489 33.3382 32.6483 33.8048 32.6483C33.9576 32.6461 34.1093 32.674 34.2512 32.7305L34.4712 32.0603C34.3132 31.9984 34.1072 31.9711 33.9626 31.9711L33.963 31.9705ZM14.8298 32.3131C14.4864 32.0876 14.0132 31.9711 13.4912 31.9711C12.6596 31.9711 12.1242 32.3681 12.1242 33.0178C12.1242 33.551 12.5228 33.8799 13.2568 33.9825L13.594 34.0303C13.9854 34.0851 14.1702 34.1877 14.1702 34.3724C14.1702 34.6252 13.9102 34.7694 13.422 34.7694C12.9276 34.7694 12.5708 34.6121 12.3302 34.4274L11.9948 34.9818C12.3862 35.2691 12.8806 35.4062 13.416 35.4062C14.364 35.4062 14.9134 34.9615 14.9134 34.3389C14.9134 33.7641 14.481 33.4635 13.7666 33.3609L13.4302 33.3123C13.1212 33.2724 12.8736 33.2105 12.8736 32.9913C12.8736 32.7522 13.107 32.6084 13.4986 32.6084C13.9176 32.6084 14.3232 32.7658 14.522 32.8887L14.831 32.3139L14.8298 32.3131ZM24.04 31.9717C23.6282 31.9717 23.36 32.1635 23.1754 32.4508V32.0532H22.468V35.3229H23.1818V33.49C23.1818 32.9489 23.4152 32.6483 23.8818 32.6483C24.0346 32.6461 24.1863 32.674 24.3282 32.7305L24.5482 32.0603C24.3902 31.9984 24.1842 31.9711 24.0396 31.9711L24.04 31.9717ZM17.9488 32.0532H16.7816V31.0612H16.06V32.0532H15.3942V32.703H16.06V34.1947C16.06 34.9533 16.3556 35.4052 17.2 35.4052C17.5098 35.4052 17.8666 35.3096 18.093 35.1524L17.8868 34.5435C17.6738 34.6664 17.4404 34.7284 17.2548 34.7284C16.898 34.7284 16.7816 34.5093 16.7816 34.1811V32.7036H17.9488V32.0532ZM7.277 35.3237V33.2716C7.277 32.4988 6.7826 31.9788 5.9856 31.9719C5.5666 31.9649 5.1344 32.0948 4.8318 32.5536C4.6054 32.191 4.2486 31.9719 3.747 31.9719C3.3964 31.9719 3.0538 32.0745 2.7856 32.4574V32.0532H2.0712V35.3229H2.7912V33.5099C2.7912 32.9423 3.1072 32.6407 3.5952 32.6407C4.0692 32.6407 4.309 32.9485 4.309 33.5027V35.3225H5.0306V33.5095C5.0306 32.9419 5.36 32.6403 5.8338 32.6403C6.3212 32.6403 6.5538 32.9481 6.5538 33.5023V35.3221L7.277 35.3237Z" fill="white"></path>
                                                        <path d="M39.6188 24.4469V23.9688H39.4938L39.3492 24.2969L39.2054 23.9688H39.08V24.4469H39.1688V24.0867L39.304 24.3975H39.396L39.5312 24.0859V24.4469H39.6192H39.6188ZM38.8258 24.4469V24.0506H38.9858V23.9699H38.577V24.0506H38.737V24.4469H38.825H38.8258Z" fill="white"></path>
                                                        <path d="M25.4114 26.4978H14.5942V7.13281H25.4116L25.4114 26.4978Z" fill="white" fillOpacity="0.7"></path>
                                                        <path d="M15.28 16.8157C15.28 12.8875 17.1264 9.38829 20.0016 7.13322C17.8252 5.42373 15.1334 4.49593 12.3618 4.50001C5.5344 4.50001 0 10.0139 0 16.8157C0 23.6176 5.5344 29.1314 12.3618 29.1314C15.1334 29.1356 17.8254 28.2078 20.0018 26.4982C17.1268 24.2436 15.28 20.7441 15.28 16.8157Z" fill="white"></path>
                                                        <path d="M40.005 16.8157C40.005 23.6176 34.4706 29.1315 27.6432 29.1315C24.8713 29.1355 22.179 28.2077 20.0022 26.4982C22.8782 24.2432 24.7246 20.7441 24.7246 16.8157C24.7246 12.8873 22.8782 9.38829 20.0022 7.13322C22.179 5.42378 24.8711 4.49601 27.643 4.50001C34.4704 4.50001 40.0048 10.0139 40.0048 16.8157" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_678_17088">
                                                            <rect width="40" height="40" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="card-owner">
                                                <h6>Dominic Sham</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bank-card">
                                        <div className="bank-card-head">
                                            <div className="card-amount">HKD $4048.7</div>
                                            <div className="card-option">
                                                <div className="option-dots">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="bank-card-body">
                                            <h6>Card Number</h6>
                                            <div className="card-num">
                                                <span className="num">***&nbsp;***&nbsp;***&nbsp; 0807&nbsp;</span>
                                                <span className="clipboard">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.5">
                                                            <path d="M13.125 13.125H16.875V3.125H6.875V6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M13.125 6.875H3.125V16.875H13.125V6.875Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bank-card-footer">
                                            <div className="card-name">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_678_17088)">
                                                        <path d="M39.2118 35.0794V35.1591H39.2864C39.3004 35.1594 39.3142 35.1559 39.3264 35.149C39.3312 35.1455 39.3352 35.141 39.3378 35.1356C39.3404 35.1303 39.3416 35.1244 39.3414 35.1185C39.3416 35.1127 39.3404 35.1069 39.3378 35.1017C39.3351 35.0965 39.3312 35.0921 39.3264 35.0888C39.3143 35.0816 39.3004 35.0781 39.2864 35.0786H39.2118V35.0794ZM39.2872 35.0231C39.3192 35.0211 39.3508 35.0303 39.3768 35.049C39.3872 35.0575 39.3955 35.0683 39.4009 35.0805C39.4064 35.0928 39.4089 35.1061 39.4082 35.1195C39.4087 35.131 39.4067 35.1425 39.4023 35.1532C39.398 35.1639 39.3914 35.1735 39.383 35.1814C39.363 35.1988 39.3378 35.2092 39.3114 35.2111L39.4114 35.3247H39.3344L39.2424 35.2119H39.2126V35.3247H39.1482V35.0233H39.2882L39.2872 35.0231ZM39.2672 35.4287C39.301 35.429 39.3344 35.4222 39.3654 35.4088C39.3952 35.396 39.4224 35.3776 39.4454 35.3548C39.4684 35.3319 39.4868 35.3049 39.4996 35.2751C39.5258 35.2119 39.5258 35.141 39.4996 35.0778C39.4866 35.0482 39.4683 35.0211 39.4454 34.9982C39.4224 34.9753 39.3952 34.957 39.3654 34.9442C39.3342 34.9314 39.3008 34.9251 39.2672 34.9254C39.2329 34.9251 39.199 34.9315 39.1672 34.9442C39.1367 34.9567 39.1089 34.9751 39.0854 34.9982C39.05 35.0343 39.0261 35.08 39.0166 35.1296C39.0071 35.1792 39.0124 35.2305 39.032 35.2771C39.0442 35.307 39.0623 35.3341 39.0854 35.3568C39.1089 35.3798 39.1367 35.3982 39.1672 35.4108C39.1988 35.4242 39.2328 35.431 39.2672 35.4307V35.4287ZM39.2672 34.8529C39.3551 34.8528 39.4395 34.8872 39.5022 34.9485C39.5324 34.978 39.5565 35.0132 39.573 35.052C39.5901 35.0918 39.5989 35.1346 39.5989 35.178C39.5989 35.2213 39.5901 35.2641 39.573 35.304C39.5561 35.3426 39.5321 35.3776 39.5022 35.4074C39.4715 35.4367 39.4358 35.4603 39.3968 35.4771C39.3558 35.4944 39.3117 35.5033 39.2672 35.503C39.2221 35.5033 39.1775 35.4945 39.136 35.4771C39.0965 35.4607 39.0605 35.437 39.0298 35.4074C38.9999 35.3765 38.9762 35.3403 38.96 35.3006C38.9429 35.2608 38.9341 35.2179 38.9341 35.1746C38.9341 35.1313 38.9429 35.0884 38.96 35.0486C38.9765 35.0098 39.0006 34.9746 39.0308 34.9452C39.0611 34.915 39.0972 34.8913 39.137 34.8754C39.1785 34.858 39.2231 34.8492 39.2682 34.8495L39.2672 34.8529ZM8.6432 33.6888C8.6432 33.114 9.02119 32.6419 9.63899 32.6419C10.2294 32.6419 10.6278 33.0937 10.6278 33.6888C10.6278 34.2839 10.2294 34.7358 9.63899 34.7358C9.02119 34.7358 8.6432 34.2636 8.6432 33.6888ZM11.3008 33.6888V32.0532H10.587V32.4516C10.3606 32.1572 10.0172 31.9725 9.55019 31.9725C8.6302 31.9725 7.9082 32.6913 7.9082 33.6896C7.9082 34.688 8.6298 35.4068 9.55019 35.4068C10.017 35.4068 10.3606 35.2219 10.587 34.9276V35.3247H11.3V33.6888H11.3008ZM35.4192 33.6888C35.4192 33.114 35.7972 32.6419 36.4152 32.6419C37.0062 32.6419 37.404 33.0937 37.404 33.6888C37.404 34.2839 37.0062 34.7358 36.4152 34.7358C35.7974 34.7358 35.4192 34.2636 35.4192 33.6888ZM38.0776 33.6888V30.7402H37.3632V32.4516C37.1368 32.1572 36.7934 31.9725 36.3264 31.9725C35.4064 31.9725 34.6844 32.6913 34.6844 33.6896C34.6844 34.688 35.406 35.4068 36.3264 35.4068C36.7934 35.4068 37.1368 35.2219 37.3632 34.9276V35.3247H38.0776V33.6888ZM20.16 32.6082C20.62 32.6082 20.9154 32.8955 20.9908 33.4013H19.2876C19.3638 32.9292 19.6516 32.6082 20.1602 32.6082H20.16ZM20.1744 31.9707C19.2124 31.9707 18.5394 32.668 18.5394 33.6878C18.5394 34.7276 19.2394 35.405 20.2222 35.405C20.7166 35.405 21.1694 35.2821 21.5678 34.9468L21.218 34.4198C20.9428 34.6389 20.5924 34.7619 20.263 34.7619C19.803 34.7619 19.3842 34.5497 19.2812 33.961H21.7186C21.7256 33.8725 21.7328 33.7833 21.7328 33.6876C21.7256 32.6682 21.0928 31.9705 20.174 31.9705L20.1744 31.9707ZM28.792 33.6876C28.792 33.1129 29.17 32.6407 29.7878 32.6407C30.3782 32.6407 30.7766 33.0925 30.7766 33.6876C30.7766 34.2827 30.3782 34.7346 29.7878 34.7346C29.17 34.7346 28.7918 34.2624 28.7918 33.6876H28.792ZM31.4494 33.6876V32.0532H30.736V32.4516C30.5088 32.1572 30.1662 31.9725 29.6992 31.9725C28.7792 31.9725 28.0572 32.6913 28.0572 33.6896C28.0572 34.688 28.7788 35.4068 29.6992 35.4068C30.1662 35.4068 30.5088 35.2219 30.736 34.9276V35.3247H31.4496V33.6888L31.4494 33.6876ZM24.761 33.6876C24.761 34.6796 25.4542 35.4048 26.5122 35.4048C27.0066 35.4048 27.336 35.2952 27.6922 35.0149L27.3494 34.4401C27.0814 34.632 26.8 34.7346 26.4894 34.7346C25.9196 34.7276 25.5006 34.3172 25.5006 33.6876C25.5006 33.0581 25.9196 32.6479 26.4894 32.6407C26.7992 32.6407 27.0806 32.7433 27.3494 32.9351L27.6922 32.3604C27.3354 32.0801 27.006 31.9705 26.5122 31.9705C25.4542 31.9705 24.761 32.6955 24.761 33.6876ZM33.963 31.9705C33.5512 31.9705 33.283 32.1623 33.0976 32.4496V32.0532H32.3902V35.3229H33.1048V33.49C33.1048 32.9489 33.3382 32.6483 33.8048 32.6483C33.9576 32.6461 34.1093 32.674 34.2512 32.7305L34.4712 32.0603C34.3132 31.9984 34.1072 31.9711 33.9626 31.9711L33.963 31.9705ZM14.8298 32.3131C14.4864 32.0876 14.0132 31.9711 13.4912 31.9711C12.6596 31.9711 12.1242 32.3681 12.1242 33.0178C12.1242 33.551 12.5228 33.8799 13.2568 33.9825L13.594 34.0303C13.9854 34.0851 14.1702 34.1877 14.1702 34.3724C14.1702 34.6252 13.9102 34.7694 13.422 34.7694C12.9276 34.7694 12.5708 34.6121 12.3302 34.4274L11.9948 34.9818C12.3862 35.2691 12.8806 35.4062 13.416 35.4062C14.364 35.4062 14.9134 34.9615 14.9134 34.3389C14.9134 33.7641 14.481 33.4635 13.7666 33.3609L13.4302 33.3123C13.1212 33.2724 12.8736 33.2105 12.8736 32.9913C12.8736 32.7522 13.107 32.6084 13.4986 32.6084C13.9176 32.6084 14.3232 32.7658 14.522 32.8887L14.831 32.3139L14.8298 32.3131ZM24.04 31.9717C23.6282 31.9717 23.36 32.1635 23.1754 32.4508V32.0532H22.468V35.3229H23.1818V33.49C23.1818 32.9489 23.4152 32.6483 23.8818 32.6483C24.0346 32.6461 24.1863 32.674 24.3282 32.7305L24.5482 32.0603C24.3902 31.9984 24.1842 31.9711 24.0396 31.9711L24.04 31.9717ZM17.9488 32.0532H16.7816V31.0612H16.06V32.0532H15.3942V32.703H16.06V34.1947C16.06 34.9533 16.3556 35.4052 17.2 35.4052C17.5098 35.4052 17.8666 35.3096 18.093 35.1524L17.8868 34.5435C17.6738 34.6664 17.4404 34.7284 17.2548 34.7284C16.898 34.7284 16.7816 34.5093 16.7816 34.1811V32.7036H17.9488V32.0532ZM7.277 35.3237V33.2716C7.277 32.4988 6.7826 31.9788 5.9856 31.9719C5.5666 31.9649 5.1344 32.0948 4.8318 32.5536C4.6054 32.191 4.2486 31.9719 3.747 31.9719C3.3964 31.9719 3.0538 32.0745 2.7856 32.4574V32.0532H2.0712V35.3229H2.7912V33.5099C2.7912 32.9423 3.1072 32.6407 3.5952 32.6407C4.0692 32.6407 4.309 32.9485 4.309 33.5027V35.3225H5.0306V33.5095C5.0306 32.9419 5.36 32.6403 5.8338 32.6403C6.3212 32.6403 6.5538 32.9481 6.5538 33.5023V35.3221L7.277 35.3237Z" fill="white"></path>
                                                        <path d="M39.6188 24.4469V23.9688H39.4938L39.3492 24.2969L39.2054 23.9688H39.08V24.4469H39.1688V24.0867L39.304 24.3975H39.396L39.5312 24.0859V24.4469H39.6192H39.6188ZM38.8258 24.4469V24.0506H38.9858V23.9699H38.577V24.0506H38.737V24.4469H38.825H38.8258Z" fill="white"></path>
                                                        <path d="M25.4114 26.4978H14.5942V7.13281H25.4116L25.4114 26.4978Z" fill="white" fillOpacity="0.7"></path>
                                                        <path d="M15.28 16.8157C15.28 12.8875 17.1264 9.38829 20.0016 7.13322C17.8252 5.42373 15.1334 4.49593 12.3618 4.50001C5.5344 4.50001 0 10.0139 0 16.8157C0 23.6176 5.5344 29.1314 12.3618 29.1314C15.1334 29.1356 17.8254 28.2078 20.0018 26.4982C17.1268 24.2436 15.28 20.7441 15.28 16.8157Z" fill="white"></path>
                                                        <path d="M40.005 16.8157C40.005 23.6176 34.4706 29.1315 27.6432 29.1315C24.8713 29.1355 22.179 28.2077 20.0022 26.4982C22.8782 24.2432 24.7246 20.7441 24.7246 16.8157C24.7246 12.8873 22.8782 9.38829 20.0022 7.13322C22.179 5.42378 24.8711 4.49601 27.643 4.50001C34.4704 4.50001 40.0048 10.0139 40.0048 16.8157" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_678_17088">
                                                            <rect width="40" height="40" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="card-owner">
                                                <h6>Dominic Sham</h6>
                                            </div>
                                        </div>
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

export default Dashboard