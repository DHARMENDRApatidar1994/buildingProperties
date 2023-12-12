import React from 'react'
import { carddata } from './Carddata'

const Choose = () => {
  return (
    <div >
        <h3 className='featuredtext'>Why Choose Us</h3>
        <div className='choosecard'>
        {carddata.map((value,index)=>(

      
            <div className='choosecard1' key={index}>
                <div className='iconbox'><img src={value.img} alt="" /></div>
                <div className='ms-3'>
                    <h6>{value.name}</h6>
                    <p>{value.para}</p>
                </div>
            </div>
              ))}
        
        </div>
    </div>
  )
}

export default Choose