import express from "express"
import { getBestDealsProduct, getFeaturedProducts } from "../controllers/productController.js"

const router = express.Router()

router.get('/bestdeals', getBestDealsProduct)
router.get('/featured', getFeaturedProducts)

export default router