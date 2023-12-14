import React from 'react'
import Homesec1 from '../component/Homepage/Homesec1'
import Featured from '../component/Homepage/Featured'
import Choose from '../component/Homepage/Choose'
import Blog from '../component/Homepage/BlogPart'
import Properties from '../component/Homepage/Properties'
import CustomerReview from '../component/Homepage/CustomerReview'
import About from './About'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div>
         <Homesec1/>
      <Featured/>
     <Choose/>
     <Blog/>
     <Properties/>
     <CustomerReview/>
    </div>
  )
}

export default Homepage