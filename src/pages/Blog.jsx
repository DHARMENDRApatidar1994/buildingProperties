import React from 'react'
import BlogSec1 from '../component/Blog/BlogSec1'
import Blogsec2 from '../component/Blog/Blogsec2'
import BlogPart from '../component/Homepage/BlogPart'

const Blog = () => {
  return (
    <div>
        <BlogSec1/>
        <Blogsec2/>
        <div className='mb-5'>
        <BlogPart/>
        </div>
    </div>
  )
}

export default Blog