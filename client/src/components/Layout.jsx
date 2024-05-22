import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Loader from "./Loader"

const Layout = () => {
    const [showHeader, setShowHeader] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadDataFetch = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }

        loadDataFetch()
    }, [])

    return (
        isLoading ? (
            <Loader size="100px" background="#fff" />
        ) : (
            <>
            {showHeader && <Header setShowHeader={setShowHeader}/>}
            <Navbar />
            <Outlet />
            <Footer />
            </>
        ) 
    )
}

export default Layout