import dotenv from "dotenv"
import { connectDB } from "./db/connect.js"
import { products } from "./data.js"
import Product from "./models/Product.js"

dotenv.config()

connectDB()

const importData = async() => {
    try{ 
        await Product.deleteMany()
        await Product.insertMany(products)
        console.log("Data imported success")
        process.exit()
    } catch(error){
        console.error(error)
        process.exit(1)
    }
}

importData()