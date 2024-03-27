import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

import './App.css'

import { Toaster } from 'react-hot-toast'

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
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
          <Route path='/settings' element={<Settings />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/support' element={<Support />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='*' element={<PageNotFound />} />
          <Toaster position='bottom-center' />
        </Route> 
      </Routes>
      <ModeSwitcher />
    </BrowserRouter>
  )
}

export default App
