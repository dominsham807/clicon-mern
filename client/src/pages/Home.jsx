import React from 'react' 
import Banner from '../components/Banner'
import Features from '../components/Features'
import BestDeals from '../components/BestDeals'
import FeaturedProducts from '../components/FeaturedProducts'
import CategorySlider from '../components/CategorySlider'  

const Home = ({ setShowModal, setSelectedProduct }) => { 
    // const [showModal, setShowModal] = useState(false)
    // const [selectedProduct, setSelectedProduct] = useState({
    //     availability: false,
    //     brand: "",
    //     category: "",
    //     description: "",
    //     discountPercentage: 0,
    //     discountedPrice: 0, 
    //     id: 0,
    //     image: "", 
    //     isBestDeal: false,
    //     isFeatured: false,
    //     isFreeShipping: false, 
    //     name: "", 
    //     price: 0, 
    //     promotion: [],
    //     ratings: 0, 
    //     sku: "CLI00009",
    //     stockCount: 0, 
    //     subCategory: "",
    //     _id: "" 
    // })
    // console.log(selectedProduct)

    return ( 
        <>
        <Banner />
        <Features/>
        <BestDeals setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} />
        <CategorySlider />
        <FeaturedProducts setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} />
        {/* <ProductModal show={showModal} setShow={setShowModal} selectedProduct={selectedProduct} /> */}
        </>
    )  
}

export default Home