import Product from "../models/Product.js"

export const getBestDealsProduct = async(req, res) => {
    try{ 
        const products = await Product.find({ isBestDeal: true })
        console.log(products)

        res.status(200).send({
            success: true,
            products
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Error in fetching products!",
            error 
        })
        console.log(error)
    }
}

export const getFeaturedProducts = async(req, res) => {
    try{ 
        const products = await Product.find({ isFeatured: true })
        console.log(products)

        res.status(200).send({
            success: true,
            products
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Error in fetching products!",
            error 
        })
        console.log(error)
    }
}