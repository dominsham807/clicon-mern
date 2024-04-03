import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BreadCrumb from '../components/BreadCrumb'
import DashboardSideNav from '../components/DashboardSideNav'
import { BACKEND_URL } from '../constants'

import "../styles/settings.css" 
import toast from 'react-hot-toast'


const Settings = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("") 
    const [email, setEmail] = useState("") 
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [photo, setPhoto] = useState("")
    const [photoPreview, setPhotoPreview] = useState('')
    const [photoName, setPhotoName] = useState("")

    console.log(photo)
    console.log(photoPreview)
    console.log(photoName)

    const navigate = useNavigate()

    const getProfile = async() => {
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/profile`) 
        console.log(res)
        
        if(res.data.success){
            setFirstName(res.data?.user.firstName)
            setLastName(res.data?.user.lastName)
            setEmail(res.data?.user.email)
            setUsername(res.data?.user.username) 
            setPhoneNumber(res.data?.user.phone) 
            setCountry(res.data?.user.country) 
            setAddress(res.data?.user.address) 
            if(res.data?.user.photo){
                setPhotoPreview(`http://localhost:4000/profile/${res.data?.user?.photo?.filename}`)
            }
        }
    }

    useEffect(() => {
        setPhotoPreview("/icon.png")
        getProfile()  
    }, [firstName, lastName])

    const handlePhotoChange = (e) => {
        const file = e.target.files[0]
        setPhoto(file)
        setPhotoName(file.name)
        setPhotoPreview(URL.createObjectURL(file))
    }

    const handleUpdateProfile = async(e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("firstName", firstName)
        data.append("lastName", lastName)
        data.append("username", username)
        data.append("email", email)
        data.append("phone", phoneNumber)
        data.append("country", country)
        data.append("address", address)
        if(photo){
            data.append("photo", photo)
        }

        try{
            const res = await axios.put(`${BACKEND_URL}/api/v1/user/profile`, data)
            if(res.data.success) {
                toast(res.data.message,{type: "success", draggable:false})
                navigate("/")
            } else {
                toast(res.data.message,{type: "error", draggable:false})
            }
        } catch(error){
            console.log(error);
            toast("Something Went Wrong",{type: "error", draggable:false})
        }
    }

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
                                    <img src={photoPreview} alt="" />
                                    <input type="file" name='photo' accept='image/*' onChange={handlePhotoChange}  /> 
                                </div>
                                <div className="setting-form">
                                    <form onSubmit={handleUpdateProfile}>
                                        <div className="row"> 
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstName" className="form-label">
                                                        First Name 
                                                    </label>
                                                    <input type="text" value={firstName} className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastName" className="form-label">
                                                        Last Name 
                                                    </label>
                                                    <input type="text" value={lastName} className="form-control" onChange={(e) => setLastName(e.target.value)} />
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
                                                    <label htmlFor="email" className="form-label">
                                                        Email Address
                                                    </label>
                                                    <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
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
                                                    <input type="text" value={country} className="form-control" onChange={(e) => setCountry(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="address" className="form-label">
                                                        Address
                                                    </label>
                                                    <textarea className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group update-profile-btn">
                                                    <button type='submit' className="btn btn-primary w-100">Update Profile</button>
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