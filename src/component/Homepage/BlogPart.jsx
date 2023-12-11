import React from 'react'
import { blog } from '../Blog/BlogData'
import { useNavigate } from 'react-router-dom'

const BlogPart = () => {
  const navigate = useNavigate()
  return (
    <div style={{overflowX:"hidden"}}>
      <h3 className='featuredtext'>Blog</h3>
      <div className='scroll-animation '>
        {blog.map((value, index) => (


          <div className='blogcard1' key={index}>

            <img  onClick={()=>{navigate(`/BlogDetailPage/${index}`)}} src={value.img} alt="" />
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

export default BlogPart