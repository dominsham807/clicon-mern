import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { cart } from '../data/mockData.js'

import "../styles/cart.css"

const Cart = () => {
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart[0].items.map((item, index) => {
                                            const [productQty, setProductQty] = useState(item.quantity)

                                            const handleIncreaseQty = () => { 
                                                if(productQty < 10){
                                                    setProductQty(quantity => quantity += 1)
                                                }
                                            }
                                            const handleDecreaseQty = () => {
                                                if(productQty > 1){
                                                    setProductQty(quantity => quantity -= 1)
                                                }
                                            }
                                        
                                            const handleChange = (e) => {
                                                e.preventDefault()
                                                setProductQty(e.target.value)
                                            }

                                            const subtotal = item.price * productQty
                                            return (
                                                <tr key={index}>
                                                    <td className='cart-product'>
                                                        <span className="product-wrapper">
                                                            <button className="close-btn">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" strokeWidth="1.5" strokeMiterlimit="10"></path>
                                                                    <path d="M15 9L9 15" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M15 15L9 9" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </button>
                                                            <img src={item.images[0]} alt="" />
                                                            <span className="product-text">{item.productName}</span>
                                                        </span>
                                                    </td>
                                                    <td className='cart-price'>
                                                        <del>${item.originalPrice}</del>
                                                        ${item.price}
                                                    </td>
                                                    <td className='cart-quantity'>
                                                        <div className="product-quantity-count">
                                                            <button className="button-count quantity-decrease" onClick={() => handleDecreaseQty()}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </button>
                                                            <input onChange={handleChange} type="number" className='number-product' value={productQty} min={1} max={10} />
                                                            <button className="button-count quantity-increase" onClick={() => handleIncreaseQty()}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M8 2.5V13.5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className='cart-subtotal'>${subtotal}</td>
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
                                <button href="/shop" className='btn btn-outline-secondary'>
                                    Update Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="shopping-cart-total-wrapper">
                            <h6 className="total-title">Cart Total</h6>
                            <ul className="subtotal-list">
                                <li>
                                    <span className="subtotal-text">Sub-total</span>
                                    <span className="subtotal-amount">$320</span>
                                </li>
                                <li>
                                    <span className="subtotal-text">Shipping</span>
                                    <span className="subtotal-amount">Free</span>
                                </li>
                                <li>
                                    <span className="subtotal-text">Discount</span>
                                    <span className="subtotal-amount">$24</span>
                                </li>
                                <li>
                                    <span className="subtotal-text">Tax</span>
                                    <span className="subtotal-amount">$61.99</span>
                                </li>
                                <li className="subtotal-line"></li>
                                <li>
                                    <span className="grandtotal-text">Total</span>
                                    <span className="grandtotal-amount">HKD ${cart[0].totalPrice}</span>  
                                </li>
                            </ul>
                            <button className="btn btn-primary w-100 checkout-btn">
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