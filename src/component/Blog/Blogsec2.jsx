import React from 'react'
import './Blog.css'
import { useNavigate } from 'react-router-dom'
import { blog } from './BlogData'

const Blogsec2 = () => {
    const navigate = useNavigate()
  return (
    <div>
      {blog.slice(0,1).map((value,index)=>(

   
        <div className='blogsec2' key={index}>
       
       <img  onClick={()=>{navigate(`/BlogDetailPage/${index}`)}} src={value.img} alt="" />
       <div className='blogsec2-right'>
       <h4>{value.title}</h4>
       <p>{value.desc}</p>
       <p>{value.para}</p>
       <div className='hakkies d-flex  align-items-center'>
        <img className='rounded-circle' src="Avatar.png" alt="" />
        <div className='ms-3 mt-3'>
            <h5>{value.name}</h5>
            <p>{value.date}</p>
        </div>
       </div>
       </div>
    </div>
       ))}
    </div>
  )
}

export default Blogsec2