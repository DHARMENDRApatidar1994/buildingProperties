import React from 'react'
import './Blog.css'
import { blog } from './BlogData';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
    const { id } = useParams();
//   console.log(id);
  const obj = blog[id];
//   console.log(obj)
//   console.log(blog);
   
  return (
    <div>
        <div className='detailpage container'>
        <h6 className='bg-dark col-lg-5 col-12 p-2 mt-4 mb-3 px-3 rounded text-light'>Home/Blog/<span style={{color:"#01b8c6"}}>{obj.title}</span></h6>
        <div className='rounded-overlay'>
            <img className='rounded'  src={obj.img} alt="" />
            <div className='blogdetailpage-icon'>
                                    <i class="ri-facebook-fill"></i>
                                    <i class="ri-whatsapp-line"></i>
                                    <i class="ri-linkedin-fill"></i>
                                    <i class="ri-instagram-line"></i>
                                    <button className='links'><i class="ri-links-line"></i>Copy link</button>
            </div>
            </div>
            <h4>{obj.title}</h4>
       <p>{obj.desc}</p>
       <h5>{obj.heading1}</h5>
       <p>{obj.para1}</p>
       <h5>{obj.heading2}</h5>
       <p>{obj.para2}</p>
       <h5>{obj.heading3}</h5>
       <p>{obj.para3}</p>
       <h5>{obj.heading4}</h5>
       <p>{obj.para4}</p>
       <h5>{obj.heading5}</h5>
       <p>{obj.para5}</p>
       <div className='tags'>
        <h5>Tags:</h5>
        <li>Selling</li>
        <li>House Prices</li>
        <li>Research</li>
       </div>
       <h4>Recent articles</h4>
       <div className='recentblog'>
      
        {blog.slice(1,5).map((value,index)=>(

      
        <div className='recentblog1' key={index}>
            <img src={value.img} alt="" />
            <div>
                <h6>{value.title}</h6>
                <p>{value.para}</p>
            </div>
        </div>
          ))}
      
       </div>
        </div>

    </div>
  )
}

export default BlogDetailPage