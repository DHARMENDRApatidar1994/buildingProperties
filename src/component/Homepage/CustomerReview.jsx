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
                            <img src="Avatar.png" alt="" />
                             <h3>Guy Hawkins(Landlord)</h3>
                           </div>
                           <h6>Jun 21,2021</h6>
                           <p>Our property sale was Professionally handled by Linked Throughout the entire process...</p>
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
                        <div className="Box">
                        <div className="Btop">
                            <img src="Avatar3.png" alt="" />
                             <h3>Guy Hawkins(Landlord)</h3>
                           </div>
                           <h6>Jun 21,2021</h6>
                           <p>Our property sale was Professionally handled by Linked Throughout the entire process...</p>
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
                        <div className="Box">
                        <div className="Btop">
                            <img src="Avatar2.png" alt="" />
                             <h3>Guy Hawkins(Landlord)</h3>
                           </div>
                           <h6>Jun 21,2021</h6>
                           <p>Our property sale was Professionally handled by Linked Throughout the entire process...</p>
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
                           </div></div> 
                        <div className="Box">
                        <div className="Btop">
                            <img src="Avatar3.png" alt="" />
                             <h3>Guy Hawkins(Landlord)</h3>
                           </div>
                           <h6>Jun 21,2021</h6>
                           <p>Our property sale was Professionally handled by Linked Throughout the entire process...</p>
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
                           </div></div> 
              </div>
          </div>
     </div>
    </>
  )
}

export default CustomerReview