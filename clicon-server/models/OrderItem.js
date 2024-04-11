import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    orderId: {
        type: mongoose.Types.ObjectId,
        ref: 'Order'
    },
    quantity: {
        type: Number
    },
    unitPrice: {
        type: Number 
    },
    unitDiscountPrice: {
        type: Number
    }
})

export default mongoose.model("OrderItem", orderItemSchema)