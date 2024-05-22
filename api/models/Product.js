import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    sku: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true 
    },
    discountedPrice: {
        type: Number 
    },
    ratings: {
        type: Number,
        required: true 
    },
    isFreeShipping: {
        type: Boolean 
    },
    isBestDeal: {
        type: Boolean 
    },
    isFeatured: {
        type: Boolean 
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String 
    },
    description: {
        type: String,
        required: true
    }, 
    availability: {
        type: Boolean,
        required: true
    }, 
    stockCount: {
        type: Number,
        required: true 
    },
    promotion: [], 
    discountPercentage: {
        type: Number 
    }, 
})

export default mongoose.model("Product", productSchema)