import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import axios from 'axios'
import BreadCrumb from '../components/BreadCrumb' 
import { FaAngleDown, FaSearch, FaFilter, FaStar, FaTimes } from 'react-icons/fa'  
import Pagination from '../components/Pagination'
import { BACKEND_URL } from '../constants'

import "../styles/shop.css"

const Shop = ({ setShowModal, setSelectedProduct }) => {
    const [searchParams, setSearchParams] = useSearchParams({})
    console.log(searchParams.get('page'))

    const [selectedCategory, setSelectedCategory] = useState("all")
    const [minPrice, setMinPrice] = useState(2500)
    const [maxPrice, setMaxPrice] = useState(7500)

    const [activeFilters, setActiveFilters] = useState([])
    console.log(activeFilters)
 
    const [currentPage, setCurrentPage] = useState(1)
    console.log(currentPage)
    const productsPerPage = 8 

    const paginate = (pageNum) => {    
        setCurrentPage(pageNum) 
        setSearchParams({ page: pageNum })
        // window.location.reload()
    }

    const filterCategory = (value) => { 
        if(activeFilters){
            const originalFilter = activeFilters.filter(item => !item.startsWith("Category"))
            console.log(originalFilter)
            setActiveFilters(originalFilter)
            // const newFilterItem = `Category: ${value}`
            // setActiveFilters([...activeFilters, newFilterItem])
        }
    }

    const [searchValue, setSearchValue] = useState("")

    const [sortByOpen, setSortByOpen] = useState(false)
    const [selectedSortOption, setSelectedSortOption] = useState("Name") 
 
    const [filterBoxOpen, setFilterBoxOpen] = useState(false)

    const minPricePercentage = (minPrice / 10000) * 100
    const maxPricePercentage = 100 - ((maxPrice / 10000) * 100)
  
    const sortRef = useRef() 
    const filterRef = useRef() 
    // const addRefs = (el) => sortRef.current.push(el)

    const sortHandler = (e) => {  
        console.log(sortRef.current)
        if(!sortRef.current.contains(e.target) && e.target !== sortRef.current){
            setSortByOpen(false)
        }
    }

    const filterMenuHandler = (e) => { 
        if(filterRef.current.contains(e.target) && e.target === filterRef.current){
            setFilterBoxOpen(false)
        }
    }

    const [products, setProducts] = useState([])

    const fetchAllProducts = async() => {
        const res = await axios.get(`${BACKEND_URL}/api/product`)
        setProducts(res.data.products) 
    }

    useEffect(() => {
        fetchAllProducts()

        document.addEventListener("click", sortHandler)  
        document.addEventListener("click", filterMenuHandler)  

        return() =>{
            document.removeEventListener("click", sortHandler) 
            document.removeEventListener("click", filterMenuHandler)  
        }
    }, [sortByOpen, filterBoxOpen])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = (indexOfLastProduct - productsPerPage) + 1
    const currentPageProducts = products.slice(
        indexOfFirstProduct - 1, 
        indexOfLastProduct
    )

    const totalPages = Math.ceil(products.length / productsPerPage) 

    let searchResult 

    const searchForProducts = () => {
        let result 
        if(searchValue !== null){
            result = currentPageProducts.filter((product) => product.name.toLowerCase().includes(searchValue))
        } 
        return result
    }
    searchResult = searchForProducts()  

    return (
        <>
        <BreadCrumb mainSection={"Shop"} />
        <div className="shop-body">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3">
                        <div className="shop-body__filter">
                            <div className="category-filter">
                                <h4 className="filter-title">Category</h4>
                                <form>
                                    <div className="form-check">
                                        <input id='all' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("all")}  checked={selectedCategory === "all"} />
                                        <label htmlFor="all" className='form-check-label'>All</label>
                                    </div>
                                    <div className="form-check">
                                        <input id='laptop' type="radio" className='form-check-input' name='category' onChange={() => {
                                            setSelectedCategory("laptop")
                                            filterCategory("laptop")
                                        }} />
                                        <label htmlFor="laptop" className='form-check-label'>Laptop</label>
                                    </div>
                                    <div className="form-check">
                                        <input id='computer' type="radio" className='form-check-input' name='category' onChange={() => {
                                            setSelectedCategory("computer")
                                            filterCategory("computer")
                                        }} />
                                        <label htmlFor="computer" className='form-check-label'>Computer Accessories</label>
                                    </div>
                                    <div className="form-check">
                                        <input id='smartphone' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("smartphone")} />
                                        <label htmlFor="smartphone" className='form-check-label'>Smartphone</label>
                                    </div>
                                    <div className="form-check">
                                        <input id='camera' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("camera")} />
                                        <label htmlFor="camera" className='form-check-label'>Camera</label>
                                    </div>
                                    <div className="form-check">
                                        <input id='tv' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("tv")} />
                                        <label htmlFor="tv" className='form-check-label'>TV & Home Appliances</label>
                                    </div>
                                </form>
                            </div>
                            <div className="shop-filter-line"></div>
                            <div className="price-filter">
                                <h4 className="filter-title">Price Range</h4>
                                <div className="slider-wrapper">
                                    <div className="slider">
                                        <div className="progress" style={{ left: minPricePercentage+'%', right: maxPricePercentage+'%' }}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className='range-min' min={0} max={10000} value={minPrice} step={100} onChange={(e) => setMinPrice(e.target.value)} />
                                        <input type="range" className='range-max' min={0} max={10000} value={maxPrice} step={100} onChange={(e) => setMaxPrice(e.target.value)} />
                                    </div>
                                    <div className="price-input">
                                        <div className="field">
                                            <input type="text" className='form-control input-min' placeholder='Min Price' value={minPrice} readOnly />
                                        </div>
                                        <div className="field">
                                            <input type="text" className='form-control input-max' placeholder='Max Price' value={maxPrice} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-filter-line"></div>
                            <div className="brand-filter">
                                <h4 className="filter-title">Popular Brands</h4>
                                <div className="form-check-wrapper">
                                    <div className="form-check">
                                        <input type="checkbox" id='apple' className='form-check-input' />
                                        <label htmlFor="apple" className='form-check-label'>Apple</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='microsoft' className='form-check-input' />
                                        <label htmlFor="microsoft" className='form-check-label'>Microsoft</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='lg' className='form-check-input' />
                                        <label htmlFor="lg" className='form-check-label'>LG</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='google' className='form-check-input' />
                                        <label htmlFor="google" className='form-check-label'>Google</label>
                                    </div> 
                                    <div className="form-check">
                                        <input type="checkbox" id='dell' className='form-check-input' />
                                        <label htmlFor="dell" className='form-check-label'>Dell</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='sony' className='form-check-input' />
                                        <label htmlFor="sony" className='form-check-label'>Sony</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='samsung' className='form-check-input' />
                                        <label htmlFor="samsung" className='form-check-label'>Samsung</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='xiaomi' className='form-check-input' />
                                        <label htmlFor="xiaomi" className='form-check-label'>Xiaomi</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='onePlus' className='form-check-input' />
                                        <label htmlFor="onePlus" className='form-check-label'>One Plus</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xxl-9"> 
                        <div className="shop-filter-row d-flex d-xxl-none">
                            <div className="offcanvas-btn" onClick={() => setFilterBoxOpen(!filterBoxOpen)}>
                                <FaFilter />
                                Filter
                            </div>
                            <div className={`filter-box ${filterBoxOpen ? "active" : ""}`}>
                                <div className="filter-box-header">
                                    <div type='button' className='close-btn' onClick={() => setFilterBoxOpen(false)}>
                                        <FaTimes />
                                    </div>
                                </div>
                                <div className="filter-box-body">
                                    <div className="category-filter">
                                        <h4 className="filter-title">Category</h4>
                                        <form>
                                            <div className="form-check">
                                                <input id='all' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("all")}  checked={selectedCategory === "all"} />
                                                <label htmlFor="all" className='form-check-label'>All</label>
                                            </div>
                                            <div className="form-check">
                                                <input id='laptop' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("laptop")}/>
                                                <label htmlFor="laptop" className='form-check-label'>Laptop</label>
                                            </div>
                                            <div className="form-check">
                                                <input id='computer' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("computer")}/>
                                                <label htmlFor="computer" className='form-check-label'>Computer Accessories</label>
                                            </div>
                                            <div className="form-check">
                                                <input id='smartphone' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("smartphone")} />
                                                <label htmlFor="smartphone" className='form-check-label'>Smartphone</label>
                                            </div>
                                            <div className="form-check">
                                                <input id='camera' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("camera")} />
                                                <label htmlFor="camera" className='form-check-label'>Camera</label>
                                            </div>
                                            <div className="form-check">
                                                <input id='tv' type="radio" className='form-check-input' name='category' onChange={() => setSelectedCategory("tv")} />
                                                <label htmlFor="tv" className='form-check-label'>TV & Home Appliances</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="shop-filter-line"></div>
                                    <div className="price-filter">
                                        <h4 className="filter-title">Price Range</h4>
                                        <div className="slider-wrapper">
                                            <div className="slider">
                                                <div className="progress" style={{ left: minPricePercentage+'%', right: maxPricePercentage+'%' }}></div>
                                            </div>
                                            <div className="range-input">
                                                <input type="range" className='range-min' min={0} max={10000} value={minPrice} step={100} onChange={(e) => setMinPrice(e.target.value)} />
                                                <input type="range" className='range-max' min={0} max={10000} value={maxPrice} step={100} onChange={(e) => setMaxPrice(e.target.value)} />
                                            </div>
                                            <div className="price-input">
                                                <div className="field">
                                                    <input type="text" className='form-control input-min' placeholder='Min Price' value={minPrice} readOnly />
                                                </div>
                                                <div className="field">
                                                    <input type="text" className='form-control input-max' placeholder='Max Price' value={maxPrice} readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-filter-line"></div>
                                    <div className="brand-filter">
                                        <h4 className="filter-title">Popular Brands</h4>
                                        <div className="form-check-wrapper">
                                            <div className="form-check">
                                                <input type="checkbox" id='apple' className='form-check-input' />
                                                <label htmlFor="apple" className='form-check-label'>Apple</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='microsoft' className='form-check-input' />
                                                <label htmlFor="microsoft" className='form-check-label'>Microsoft</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='lg' className='form-check-input' />
                                                <label htmlFor="lg" className='form-check-label'>LG</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='google' className='form-check-input' />
                                                <label htmlFor="google" className='form-check-label'>Google</label>
                                            </div> 
                                            <div className="form-check">
                                                <input type="checkbox" id='dell' className='form-check-input' />
                                                <label htmlFor="dell" className='form-check-label'>Dell</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='sony' className='form-check-input' />
                                                <label htmlFor="sony" className='form-check-label'>Sony</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='samsung' className='form-check-input' />
                                                <label htmlFor="samsung" className='form-check-label'>Samsung</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='xiaomi' className='form-check-input' />
                                                <label htmlFor="xiaomi" className='form-check-label'>Xiaomi</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" id='onePlus' className='form-check-input' />
                                                <label htmlFor="onePlus" className='form-check-label'>One Plus</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`offcanvas-backdrop fade ${filterBoxOpen ? "show" : ""}`} ref={filterRef}></div>
                            <div className="sort-box d-flex d-xl-none">
                                <h5>Sort By:</h5>
                                <div className="selectbox" ref={sortRef}>
                                    <div className="sort-select" onClick={() => setSortByOpen(!sortByOpen)}>
                                        <span className="current-selected">{selectedSortOption}</span>
                                        <FaAngleDown className={`arrow ${sortByOpen ? "active" : ""}`} /> 
                                    </div> 
                                    <ul className={`sort-select-list ${sortByOpen ? "active" : ""}`}>
                                        <li 
                                            className={`option ${selectedSortOption === "Name" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Name")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Name
                                        </li> 
                                        <li 
                                            className={`option ${selectedSortOption === "Category" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Category")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Category
                                        </li>   
                                        <li 
                                            className={`option ${selectedSortOption === "Popularity" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Popularity")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Popularity
                                        </li>   
                                        <li 
                                            className={`option ${selectedSortOption === "Price" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Price")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Price
                                        </li>   
                                        <li 
                                            className={`option ${selectedSortOption === "Ratings" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Ratings")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Ratings
                                        </li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="shop_search-sort-box">
                            <div className="search-box">
                                <form>
                                    <div className="form-group">
                                        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='form-control' placeholder='Search for Products...' />
                                        <div className="search-icon">
                                            <FaSearch />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sort-box d-none d-xxl-flex">
                                <h5>Sort By:</h5>
                                <div className="selectbox" ref={sortRef}>
                                    <div className="sort-select" onClick={() => setSortByOpen(!sortByOpen)}>
                                        <span className="current-selected">{selectedSortOption}</span>
                                        <FaAngleDown className={`arrow ${sortByOpen ? "active" : ""}`} /> 
                                    </div> 
                                    <ul className={`sort-select-list ${sortByOpen ? "active" : ""}`}>
                                        <li 
                                            className={`option ${selectedSortOption === "Name" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Name")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Name
                                        </li> 
                                        <li 
                                            className={`option ${selectedSortOption === "Category" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Category")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Category
                                        </li>   
                                        <li 
                                            className={`option ${selectedSortOption === "Popularity" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Popularity")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Popularity
                                        </li>   
                                        <li 
                                            className={`option ${selectedSortOption === "Price" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Price")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Price
                                        </li>   
                                        <li 
                                            className={`option ${selectedSortOption === "Ratings" ? "selected" : ""}`} 
                                            onClick={() => {
                                                setSelectedSortOption("Ratings")
                                                setSortByOpen(false)
                                            }}
                                        >
                                            Ratings
                                        </li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="shop_search-active-result">
                            <ul className="keywords-list">
                                <div className="text">Active Filters:</div>
                                {activeFilters?.map((filter, index) => (
                                    <li key={index}>
                                        {filter}
                                        <span onClick={() => {
                                            const newFilter = activeFilters.filter((item) => item !== filter)
                                            setActiveFilters(newFilter)
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.375 2.625L2.625 9.375" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9.375 9.375L2.625 2.625" stroke="#929FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </li>
                                ))} 
                            </ul>
                            <div className="results-found">
                                <span>Showing</span>
                                <span className='results-num'>{currentPageProducts.length} of {products.length}</span>
                                <span>Results</span>
                            </div>
                        </div>
                        <div className="shop-product-body">
                            <div className="product-section_1-wrapper-all_products"> 
                                {searchValue !== "" ? searchResult?.map((product, index) => (
                                    <div className="product-card featured" key={index}>
                                        <div className="card-image">
                                            <img src={product.image} alt="" />
                                            <div className="card-hover">
                                                <a href="#" className="hover-wishlist-btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </a>
                                                <a href="#" className="hover-add-to-cart-btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z" fill="#191C1F" stroke="#191C1F" strokeWidth="1.5"></path>
                                                        <path d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z" fill="#191C1F"></path>
                                                        <path d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </a>
                                                <a href="#" className="hover-view-btn" onClick={(e) => {
                                                    e.preventDefault()
                                                    setShowModal(true)
                                                    setSelectedProduct(product)
                                                }}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z" stroke="#191C1F" strokelinewidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#191C1F" strokelinewidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="ratings">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <div className="title">
                                                {product.name}
                                            </div>
                                
                                            {product.discountedPrice ? (
                                                <div className="price">${product.discountedPrice} <del>${product.price}</del></div>
                                            ): (
                                                <div className="price">${product.price}</div>
                                            )}
                                        </div>
                                    </div>
                                )) : (
                                    currentPageProducts.map((product, index) => (
                                        <div className="product-card featured" key={index}>
                                            <div className="card-image">
                                                <img src={product.image} alt="" />
                                                <div className="card-hover">
                                                    <a href="#" className="hover-wishlist-btn">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="hover-add-to-cart-btn">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z" fill="#191C1F" stroke="#191C1F" strokeWidth="1.5"></path>
                                                            <path d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z" fill="#191C1F"></path>
                                                            <path d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="hover-view-btn" onClick={(e) => {
                                                        e.preventDefault()
                                                        setShowModal(true)
                                                        setSelectedProduct(product)
                                                    }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z" stroke="#191C1F" strokelinewidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#191C1F" strokelinewidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="ratings">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                                <div className="title">
                                                    {product.name}
                                                </div>
                                   
                                                {product.discountedPrice ? (
                                                    <div className="price">${product.discountedPrice} <del>${product.price}</del></div>
                                                ): (
                                                    <div className="price">${product.price}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )} 
                            </div>
                        </div>
                        <Pagination totalPages={totalPages} paginate={paginate} activePage={currentPage} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop