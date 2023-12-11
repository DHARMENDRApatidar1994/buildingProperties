import React from 'react'
import './ReviewPage.css'
import { review } from './ReviewData'

const ReviewPage = () => {
  return (
    <div>
         <div className='rentsec1'>
            <div className='rentsec1-left'>
                <div className="ms-5">

                <h6>Home/<span>Customer Review</span></h6>
                <h2>Customer Review</h2>
                <p>Got any questions or queries, one of our team member will be happy to help with your enquiry</p>
              
               </div>
            </div>
            <img src="BuildingIllustration.png" alt="" />
        </div>
        <h2 className='reviewpagecustomer'>Customer Review</h2>
        <div className='PageReview'>
        {review.map((value,index)=>(

      

        <div className="BoxReview" key={index}>
                        <div className="BtopReview">
                            <img src={value.img} alt="" />
                             <h3>{value.name}</h3>
                           </div>
                           <h6>{value.date}</h6>
                           <p>{value.para}</p>
                           <div className="BbtmReview">
                               <div className="iconsReview">
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               </div>
                               <div className="arrowReview">
                               <i class="ri-arrow-right-up-line"></i>
                               </div>
                           </div>
                        </div> 
                          ))}
                          </div>
    </div>
  )
}

export default ReviewPage