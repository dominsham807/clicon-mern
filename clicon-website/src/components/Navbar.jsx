import React, { useRef, useEffect, useState } from 'react'
import { FaAngleDown, FaAngleLeft, FaChevronRight, FaEye, FaFacebook, FaInstagram, FaPinterest, FaTimes, FaTwitter, FaYoutube } from "react-icons/fa"
import { CiCircleInfo, CiLocationOn } from "react-icons/ci"
import { FaHeadphones, FaCodeCompare } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { IoMdMenu } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/auth'
import { loginUser, logoutUser } from '../redux/reducers/userReducer.js'
import { calculatePrice } from '../redux/reducers/cartReducer.js'
import Logo from "/logo.png" 
import { BACKEND_URL } from '../constants'

import "../styles/navbar.css"


const Navbar = () => { 
    const location = useLocation() 

    const { user } = useSelector((state) => state.userReducer)
    const { cartItems, quantity, subtotal, totalPrice, shippingCharge, discountPercentage } = useSelector((state) => state.cartReducer)
    console.log(subtotal)
    console.log(totalPrice)

    const [auth, setAuth] = useAuth()

    const dispatch = useDispatch()
    const navigate = useNavigate() 
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [languageOpen, setLanguageOpen] = useState(false)
    const [currencyOpen, setCurrencyOpen] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(false) 
    
    const [selectedLanguage, setSelectedLanguage] = useState("English") 

    const [selectedCurrency, setSelectedCurrency] = useState("USD") 

    const [showMobileMenu, setShowMobileMenu] = useState(false) 

    const [mobileActiveItem, setMobileActiveItem] = useState("") 

    const [showCart, setShowCart] = useState(false)
    const [showWishlist, setShowWishlist] = useState(false)
    const [showAccount, setShowAccount] = useState(false) 
    const [showPassword, setShowPassword] = useState(false) 

    const handleSignin = async(e) => {
        e.preventDefault()

        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/auth/login`, {
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
                window.location.reload();
                toast.success(res.data.message)
                navigate("/")
            } 
        } catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem("auth")
        dispatch(logoutUser())
        window.location.reload();
        navigate("/")
        toast.success("Logout success")
    }
 
    let languageRef = useRef()
    let currencyRef = useRef()
    let categoryRef = useRef()

    let cartRef = useRef()
    let wishlistRef = useRef() 
    let accountRef = useRef()

    let mobileRef = useRef()
    let overlayRef = useRef()
    
    const languageHandler = (e) => { 
        if(languageRef.current && !languageRef.current.contains(e.target) && e.target !== languageRef.current){
            setLanguageOpen(false)
        }
    }

    const currencyHandler = (e) => { 
        if(currencyRef.current && !currencyRef.current.contains(e.target) && e.target !== currencyRef.current){
            setCurrencyOpen(false)
        }
    }

    const categoryHandler = (e) => {
        if(categoryRef.current && !categoryRef.current.contains(e.target) && e.target !== categoryRef.current){
            setCategoryOpen(false)
        }
    }

    const mobileMenuHandler = (e) => {  
        if(overlayRef.current.contains(e.target) && e.target === overlayRef.current){
            setShowMobileMenu(false)
        }
    }

    const cartHandler = (e) => {
        if(cartRef.current && !cartRef.current.contains(e.target) && e.target !== cartRef.current){
            setShowCart(false)
        }
    }

    const wishlistHandler = (e) => {
        if(wishlistRef.current && !wishlistRef.current.contains(e.target) && e.target !== wishlistRef.current){
            setShowWishlist(false)
        }
    }

    const accountHandler = (e) => {
        if(accountRef.current && !accountRef.current.contains(e.target) && e.target !== accountRef.current){
            setShowAccount(false)
        }
    }

    useEffect(() => { 
        if(!showMobileMenu){
            setMobileActiveItem("")
        }

        document.addEventListener("click", languageHandler)
        document.addEventListener("click", currencyHandler)
        document.addEventListener("click", categoryHandler) 
        document.addEventListener("click", cartHandler) 
        document.addEventListener("click", wishlistHandler)
        document.addEventListener("click", accountHandler)
        document.addEventListener("click", mobileMenuHandler)

        return() =>{
            document.removeEventListener("click", languageHandler)
            document.removeEventListener("click", currencyHandler)
            document.removeEventListener("click", categoryHandler) 
            document.removeEventListener("click", cartHandler) 
            document.removeEventListener("click", wishlistHandler)
            document.removeEventListener("click", accountHandler)
            document.removeEventListener("click", mobileMenuHandler)
        }
    }, [languageOpen, currencyOpen, showCart, showWishlist, showAccount, showMobileMenu])

    return (
        <>
        <div className='top-nav'>
            <div className="container topnav-wrapper">
                <div className="topnav-text">
                    Welcome to Clicon online eCommerce store.
                </div>
                <div className="topnav-content">
                    <div className="topnav-links">
                        <ul>
                            <li>Follow us:</li>
                            <li className='topnav-icon'><FaTwitter /></li>
                            <li className='topnav-icon'><FaFacebook /></li>
                            <li className='topnav-icon'><FaPinterest /></li>
                            <li className='topnav-icon'><FaYoutube /></li>
                            <li className='topnav-icon'><FaInstagram /></li>
                        </ul>
                    </div>
                    <div className="switcher-language">
                        <div className="nice-select">
                            <div ref={languageRef}>
                                <div onClick={() => setLanguageOpen(!languageOpen)}>
                                    <span className="current">{selectedLanguage.substring(0, 3).toUpperCase()}</span>
                                    <FaAngleDown className={`arrow ${languageOpen && 'active'}`} />
                                </div> 
                                {languageOpen && (
                                    <ul className={`nice-select-list `}>
                                        <li className={selectedLanguage === "English" && "active"} onClick={() => setSelectedLanguage("English")}>English</li>
                                        <li className={selectedLanguage === "Mandarin" && "active"} onClick={() => setSelectedLanguage("Mandarin")}>Mandarin</li>
                                        <li className={selectedLanguage === "Russian" && "active"} onClick={() => setSelectedLanguage("Russian")}>Russian</li>
                                    </ul>
                                )}  
                            </div> 
                           
                        </div>
                    </div>
                    <div className="switcher-currency">
                        <div className="nice-select">
                            <div ref={currencyRef}>
                                <div onClick={() => setCurrencyOpen(!currencyOpen)}>
                                    <span className="current">{selectedCurrency}</span>
                                    <FaAngleDown className={`arrow ${currencyOpen && 'active'}`}/>
                                </div> 
                                {currencyOpen && (
                                    <ul className="nice-select-list currency" >
                                        <li className={selectedCurrency === "USD" && "active"} onClick={() => setSelectedCurrency("USD")}>Dollar (USD)</li>
                                        <li className={selectedCurrency === "EUR" && "active"} onClick={() => setSelectedCurrency("EUR")}>Euro (EUR)</li> 
                                    </ul> 
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-nav">
            <div className="container bottomnav-wrapper">
                <a href='/' className="bottomnav-logo">
                    <img src={Logo} alt="" />
                </a>
                <div className="bottomnav-search">
                    <form className='search-form'>
                        <input type="text" className='form-control search-input' placeholder='Search for products...' />
                        <div className="icon">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813
                                        3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M14.2031 13.7031L18 17.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </form>
                </div>
                <div className="bottomnav-links">
                    <div className="cart">
                        <div ref={cartRef}>
                            <div className="cart-btn" onClick={() => setShowCart(!showCart)}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z" fill="currentColor"></path>
                                    <path d="M23 29C24.1046 29 25 28.1046 25 27C25 25.8954 24.1046 25 23 25C21.8954 25 21 25.8954 21 27C21 28.1046 21.8954 29 23
                                                            29Z" fill="currentColor"></path>
                                    <path d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875
                                                            22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625
                                                            4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span className="cart-amount">2</span>
                            </div>
                            <div className={`cart-popup ${showCart ? 'active' : ""}`}>
                                <div className="popup-header">
                                    <h6 className="title">Shopping Cart <span>({cartItems?.length})</span></h6>
                                </div>
                                <div className="popup-body"> 
                                    {cartItems.map((item, index) => (
                                        <div className="cart-single" key={index}>
                                            <div className="cart-image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="cart-item">
                                                <p className="cart-product-name">{item.name}</p>
                                                <div className="cart-price">
                                                    <span className="count">{item.quantity} x</span>
                                                    <span className="price">${item.price}</span>
                                                </div> 
                                            </div> 
                                            <div className="cart-delete">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5 3.5L3.5 12.5" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12.5 12.5L3.5 3.5" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div> 
                                    ))}  
                                </div>
                                <div className="popup-subtotal">
                                    <div className="subtotal-text">Subtotal</div>
                                    <div className="subtotal-price">HKD ${subtotal}</div>
                                </div>
                                <div className="popup-subtotal">
                                    <div className="subtotal-text">Shipping Charge</div>
                                    <div className="subtotal-price">HKD ${shippingCharge}</div>
                                </div>
                                <div className="popup-subtotal">
                                    <div className="subtotal-text">Total Price</div>
                                    <div className="subtotal-price">HKD ${totalPrice}</div>
                                </div>
                                <div className="cart-button-group">
                                    <button type='submit' className="checkout-btn">
                                        Checkout 
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.625 10H17.375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <a className="view-cart-btn">
                                        View Cart
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div className="wishlist">
                        <div ref={wishlistRef}>
                            <div className="wishlist-button" onClick={() => setShowWishlist(!showWishlist)} >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525
                                        5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001C16.5779 7.61296
                                        17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267
                                        7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div> 
                            <div className={`cart-popup ${showWishlist ? 'active' : ""}`}>
                                <div className="popup-header">
                                    <h6 className="title">Wishlist <span>(02)</span></h6>
                                </div>
                                <div className="popup-body"> 
                                    <div className="cart-single">
                                        <div className="cart-image">
                                            <img src="https://clicon-html.netlify.app/image/product/product-43.png" alt="" />
                                        </div>
                                        <div className="cart-item">
                                            <p className="cart-product-name">Canon EOS 1500D DSLR Camera Body+ 18-55 mm</p>
                                            <div className="cart-price">
                                                <span className="count">1 x</span>
                                                <span className="price">$1,500</span>
                                            </div> 
                                        </div> 
                                        <div className="cart-delete">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 3.5L3.5 12.5" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.5 12.5L3.5 3.5" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div> 
                                    <div className="cart-single">
                                        <div className="cart-image">
                                            <img src="https://clicon-html.netlify.app/image/product/product-43.png" alt="" />
                                        </div>
                                        <div className="cart-item">
                                            <p className="cart-product-name">Canon EOS 1500D DSLR Camera Body+ 18-55 mm</p>
                                            <div className="cart-price">
                                                <span className="count">1 x</span>
                                                <span className="price">$1,500</span>
                                            </div> 
                                        </div> 
                                        <div className="cart-delete">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 3.5L3.5 12.5" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.5 12.5L3.5 3.5" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div> 
                                </div> 
                                <div className="cart-button-group">
                                    <a className="view-cart-btn">
                                        View Wishlist
                                    </a>
                                </div>
                            </div> 
                        </div>  
                    </div> 

                    <div className="account">
                        <div ref={accountRef}>
                            <div className="account-btn" onClick={() => setShowAccount(!showAccount)} ref={accountRef}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                                    <path d="M3.875 27.0001C5.10367 24.8716 6.87104 23.104 8.99944 21.875C11.1278 20.646 13.5423 19.999 16 19.999C18.4577 19.999 20.8722 20.646 23.0006 21.875C25.129 23.104 26.8963 24.8716 28.125 27.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div className={`account-popup ${showAccount ? 'active' : ""}`}>
                                <div className="popup-login-header">
                                    {user ? <h6 className='title'>Welcome {user?.lastName}!</h6> : <h6 className="title">Login to your account</h6>}
                                </div>
                                {user ? (
                                    <div className="popup-window">  
                                        <a href='/settings' className="btn btn-primary w-100">
                                            Settings
                                        </a>
                                        <button className="btn btn-primary w-100" onClick={handleLogout}>
                                            Logout
                                        </button> 
                                    </div> 
                                ):(
                                    <div className="popup-form">
                                        <form onSubmit={handleSignin}>
                                            <div className="form-group">
                                                <label htmlFor="email" className='form-email'>Email Address</label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' id='email' placeholder='example@gmail.com' />
                                            </div>
                                            <div className="form-group password">
                                                <label htmlFor="password" className='form-password'>Password</label>
                                                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='form-control password' id='password' placeholder='Your Password' />
                                                <FaEye onClick={() => setShowPassword(!showPassword)} className='password-eye' />
                                            </div>
                                            <button type='submit' className="btn btn-primary w-100 login-btn">
                                                Login
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.625 10H17.375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </form>
                                        <div className="form-bottom">
                                            <div className='bottom-text'>
                                                <p className="text">Don't have an account?</p>
                                            </div>
                                            <a href='/signup' className='btn btn-outline-primary w-100 create-account-btn'>
                                                Create Account
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> 
                    </div> 
                </div>
                <div className="mobile-menu" ref={mobileRef}>
                    <IoMdMenu className='mobile-menu-click' onClick={() => setShowMobileMenu(true)}/> 
                    <div className="menu-block-wrapper">
                        <div className={`menu-overlay ${showMobileMenu ? "active" : ""}`} ref={overlayRef}></div>
                        <div className={`menu-block ${showMobileMenu ? "active" : ""}`}>
                            <div className="mobile-menu-head"> 
                                <div className={`mobile-back ${mobileActiveItem !== "" ? "active" : ""}`}>
                                    <FaAngleLeft className='mobile-left-arrow' onClick={() => setMobileActiveItem("")}/>
                                </div>
                                <div className='current-menu-title'>{mobileActiveItem ? mobileActiveItem : ""}</div>
                                <div className="mobile-menu-close" onClick={() => setShowMobileMenu(false)}>
                                    ×
                                </div>
                            </div>
                            <ul className="mobile-main-menu">
                                <li className="nav-item">
                                    <a href="/" className="nav-link-item">Home</a>
                                </li>
                                <li className="nav-item">               
                                    <a href="/about" className="nav-link-item">About</a> 
                                </li>
                                <li className="nav-item nav-item-has-children">
                                    <a href='#' className="nav-link-item" onClick={(e) => {
                                        e.preventDefault()
                                        setMobileActiveItem("Categories")
                                    }}>
                                        Categories
                                        <FaChevronRight className='submenu-arrow-link' />
                                    </a>
                                    <ul className={`sub-menu ${mobileActiveItem === "Categories" ? "active" : ""}`}>
                                        <li className="sub-menu-item">
                                            <a href="/categories">Electronics</a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="/categories">Camera</a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="/categories">Smartphones</a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="/categories">Laptops</a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="/categories">Headphones</a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="/categories">TV</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link-item">Shop</a>
                                </li>
                                <li className="nav-item nav-item-has-children"> 
                                    <a href='#' className="nav-link-item" onClick={(e) => {
                                        e.preventDefault()
                                        setMobileActiveItem("Blog")
                                    }}>
                                        Blog
                                        <FaChevronRight className='submenu-arrow-link' />
                                    </a>
                                    <ul className={`sub-menu ${mobileActiveItem === "Blog" ? "active" : ""}`}>
                                        <li className="sub-menu-item">
                                            <a href="/blogs">Feedbacks</a>
                                        </li>
                                        <li className="sub-menu-item">
                                            <a href="/blogs">Comments</a>
                                        </li> 
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className="bottom-nav__2">
            <div className="container">
                <div className="bottom-nav__2-wrapper">
                    <div className="left-sidebar">
                        <div className="dropdown">
                            <div ref={categoryRef}>
                                <div className={`dropdown-toggle ${categoryOpen && 'active'}`} href='#' role='button' id='dropdownMenuLink' onClick={() => setCategoryOpen(!categoryOpen)}>
                                    All Categories 
                                    <FaAngleDown className={`arrow ${categoryOpen && 'active'}`} /> 
                                </div>
                                <ul className={`dropdown-menu ${categoryOpen && 'show'}`}>
                                    <li>
                                        <a href="/shop">Computer & Laptop</a>
                                    </li>
                                    <li>Computer Accessories</li>
                                    <li>SmartPhone</li>
                                    <li>Headphone</li>
                                    <li>Mobile Accessories</li>
                                    <li>Gaming Console</li>
                                    <li>Camera & Photo</li>
                                    <li>TV & Home Appliances</li>
                                    <li>Watches & Accessories</li>
                                    <li>GPS & Navigation</li>
                                    <li>Wearable Technologies</li>
                                </ul>
                            </div> 
                        </div>
                        <div className="left-items">
                            <ul>
                                <li className='single-item'>
                                    <a className={location.pathname === '/orders' ? "active" : ""} href="/orders">
                                        <CiLocationOn className='item-icon' />
                                        Track Order
                                    </a>
                                </li>
                                <li className="single-item">
                                    <a className={location.pathname === '/compare' ? "active" : ""} href="/compare"> 
                                        <FaCodeCompare className='item-icon' />
                                        Compare
                                    </a>
                                </li>
                                <li className="single-item">
                                    <a className={location.pathname === '/support' ? "active" : ""} href="/support"> 
                                        <FaHeadphones className='item-icon' />
                                        Customer Support
                                    </a>
                                </li>
                                <li className="single-item">
                                    <a href="#"> 
                                        <CiCircleInfo className='item-icon' />
                                        Need Help
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="enquiry">
                        <IoCall className='item-icon' />
                        +852-9091-8589
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Navbar