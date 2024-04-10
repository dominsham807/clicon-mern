import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    cartItems: [],
    quantity: 0,
    subtotal: 0, 
    totalPrice: 0,
    shippingCharge: 0,
    discountPercentage: 0,
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
        updateCart: (state, action) => {
            state.loading = true
            state.cartItems = action.payload
            console.log(action.payload)
            state.loading = false
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
        }
    }
})

export const { addToCart, increaseQty, decreaseQty, updateCart, calculatePrice } = cartReducer.actions