import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import axios from 'axios'
import BreadCrumb from '../components/BreadCrumb'
import { BACKEND_URL } from '../constants'
import { resetCart } from '../redux/reducers/cartReducer'

import "../styles/checkout.css"

const Checkout = () => {
    const { cartItems, quantity, subtotal, totalPrice, shippingCharge } = useSelector((state) => state.cartReducer)
    const { user } = useSelector((state) => state.userReducer)
    console.log(cartItems)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [companyName, setCompanyName] = useState("")

    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")

    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    const [paymentOption, setPaymentOption] = useState("") 
    const [cardNum, setCardNum] = useState("") 
    const [expiryDate, setExpiryDate] = useState("") 

    const [remark, setRemark] = useState("")

    const handleCheckout = async(e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/order`, {
                userId: user._id,
                firstName, lastName, email,
                phone: contact,
                shippingInfo: {
                    address: address,
                    city: city,
                    state: state,
                    paymentOption: paymentOption,
                    cardNum: cardNum 
                },
                quantity, subtotal, shippingCharge, totalPrice, cartItems
            })
            console.log(res)
            if(res?.data?.success){  
                toast.success(res.data.message)
                dispatch(resetCart())
                navigate("/checkout/success", {
                    state : {
                        orderId: res.data.order.orderId
                    }
                })
            } 
        } catch(error){
            console.log(error)
            toast.error("Order Failure")
        } 
    }

    return (
        <>
        <BreadCrumb parentSection={"Shopping Cart"} mainSection={"Checkout"} />
        <div className="checkout-body">
            <div className="container">
                <form onSubmit={handleCheckout}>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 order-lg-2">
                            <div className="order-summary">
                                <h6 className="summary-title">Order Summary</h6>
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
                                    <div className="subtotal-text">Total No. of Items</div>
                                    <div className="subtotal-price">{quantity}</div>
                                </div>
                                <div className="popup-subtotal">
                                    <div className="subtotal-text">Subtotal</div>
                                    <div className="subtotal-price">HKD ${Number.parseFloat(subtotal).toFixed(2)}</div>
                                </div>
                                <div className="popup-subtotal">
                                    <div className="subtotal-text">Shipping Charge</div>
                                    <div className="subtotal-price">{shippingCharge === 0 ? "Free" : `HKD $${shippingCharge}`}</div>
                                </div>
                                <div className="popup-subtotal">
                                    <div className="subtotal-text">Total Price</div>
                                    <div className="subtotal-price">HKD ${Number.parseFloat(totalPrice).toFixed(2)}</div>
                                </div>
                                <button className='btn btn-primary w-100' type='submit'>
                                    Confirm
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8 order-lg-1"> 
                            <div className="billing-info">
                                <h6 className="billing-title">Billing Information</h6>
                                <div className="billing-form"> 
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="form-label">Name</label>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id='firstName' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                                        </div>
                                                    </div> 
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id='lastName' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="form-label">Company Name <span>(Optional)</span></label>
                                                <input type="text" className="form-control" id='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-label">Contact</label>
                                                <input type="text" className="form-control" id='contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="form-label">Address</label>
                                                <textarea type="text" className="form-control" id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-label">City</label>
                                                <input type="text" className="form-control" id='city' value={city} onChange={(e) => setCity(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-label">State</label>
                                                <input type="text" className="form-control" id='state' value={state} onChange={(e) => setState(e.target.value)} />
                                            </div>
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                            <div className="payment-option-box">
                                <div className="payment-form">
                                    <h6 className="payment-option-title">Payment Option</h6>
                                    <div className="payment-option">
                                        <div className="payment-content">
                                            <div className="payment-head">
                                                <div className="payment-icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 3V29" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <h6 className="payment-text">Cash on Delivery</h6>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" className='form-check-input' name='payment' value={"Cash"} onChange={(e) => setPaymentOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="payment-content">
                                            <div className="payment-head">
                                                <div className="payment-icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.662 3C28.6479 4.60352 29 6.20705 29 8.13128C29 14.5454 23.4131 23.2273 18.8122 29H8.2723L4 4.30573L13.5305 3.66432L15.831 21.326C17.8028 18.1189 20.4554 12.6441 20.4554 9.1392C20.4554 7.21498 20.1268 5.93216 19.4695 4.62643L27.662 3Z" fill="#3D95CE"></path>
                                                    </svg>
                                                </div>
                                                <h6 className="payment-text">Venmo</h6>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" className='form-check-input' name='payment' value={"Venmo"} onChange={(e) => setPaymentOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="payment-content">
                                            <div className="payment-head">
                                                <div className="payment-icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <rect width="32" height="32" fill="url(#pattern0)"></rect>
                                                        <defs>
                                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                                <use xlinkHref="#image0_678_17954" transform="translate(-0.125 -0.125) scale(0.00555556)"></use>
                                                            </pattern>
                                                            <image id="image0_678_17954" width="225" height="225" xlinkHref="data:image/png;base64,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"></image>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h6 className="payment-text">Paypal</h6>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" className='form-check-input' name='payment' value={"Paypal"} onChange={(e) => setPaymentOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="payment-content">
                                            <div className="payment-head">
                                                <div className="payment-icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_678_17960)">
                                                        <path d="M27.5486 25.8352C14.595 31.9999 6.5559 26.842 1.40981 23.7092C1.09137 23.5118 0.550136 23.7554 1.01973 24.2948C2.73415 26.3736 8.35267 31.384 15.6865 31.384C23.0253 31.384 27.3913 27.3796 27.9374 26.681C28.4799 25.9884 28.0967 25.6063 27.5484 25.8352H27.5486ZM31.1865 23.8261C30.8387 23.3731 29.0713 23.2886 27.9591 23.4253C26.8451 23.558 25.173 24.2388 25.3184 24.6476C25.393 24.8007 25.5453 24.732 26.3105 24.6632C27.0779 24.5866 29.2275 24.3153 29.6755 24.9009C30.1255 25.4905 28.9898 28.2992 28.7824 28.7522C28.582 29.2052 28.859 29.322 29.2354 29.0203C29.6067 28.7187 30.2787 27.9377 30.7298 26.8324C31.1777 25.7212 31.4508 24.171 31.1864 23.8261H31.1865Z" fill="#FF9900"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.8386 13.256C18.8386 14.8735 18.8794 16.2225 18.0618 17.659C17.402 18.827 16.3567 19.5452 15.1888 19.5452C13.5945 19.5452 12.666 18.3306 12.666 16.5378C12.666 12.999 15.8368 12.3567 18.8386 12.3567V13.256ZM23.0255 23.3761C22.751 23.6213 22.3539 23.6389 22.0445 23.4753C20.6663 22.3308 20.421 21.7994 19.6619 20.7073C17.3845 23.0315 15.7727 23.7264 12.8179 23.7264C9.3258 23.7264 6.60449 21.5716 6.60449 17.2561C6.60449 13.8867 8.4324 11.5917 11.0309 10.4705C13.285 9.47768 16.4326 9.30252 18.8386 9.02815V8.49086C18.8386 7.50391 18.9144 6.33602 18.3363 5.48348C17.8282 4.71847 16.8589 4.40311 16.0062 4.40311C14.4238 4.40311 13.0105 5.21478 12.666 6.89658C12.5958 7.2704 12.3215 7.63833 11.9478 7.6558L7.91837 7.22375C7.57975 7.14768 7.20604 6.87331 7.29947 6.3535C8.22795 1.47168 12.6367 0 16.5843 0C18.6048 0 21.2443 0.537295 22.8385 2.06732C24.8591 3.95346 24.6663 6.47031 24.6663 9.2091V15.6794C24.6663 17.624 25.4722 18.4765 26.2313 19.5277C26.4999 19.9014 26.5584 20.3512 26.2196 20.6314C25.3729 21.3379 23.8662 22.6519 23.0371 23.3878L23.0254 23.3761" fill="black"></path>
                                                        <path d="M27.5486 25.8352C14.595 31.9999 6.5559 26.842 1.40981 23.7092C1.09137 23.5118 0.550136 23.7554 1.01973 24.2948C2.73415 26.3736 8.35267 31.384 15.6865 31.384C23.0253 31.384 27.3913 27.3796 27.9374 26.681C28.4799 25.9884 28.0967 25.6063 27.5484 25.8352H27.5486ZM31.1865 23.8261C30.8387 23.3731 29.0713 23.2886 27.9591 23.4253C26.8451 23.558 25.173 24.2388 25.3184 24.6476C25.393 24.8007 25.5453 24.732 26.3105 24.6632C27.0779 24.5866 29.2275 24.3153 29.6755 24.9009C30.1255 25.4905 28.9898 28.2992 28.7824 28.7522C28.582 29.2052 28.859 29.322 29.2354 29.0203C29.6067 28.7187 30.2787 27.9377 30.7298 26.8324C31.1777 25.7212 31.4508 24.171 31.1864 23.8261H31.1865Z" fill="#FF9900"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.8386 13.256C18.8386 14.8735 18.8794 16.2225 18.0618 17.659C17.402 18.827 16.3567 19.5452 15.1888 19.5452C13.5945 19.5452 12.666 18.3306 12.666 16.5378C12.666 12.999 15.8368 12.3567 18.8386 12.3567V13.256ZM23.0255 23.3761C22.751 23.6213 22.3539 23.6389 22.0445 23.4753C20.6663 22.3308 20.421 21.7994 19.6619 20.7073C17.3845 23.0315 15.7727 23.7264 12.8179 23.7264C9.3258 23.7264 6.60449 21.5716 6.60449 17.2561C6.60449 13.8867 8.4324 11.5917 11.0309 10.4705C13.285 9.47768 16.4326 9.30252 18.8386 9.02815V8.49086C18.8386 7.50391 18.9144 6.33602 18.3363 5.48348C17.8282 4.71847 16.8589 4.40311 16.0062 4.40311C14.4238 4.40311 13.0105 5.21478 12.666 6.89658C12.5958 7.2704 12.3215 7.63833 11.9478 7.6558L7.91837 7.22375C7.57975 7.14768 7.20604 6.87331 7.29947 6.3535C8.22795 1.47168 12.6367 0 16.5843 0C18.6048 0 21.2443 0.537295 22.8385 2.06732C24.8591 3.95346 24.6663 6.47031 24.6663 9.2091V15.6794C24.6663 17.624 25.4722 18.4765 26.2313 19.5277C26.4999 19.9014 26.5584 20.3512 26.2196 20.6314C25.3729 21.3379 23.8662 22.6519 23.0371 23.3878L23.0254 23.3761" fill="black"></path>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_678_17960">
                                                            <rect width="32" height="32" fill="white"></rect>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h6 className="payment-text">Amazon Pay</h6>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" className='form-check-input' name='payment' value={"Amazon Pay"} onChange={(e) => setPaymentOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="payment-content">
                                            <div className="payment-head">
                                                <div className="payment-icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.2" d="M4 13.1123H28V23.9998L4 23.9998L4 13.1123Z" fill="#FA8232" stroke="#FA8232" strokeWidth="2"></path>
                                                        <path d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M21 21H25" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M15 21H17" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M3 12.1123H29" stroke="#FA8232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <h6 className="payment-text">Debit / Credit Card</h6>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" className='form-check-input' name='payment' value={"Credit Card"} onChange={(e) => setPaymentOption(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-form-details">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Card Name</label>
                                                    <input type="text" className="form-control" id='cardName' />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Card Number</label>
                                                    <input type="text" className="form-control" id='cardNum' value={cardNum} onChange={(e) => setCardNum(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="form-label">Expiry Date</label>
                                                    <input type="month" className="form-control" id='expiryDate' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="form-label">CVC</label>
                                                    <input type="text" max={3} className="form-control" id='cvc' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-additional-box">
                                <h6 className="additional-title">Additional Information</h6>
                                <div className="form-group">
                                    <label htmlFor="remark" className="form-label">Remarks <span>(Optional)</span></label>
                                    <textarea className='form-control' rows={5} id="remark" value={remark} onChange={(e) => setRemark(e.target.value)}
                                    placeholder='Notes about your order, e.g. Delivery' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
        </>
    )
}

export default Checkout