import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import DashboardSideNav from '../components/DashboardSideNav'

import "../styles/settings.css"

const Settings = () => {
    const [displayName, setDisplayName] = useState("Dominic Sham")
    const [username, setUsername] = useState("dominicsham807")
    const [fullName, setFullName] = useState("Sham Ching Hei Dominic")
    const [emailAddress, setEmailAddress] = useState("dominicsham2000@gmail.com")
    const [secondEmailAddress, setSecondEmailAddress] = useState("dominicsham807@gmail.com")
    const [phoneNumber, setPhoneNumber] = useState("90918589")

    return (
        <>
        <BreadCrumb parentSection={"User Account"} mainSection={"Settings"} />
        <div className="dashboard-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <DashboardSideNav />
                    </div>
                    <div className="col-lg-9">
                        <div className="account-setting">
                            <h6 className="setting-title">Account Setting</h6>
                            <div className="account-setting-main">
                                <div className="profile">
                                    <img src="/dominic.jpg" alt="" className='' />
                                </div>
                                <div className="setting-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="displayName" className="form-label">
                                                        Display Name 
                                                    </label>
                                                    <input type="text" value={displayName} className="form-control" onChange={(e) => setDisplayName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="username" className="form-label">
                                                        Username
                                                    </label>
                                                    <input type="text" value={username} className="form-control" onChange={(e) => setUsername(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="fullName" className="form-label">
                                                        Full Name 
                                                    </label>
                                                    <input type="text" value={fullName} className="form-control" onChange={(e) => setFullName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">
                                                        Email Address
                                                    </label>
                                                    <input type="email" value={emailAddress} className="form-control" onChange={(e) => setEmailAddress(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="secEmail" className="form-label">
                                                        Secondary Email
                                                    </label>
                                                    <input type="email" value={secondEmailAddress} className="form-control" onChange={(e) => setSecondEmailAddress(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber" className="form-label">
                                                        Phone Number
                                                    </label>
                                                    <input type="text" value={phoneNumber} className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div> 
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber" className="form-label">
                                                        Country / Region
                                                    </label>
                                                    <input type="text" value={phoneNumber} className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber" className="form-label">
                                                        State
                                                    </label>
                                                    <input type="text" value={phoneNumber} className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber" className="form-label">
                                                        Zip Code
                                                    </label>
                                                    <input type="text" value={phoneNumber} className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Settings