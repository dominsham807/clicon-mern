import { StatusCodes } from "http-status-codes" 
import Order from "../models/Order.js"
import User from "../models/User.js"
import OrderItem from "../models/OrderItem.js"
import Product from "../models/Product.js"

export const createOrder = async(req, res) => { 
    try{
        const order = await Order.create({ userId: req.user._id, ...req.body })

        for (const item of req.body.cartItems){
            const { quantity, color, size, memory, storage, price } = item
            const productId = await Product.findById(item.id)
            const cartItem = await OrderItem.create({
                productId, quantity, color, size, memory, storage, price
            })
            order.orderItems.push(cartItem)
        }

        const user = await User.findOne({ _id: req.user._id })
        console.log(user)
        user.orders.push(order._id)

        await order.save()
        await user.save()

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Order placed successfully",
            order 
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Failed to create order",
            error 
        })
        console.log(error)
    }
}

export const getAllOrders = async(req, res) => {
    try{
        const orders = await Order.find({ userId: req.user._id })
        
        res.status(StatusCodes.OK).json({
            success: true,
            orders
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Failed to fetch orders",
            error 
        })
        console.log(error)
    }
}

export const updateStock = async(req, res) => {

}

export const getOrderStatus = async(req, res) => {
    try{
        const totalOrders = await Order.countDocuments({})
        console.log(totalOrders)
        const completedOrders = await Order.find({ "shippingInfo.status": "Completed" }).countDocuments({})
        const pendingOrders = totalOrders - completedOrders
        console.log(completedOrders)
        res.status(StatusCodes.OK).json({
            success: true,
            pendingOrders,
            completedOrders
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Failed to fetch order status",
            error 
        })
        console.log(error)
    }
}

export const getSingleOrder = async(req, res) => {
    try{
        const order = await Order.findOne({ orderId: req.params.id }).select("shippingInfo orderItems firstName lastName email phone quantity subtotal shippingCharge totalPrice")
        const orderItems = []

        for (const item of order.orderItems){
            const orderItem = await OrderItem.findById(item).populate("productId")
            const productItem = {
                product: orderItem.productId.name,
                price: orderItem.price,
                quantity: orderItem.quantity,
                color: orderItem.color,
                size: orderItem.size,
                memory: orderItem.memory,
                storage: orderItem.storage
            }
            orderItems.push(productItem)
        }
        
        res.status(StatusCodes.OK).json({
            success: true,
            order, 
            orderItems
        })
    } catch(error){
           res.status(500).send({
            success: false,
            message: "Failed to fetch order",
            error 
        })
        console.log(error)
    }
}

export const processOrder = async(req, res) => {
    try{
        const { status } = req.body 
        const update = {'shippingInfo.status': status}
        // for (const key of Object.keys(req.body)){
        //     if (req.body[key] !== '') {
        //         update[key] = req.body[key]
        //     }
        // } 

        const order = await Order.findOneAndUpdate({ _id: req.params.id }, update, {
            new: true 
        })    
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Order processed successfully",
            order 
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Failed to proceed order",
            error 
        })
        console.log(error)
    }
}