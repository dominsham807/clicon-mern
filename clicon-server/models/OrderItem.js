import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }, 
    quantity: {
        type: Number
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    memory: {
        type: String
    }, 
    storage: {
        type: String
    },
    price: {
        type: Number 
    },
    discount: {
        type: Number
    }
})

export default mongoose.model("OrderItem", orderItemSchema)