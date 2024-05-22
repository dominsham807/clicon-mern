import React from 'react'
import ErrorImage from "../assets/img/error.png"

import "../styles/pagenotfound.css"

const PageNotFound = () => {
    return (
        <div className='error-body text-center'>
            <div className="container">
                <div className="error-image-body">
                    <img src={ErrorImage} className='mw-100' />
                </div>
                <div className="error-content">
                    <h2 className='title'>404: Page Not Found</h2>
                    <p className="text">
                        Something went wrong. It’s look that your requested could not be found. <br />
                        It’s look like the link is broken or the page is removed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound