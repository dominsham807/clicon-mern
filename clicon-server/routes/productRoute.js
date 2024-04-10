import express from "express"
import { getAllProducts, getBestDealsProduct, getFeaturedProducts } from "../controllers/productController.js"

const router = express.Router()

router.get('/', getAllProducts)
router.get('/bestdeals', getBestDealsProduct)
router.get('/featured', getFeaturedProducts)

export default router