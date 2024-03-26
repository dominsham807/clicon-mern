import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import { useState } from "react"
import Footer from "./Footer"

const Layout = () => {
    const [showHeader, setShowHeader] = useState(true)

    return (
        <>
            {showHeader && <Header setShowHeader={setShowHeader}/>}
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout