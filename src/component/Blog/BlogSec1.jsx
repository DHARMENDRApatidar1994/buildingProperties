import React from 'react'
import './Blog.css'

const BlogSec1 = () => {
  return (
    <div>
        <div className='blogsec1'>
            <div className='blogsec1-left'>
                <div>

                <h6>Home/<span>Blog</span></h6>
                <h2>Blog</h2>
                <p>Explore the latest trends and insights in real estate</p>
              
               </div>
            </div>
            <img src="BuildingIllustration.png" alt="" />
        </div>
        <div className='fbloginput'>
                       <input type="text" placeholder='Subscribe to our newsletter' />
                       <button className='fw-semibold'>Subscribe <i class="ri-arrow-right-s-line"></i> </button>
                </div>
    </div>
  )
}

export default BlogSec1