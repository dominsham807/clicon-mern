import React from 'react' 
import Banner from '../components/Banner'
import Features from '../components/Features'
import BestDeals from '../components/BestDeals'
import FeaturedProducts from '../components/FeaturedProducts'
import CategorySlider from '../components/CategorySlider'

const Home = () => {
    return (
        <>
        <Banner />
        <Features />
        <BestDeals />
        <CategorySlider />
        <FeaturedProducts />
        </>
    )
}

export default Home