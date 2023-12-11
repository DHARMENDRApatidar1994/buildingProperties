import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <img src="bg.png" alt="" />
                <div className='finputmain'>
                <div className='finput'>
                       <input type="text" placeholder='Subscribe to our newsletter' />
                       <button className='fw-semibold'>Subscribe <i class="ri-arrow-right-s-line"></i> </button>
                </div>
                </div>
                <div className='fdisplay'>
                    <div className='fmain'>
                        <div className='fone'>
                            <h6>Sell your property</h6>
                            <h6>Let youe property</h6>
                            <h6>Invest your property</h6>
                        </div>
                        <div className='ftwo'>
                            <h6>Rent a property</h6>
                            <h6>Buy a property</h6>
                            <h6>Invest in a property</h6>
                        </div>
                        <div className='fthree'>
                           <Link  className='text-decoration-none ' to="/about"> <h6>About us</h6></Link>
                            <Link  className='text-decoration-none ' to='/contact'><h6>Contact us</h6></Link>
                        </div>
                        <div className='ffour'>
                         <Link  className='text-decoration-none ' to='/privacypolicy'>  <h6>Privacy policy</h6></Link> 
                            <Link  className='text-decoration-none' to='/termsofuse'><h6>Terms of use</h6></Link>
                        </div>
                    </div>
                </div>

                <div className='flast'>
                <div className='flastone'>
                <i class="ri-facebook-fill"></i>
                <i class="ri-linkedin-fill"></i>
                <i class="ri-google-play-line"></i>
                <i class="ri-instagram-line"></i>
                </div>
                <div className='flasttwo'>
                    <h6>@ 2023 Linked Bricks Limited All rights reserved</h6>
                </div>
                </div>
               
            </div>
        </div>
       
    )
}

export default Footer