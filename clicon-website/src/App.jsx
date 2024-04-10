import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Layout from './components/Layout'
import Shop from './pages/Shop'
import About from './pages/About' 
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import SingleProduct from './pages/SingleProduct'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import Settings from './pages/Settings'
import Blog from './pages/Blog'
import TrackOrderDetail from './pages/TrackOrderDetail'
import ModeSwitcher from './components/ModeSwitcher' 
import TrackOrder from './pages/TrackOrder'
import Faq from './pages/Faq'
import Support from './pages/Support'
import Checkout from './pages/Checkout'
import Compare from './pages/Compare'
import Verify from './pages/Verify' 
import ProductModal from './components/ProductModal'

import './App.css'

function App() {  
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({
      availability: false,
      brand: "",
      category: "",
      description: "",
      discountPercentage: 0,
      discountedPrice: 0, 
      id: 0,
      image: "", 
      isBestDeal: false,
      isFeatured: false,
      isFreeShipping: false, 
      name: "", 
      price: 0, 
      promotion: [],
      ratings: 0, 
      sku: "CLI00009",
      stockCount: 0, 
      subCategory: "",
      _id: "" 
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} />} />
          <Route path='/categories/:category' />
          <Route path='/product' element={<SingleProduct />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/orders' element={<TrackOrder />} />
          <Route path='/order-details' element={<TrackOrderDetail />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify' element={<Verify />} /> 
          <Route path='/settings' element={<Settings />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/support' element={<Support />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='*' element={<PageNotFound />} /> 
        </Route> 
      </Routes>
      <ProductModal show={showModal} setShow={setShowModal} selectedProduct={selectedProduct} />
      <Toaster position='bottom-center' />
      <ModeSwitcher />
    </BrowserRouter>
  )
}

export default App
