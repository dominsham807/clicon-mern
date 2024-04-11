import React from 'react'

import "../styles/pagination.css"

const Pagination = ({ totalPages, paginate, activePage }) => {
    const pageArray = [...Array(totalPages).keys()].map(i => i + 1)
    console.log(pageArray)

    // const [currentPage, setCurrentPage] = useState(1)
    
    return (
        <div className='pagination-row'>
            <ul className="pagination-ul">
                <li className='previous'>
                    <button 
                        className='page-link arrow' 
                        onClick={() => {
                            activePage > 1 ? paginate(activePage - 1) : ""
                        }} 
                        disabled={activePage === 1}
                        // href={`?page=${activePage > 1 ? activePage - 1 : "#"}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 12H3.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </li> 
                {pageArray.map((pageNum, index) => (
                    <li key={index}>
                        <a className={`page-link ${pageNum === activePage ? "active" : ""}`} onClick={() => paginate(pageNum)}>
                            {pageNum}
                        </a>
                    </li>
                ))} 
                <li className='next'>
                    <button 
                        className='page-link arrow' 
                        onClick={() => {
                            activePage < totalPages ? paginate(activePage + 1) : ""
                        }}
                        disabled={activePage === totalPages}
                        // href={`?page=${activePage < 6 ? activePage + 1 : "#"}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </li> 
            </ul>
        </div>
    )
}

export default Pagination