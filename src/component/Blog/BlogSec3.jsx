import React from 'react'
import { useNavigate } from 'react-router-dom'
import { blog } from './BlogData'

const BlogSec3 = () => {
    const navigate = useNavigate()
  return (
    <div>
    {/* <h3 className='featuredtext'>Blog</h3> */}
    <div className='d-flex d-lg-row d-column flex-wrap   justify-content-evenly mb-5'>
        {blog.slice(1,10).map((value,index)=>(

       
    <div className='blogcard1' key={index}>
   
       <img  onClick={()=>{navigate(`/BlogDetailPage/${index+1}`)}} src={value.img} alt="" />
       <h4>{value.title}</h4>
       <p>{value.para}</p>
       <div className='hakkies d-flex  align-items-center'>
        <img className='rounded-circle' src={value.img1} alt="" />
        <div className='ms-3 mt-3'>
            <h5>{value.name}</h5>
            <p>{value.date}</p>
        </div>
       </div>
    </div>
 ))}
    </div>
</div>
  )
}

export default BlogSec3