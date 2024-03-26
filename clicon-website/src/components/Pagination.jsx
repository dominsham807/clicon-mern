import React, { useState } from 'react'

import "../styles/pagination.css"

const Pagination = () => {
    const pageArray = [...Array(6).keys()].map(i => i + 1)
    console.log(pageArray)

    const [currentPage, setCurrentPage] = useState(1)
    
    return (
        <div className='pagination-row'>
            <ul className="pagination-ul">
                <li className='previous'>
                    <a className='page-link' href={`?page=${currentPage > 1 ? currentPage - 1 : "#"}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 12H3.75" stroke="#FA8232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#FA8232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                </li> 
                {pageArray.map((pageNum, index) => (
                    <li key={index}>
                        <a className={`page-link ${currentPage === pageNum ? "active" : ""}`} href={`?page=${pageNum}`}>
                            {pageNum}
                        </a>
                    </li>
                ))} 
                <li className='next'>
                    <a className='page-link' href={`?page=${currentPage < 6 ? currentPage + 1 : "#"}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="#FA8232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#FA8232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                </li> 
            </ul>
        </div>
    )
}

export default Pagination