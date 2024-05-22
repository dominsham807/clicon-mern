import React from 'react'
import { MdAccessTimeFilled, MdDashboard, MdLogout } from "react-icons/md"
import { PiShoppingCartBold } from "react-icons/pi" 
import { FaCodeCompare, FaLocationDot } from 'react-icons/fa6'
import { FaRegHeart, FaShoppingCart } from "react-icons/fa"
import { CiCreditCard1 } from 'react-icons/ci'
import { IoSettingsOutline } from 'react-icons/io5'

import "../styles/dashboard-sidenav.css"
import { useLocation } from 'react-router-dom'

const DashboardSideNav = () => {
    const location = useLocation()
    // console.log(location.pathname) 

    const navItems = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: <MdDashboard />
        },
        {
            name: "Order History",
            link: "/order-history",
            icon: <PiShoppingCartBold />
        },
        {
            name: "Track Order",
            link: "/dasboard-order-detail",
            icon: <FaLocationDot />
        },
        {
            name: "Shopping Cart",
            link: "/cart",
            icon: <FaShoppingCart />
        },
        {
            name: "Wishlist",
            link: "/wishlist",
            icon: <FaRegHeart />
        },
        {
            name: "Compare",
            link: "/compare",
            icon: <FaCodeCompare />
        },
        {
            name: "Cards & Address",
            link: "/dasboard-cards-address",
            icon: <CiCreditCard1 />
        },
        {
            name: "Browsing History",
            link: "/browsing-history",
            icon: <MdAccessTimeFilled />
        },
        {
            name: "Settings",
            link: "/settings",
            icon: <IoSettingsOutline />
        },
        {
            name: "Logout",
            link: "#",
            icon: <MdLogout />
        }
    ]

    return (
        <div className='dashboard-body-sidenav d-none d-xl-block'>
            <div className="dashboard-nav">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className={location.pathname === item.link ? "active" : ""}>
                            <a href={item.link}>
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DashboardSideNav