import React, { useState } from 'react'
import { FaGear } from 'react-icons/fa6'

import "../styles/mode-switcher.css"

const ModeSwitcher = () => {
    const [openSwitcher, setOpenSwitcher] = useState(false)

    return (
        <div className={`mode-switcher-panel-wrapper ${openSwitcher ? "open" : ""}`}>
            <div className="mode-switcher-panel">
                <div className="panel-group">
                    <div className="panel-title">
                        <h6>Primary Color</h6>
                    </div>
                    <ul className="color-skin">
                        <li className="color-item primary" style={{ backgroundColor: "rgb(245, 30, 70)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 104, 225)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 149, 182)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(100, 83, 247)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(114, 56, 129)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(250, 153, 40)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(253, 102, 2)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(89, 178, 16)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(255, 116, 159)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(42, 52, 71)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(75, 0, 130)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(248, 0, 140)" }}></li>
                    </ul>
                </div>
                <div className="panel-group">
                    <div className="panel-title">
                        <h6>Secondary Color</h6>
                    </div>
                    <ul className="color-skin">
                        <li className="color-item primary" style={{ backgroundColor: "rgb(245, 30, 70)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 104, 225)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 149, 182)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(100, 83, 247)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(114, 56, 129)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(250, 153, 40)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(253, 102, 2)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(89, 178, 16)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(255, 116, 159)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(42, 52, 71)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(75, 0, 130)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(248, 0, 140)" }}></li>
                    </ul>
                </div>
                <div className="panel-group">
                    <div className="panel-title">
                        <h6>Menu Bar Text Color</h6>
                    </div>
                    <ul className="color-skin">
                        <li className="color-item primary" style={{ backgroundColor: "rgb(245, 30, 70)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 104, 225)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 149, 182)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(100, 83, 247)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(114, 56, 129)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(250, 153, 40)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(253, 102, 2)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(89, 178, 16)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(255, 116, 159)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(42, 52, 71)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(75, 0, 130)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(248, 0, 140)" }}></li>
                    </ul>
                </div>
                <div className="panel-group">
                    <div className="panel-title">
                        <h6>Menu Bar Background Color</h6>
                    </div>
                    <ul className="color-skin">
                        <li className="color-item primary" style={{ backgroundColor: "rgb(245, 30, 70)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 104, 225)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(0, 149, 182)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(100, 83, 247)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(114, 56, 129)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(250, 153, 40)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(253, 102, 2)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(89, 178, 16)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(255, 116, 159)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(42, 52, 71)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(75, 0, 130)" }}></li>
                        <li className="color-item primary" style={{ backgroundColor: "rgb(248, 0, 140)" }}></li>
                    </ul>
                </div>
                <div className="switcher-minimize-button" onClick={() => setOpenSwitcher(!openSwitcher)}>
                    <FaGear />
                </div>
            </div>
        </div>
    )
}

export default ModeSwitcher