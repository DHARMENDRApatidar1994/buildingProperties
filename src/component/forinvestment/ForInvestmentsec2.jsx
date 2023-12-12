import React from 'react'
import { investment } from '../forinvestment/InvestmentData'
import { useNavigate } from 'react-router-dom'
const ForInvestmentsec2 = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
    <h3 className='featuredtext '>Properties For Investment</h3>
    <select className='p-1 me-3'>
        <option >Sort order: <span className='fw-bold'>Anytime</span></option>
    </select>
       </div>
    <div className='featuredcard'>
        {investment.map((value,index)=>(

       
        <div className='featuredcard1' key={index}>
            <div className='featuredimg'>
                <img onClick={()=>{navigate(`/investmentpropertyDetailPage/${index}`)}} src={value.image} alt="" />
                <i class="ri-heart-line "></i>
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                <h4><i class="ri-money-pound-circle-fill"></i>{value.price} pcm</h4>
                <h6 className='mt-3 '>Est. Value:<i class="ri-money-pound-circle-fill"></i>{value.est}</h6>
                </div>
                <h5>{value.title}</h5>
            <p>{value.address}</p>
            <div className='featuredblack'>
              <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
              <p><img src="bathub.png" alt="" />{value.bath}</p>
              <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
            </div>
        </div>
       
        
        </div>
       ))}
      
       
    </div>
    <div className='d-flex justify-content-end me-5 mb-4'>
    <i class="ri-arrow-left-s-line fs-3 me-3"></i>
    <i class="border rounded ri-arrow-right-s-line me-5 fs-3 px-2"></i>
    </div>
</div>
  )
}

export default ForInvestmentsec2