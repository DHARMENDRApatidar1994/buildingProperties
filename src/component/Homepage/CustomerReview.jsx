import React from 'react'
import { review } from '../review/ReviewData'
import { useNavigate } from 'react-router-dom'

const CustomerReview = () => {
  const navigate = useNavigate()
  return (
    <>
     <div className='CustomerReview'>
          <div className="customer">
              <div className="CustomerTop">
                    <h2>Customer Reviews</h2> 
                    <button onClick={()=>{navigate("/reviewpage")}}>See all reviews <i class="ri-arrow-right-s-line"></i></button>
              </div>
              <div className="customerMedium">
                    <p>See what our client's are saying</p>
              </div>
              <div className="customerBottom">
                {review.map((value,index)=>(

               
                        <div onClick={()=>{navigate("/reviewpage")}} className="Box" key={index}>
                           <div className="Btop">
                            <img src={value.img} alt="" />
                             <h3>{value.name}</h3>
                           </div>
                           <h6>{value.date}</h6>
                           <p>{value.shortpara}<span onClick={()=>{navigate("/reviewpage")}} className='text-primary'>Read-more</span></p>
                           <div className="Bbtm">
                               <div className="icons">
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               <i class="ri-star-s-fill"></i>
                               </div>
                               <div className="arrow">
                               <i class="ri-arrow-right-up-line"></i>
                               </div>
                           </div>
                        </div> 
                         ))}           
              </div>
          </div>
     </div>
    </>
  )
}

export default CustomerReview