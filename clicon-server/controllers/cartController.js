import Cart from "../models/Cart.js"
import { StatusCodes } from "http-status-codes" 
import User from "../models/User.js"

export const addItemToCart = async(req, res) => {
    try{
        const { productId, quantity } = req.body 

        const cartItem = await Cart.findOne({ productId, userId: req.user._id }) 
        const user = await User.findOne({ _id: req.user._id })
    
        if(!cartItem){
            const newItem = await Cart.create({ userId: req.user._id, productId, quantity })
            user.cartItems.push(newItem._id)
            await user.save()
        } else{
            cartItem.quantity += quantity
            await cartItem.save() 
        }
    
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Product added to cart"
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Failed to add product to cart",
            error 
        })
        console.log(error)
    } 
}