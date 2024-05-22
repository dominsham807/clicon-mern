import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    cartItems: [],
    quantity: 0,
    subtotal: 0, 
    totalPrice: 0,
    shippingCharge: 0,
    discount: 0,
    color: "",
    size: "",
    memory: "",
    storage: ""
}

export const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.loading = true 
            const index = state.cartItems.findIndex(
                (i) => i.id === action.payload.id 
            )
            if(index === -1){
                state.cartItems.push({ ...action.payload })
            } else{
                state.cartItems[index].quantity += 1
            }
            state.loading = false
        },
        increaseQty: (state, action) => {
            const index = state.cartItems.findIndex(
                (i) => i.id === action.payload.id
            )
            console.log(index)
            if(state.cartItems[index].quantity < 10){
                state.cartItems[index].quantity += 1 
            } 
        }, 
        decreaseQty: (state, action) => { 
            const index = state.cartItems.findIndex(
                (i) => i.id === action.payload.id
            )
            console.log(index)
            if(state.cartItems[index].quantity > 1){
                state.cartItems[index].quantity -= 1 
            } 
        },
        removeItem: (state, action) => {
            state.loading = true
            state.cartItems = state.cartItems.filter(
                (i) => i.id !== action.payload.id 
            )
            state.loading = false 
        },
        updateCart: (state, action) => {
            state.loading = true
            state.cartItems = action.payload
            console.log(action.payload)
            state.loading = false
        },
        calculateDiscount: (state) => {
            state.discount = state.cartItems.reduce((discountTotal, item) => {
                return discountTotal + item.discount
            }, 0)
        },
        calculatePrice: (state) => {
            state.quantity = state.cartItems.reduce((qtyTotal, item) => {
                return qtyTotal + item.quantity
            }, 0)
            state.subtotal = state.cartItems.reduce((total, item) => {
                return total + item.quantity*item.price 
            }, 0)
            // console.log(state.subtotal > 0)
            if(state.subtotal < 1000){
                state.shippingCharge = 200
            } else{
                state.shippingCharge = 0
            }
            state.totalPrice = state.subtotal + state.shippingCharge
        },
        resetCart: (state) => {
            state.cartItems = [],
            state.quantity = 0,
            state.subtotal = 0, 
            state.totalPrice = 0,
            state.shippingCharge = 0,
            state.discount = 0,
            state.color = "",
            state.size = "",
            state.memory = "",
            state.storage = ""
        }
    }
})

export const { addToCart, increaseQty, decreaseQty, removeItem, updateCart, calculateDiscount, calculatePrice, resetCart } = cartReducer.actions