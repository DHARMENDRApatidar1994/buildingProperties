import React, { useState } from 'react'
import Rating from '../../component/Popupfile/Rating'

const DashboardPage = () => {
    const [openRating,setOpenRating] = useState(true)

    return (
        <div>

            <div className='d-flex flex-lg-row flex-md-row flex-column-reverse mb-lg-0 mb-5'>
                <div className='col-lg-3 col-md-4 col-12'>
                    <div className='d-lg-flex d-none align-items-center mb-3 bg-dark me-3 ms-3 rounded mt-3'><img className='ms-3 me-3' src="dashboards.png" alt="" />
                        <p className=' bg-dark text-light mt-3'>Dashboard</p>
                    </div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="property.png" alt="" /><p className='col-8 mt-3'>My properties</p><span className='col-2'>12</span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="message.png" alt="" /><p className='col-8 mt-3'>Messages</p><span>2</span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="heart.png" alt="" /><p className='col-8 mt-3'>Saved properties</p><span>1</span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="notification.png" alt="" /><p className='col-8 mt-3'>Notification</p><span>2</span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="profile.png" alt="" /><p className='col-8 mt-3'>Profile</p><span></span></div>
                    <div><h6 className='ms-5 text-secondary fw-dark bg-opacity-75'>Setting</h6></div>
                    <div className='d-flex align-items-center '><img className='me-3 ms-3' src="manage.png" alt="" /><p className='col-8 mt-3'>Manage preferences</p><span></span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="chage.png" alt="" /><p className='col-8 mt-3'>Change password</p><span></span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="chage.png" alt="" /><p className='col-8 mt-3'>Change Email address</p><span></span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="signout.png" alt="" /><p className='col-8 mt-3'>Sign out</p><span></span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="rateus.png" alt="" /><p className='col-8 mt-3'>Rate us</p><span></span></div>
                    <div className='d-flex align-items-center'><img className='me-3 ms-3' src="delete.png" alt="" /><p className='col-8 mt-3 text-danger fw-bold'>Delete account</p><span></span></div>
                </div>
                <div className='col-lg-9 col-md-8 col-12'>
                    <div>
                        <div className='rentsec1'>
                            <div className='rentsec1-left'>
                                {/* image ke upr ka content yha likhe */}
                            </div>
                            <img src="BuildingIllustration.png" alt="" />
                        </div>
                    </div>
                    {/* image ke niche ka content yha likhe  */}
                </div>
            </div>
            <Rating openRating={openRating} setOpenRating={setOpenRating}/>
        </div>
    )
}

export default DashboardPage