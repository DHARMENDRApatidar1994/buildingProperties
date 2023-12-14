import React from 'react'
import { investment } from '../forinvestment/InvestmentData'
import { rent } from '../forrent/RentData'
import { sale } from '../forsale/SaleData'
import bathhub from '../../assets/Images/property/bathub.png'


const Featured = () => {
  return (
    <div>

      {/* css in index.css from 217 to 352 */}
      {/* home page feature property section start */}
        <h3 className='featuredtext'>Featured Properties</h3>
        <div className='featuredcard'>
        {sale.slice(0,1).map((value,index)=>(

          
<div className='featuredcard1' key={index}>
    <div className='featuredimg'>
        <img src={value.image} alt="" />
        <h3><img className='ellipse' src="Ellipse 213.png" alt="" /> For Rent</h3>
        <i class="ri-heart-line "></i>
    </div>
    <div>
        <h4>£{value.price}</h4>
        <h5>{value.title}</h5>
    <p>{value.address}</p>
    <div className='featuredblack'>
      <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
      <p><img src={bathhub} alt="" />{value.bath} bath</p>
      <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
    </div>
</div> 
</div>
            ))}
            
            {rent.slice(0,1).map((value,index)=>(

          
<div className='featuredcard1' key={index}>
    <div className='featuredimg'>
        <img src={value.image} alt="" />
        <h3><img className='ellipse' src="yellow.png" alt="" />For Sale</h3>
        <i class="ri-heart-line "></i>
    </div>
    <div>
        <h4>£{value.price}</h4>
        <h5>{value.title}</h5>
    <p>{value.address}</p>
    <div className='featuredblack'>
      <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
      <p><img src={bathhub} alt="" />{value.bath} bath</p>
      <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
    </div>
</div> 
</div>
            ))}
            
            {investment.slice(0,1).map((value,index)=>(

          
            <div className='featuredcard1' key={index}>
                <div className='featuredimg'>
                    <img src={value.image} alt="" />
                    <h3><img className='ellipse' src="blue.png" alt="" />For Investment</h3>
                    <i class="ri-heart-line "></i>
                </div>
                <div>
                    <h4>£{value.price}</h4>
                    <h5>{value.title}</h5>
                <p>{value.address}</p>
                <div className='featuredblack'>
                  <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
                  <p><img src={bathhub} alt="" />{value.bath} bath</p>
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
        {/* home page feature property section end */}
    </div>
  )
}

export default Featured