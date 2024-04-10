import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import BreadCrumb from '../components/BreadCrumb'
import { calculatePrice, decreaseQty, increaseQty, updateCart } from '../redux/reducers/cartReducer.js'

import "../styles/cart.css"

const Cart = () => {
    const { cartItems, quantity, subtotal, totalPrice, shippingCharge } = useSelector((state) => state.cartReducer)
    console.log(cartItems)  

    const dispatch = useDispatch()

    const handleUpdateCart = () => {
        dispatch(updateCart(cartItems)) 
        dispatch(calculatePrice())
        toast.success("Cart updated successfully")
        // window.location.reload()
    }

    const increaseHandler = (item) => {
        dispatch(increaseQty(item))
        dispatch(calculatePrice())
    }

    const decreaseHandler = (item) => {
        dispatch(decreaseQty(item))
        dispatch(calculatePrice())
    }

    return (
        <>
        <BreadCrumb mainSection={"Shopping Cart"} />
        <div className="shopping-cart-body">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="shopping-cart-wrapper">
                            <h2 className="title">Shopping Cart</h2>
                            <div className="shopping-cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Products</th>
                                            <th scope='col'>Price</th>
                                            <th scope='col'>Quantity</th>
                                            <th scope='col'>Sub-Total</th>
                                            <th scope='col'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => {   
                                            return (
                                                <tr key={index}>
                                                    <td className='cart-product'>
                                                        <span className="product-wrapper"> 
                                                            <img src={item.image} alt="" />
                                                            <span className="product-text">{item.name}</span>
                                                        </span>
                                                    </td>
                                                    <td className='cart-price'>
                                                        ${Number.parseFloat(item.price).toFixed(2)} 
                                                    </td>
                                                    <td className='cart-quantity'>
                                                        <div className="product-quantity-count">
                                                            <button className="button-count quantity-decrease" onClick={() => decreaseHandler(item)}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </button>
                                                            <input readOnly type="number" className='number-product' value={item.quantity} min={1} max={10} />
                                                            <button className="button-count quantity-increase" onClick={() => increaseHandler(item)}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M8 2.5V13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className='cart-subtotal'>
                                                        ${Number.parseFloat(item.price * item.quantity).toFixed(2)} 
                                                    </td>
                                                    <td>
                                                        <button className="close-btn">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                                <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}  
                                    </tbody>
                                </table>
                            </div>
                            <div className="shopping-cart-buttons">
                                <a href="/shop" className='btn btn-outline-secondary'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.875 10H3.125" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Return to Shop
                                </a>
                                <button onClick={handleUpdateCart} className='btn btn-outline-secondary'>
                                    Update Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="shopping-cart-total-wrapper">
                            <div className="cart-total">
                                <h6 className="total-title">Cart Total</h6>
                                <h6 className="total-qty">({quantity})</h6>
                            </div> 
                            <ul className="subtotal-list">
                                <li>
                                    <span className="subtotal-text">Sub-total</span>
                                    <span className="subtotal-amount">${Number.parseFloat(subtotal).toFixed(2)}</span>
                                </li>
                                <li>
                                    <span className="subtotal-text">Shipping</span>
                                    <span className="subtotal-amount">{shippingCharge === 0 ? "Free" : shippingCharge}</span>
                                </li>
                                {/* <li>
                                    <span className="subtotal-text">Discount</span>
                                    <span className="subtotal-amount">$24</span>
                                </li>
                                <li>
                                    <span className="subtotal-text">Tax</span>
                                    <span className="subtotal-amount">$61.99</span>
                                </li> */}
                                <li className="subtotal-line"></li>
                                <li>
                                    <span className="grandtotal-text">Total</span>
                                    <span className="grandtotal-amount">HKD ${Number.parseFloat(totalPrice).toFixed(2)}</span>  
                                </li>
                            </ul>
                            <button className="btn btn-primary w-100 checkout-cart-btn">
                                Proceed to Checkout
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="shopping-cart-coupon-wrapper">
                            <div className="coupon-title">Coupon Code</div>
                            <div className="coupon-content">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="email" className='form-control' placeholder='Email Address' />
                                    </div>
                                    <button type='submit' className='btn btn-secondary coupon-btn'>Apply Coupon</button>
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

export default Cart