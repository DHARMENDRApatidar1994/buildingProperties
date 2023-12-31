import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Signin from '../Popupfile/Signin';
import maillogo from '../../assets/Images/navimage/hdlogo.svg'
import Homepounds from '../../assets/Images/navimage/Home pounds.png'
import DashboardPage from '../dashboard/DashboardPage';
// import DashboardPage from '../dashboard/DashboardPage';

const Navbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false)
 
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
 

  const toggleSignIn = () => {
    setIsUserSignedIn(!isUserSignedIn);
  };

  const handleOpen = ()=>{
      setPopupOpen(true)
  }
  const handleClose = ()=>{
      setPopupOpen(false)
  }


  const handleItemClick = (item) => {
    setActiveItem(item);
    setPopupOpen(false)
  };
  const handleSign =(item) =>{
    setActiveItem(item);
    setOpen(true)
    setPopupOpen(false)
  }
  return (
    <div className='w-100 bg-light  ' style={{position:"fixed",zIndex:"999"}}>
        <div className='d-flex justify-content-lg-evenly justify-content-between  align-items-center ' >
       
            <img className='maillogo mt-2 mb-2 ms-lg-0 ms-5' src={maillogo}   alt="" />
            {isPopupOpen ? (<i onClick={handleClose} class="ri-close-line d-lg-none fw-bold fs-1 ms-5 "></i>):(<i onClick={handleOpen} class="ri-menu-line d-lg-none  fw-bold fs-2 ms-5 "></i>)}
        {isPopupOpen && ( 
        <div className='col-12  d-lg-none bg-light px-5 ' style={{position:"absolute",top:"8vmax",right:"1px",zIndex:"999"}}>
                <Link  onClick={handleClose} style={{textDecoration:"none",color:"black"}} to="/" > <h6 className='mt-3'><img src="hpme.img" alt="" />Home</h6></Link>
                <Link onClick={handleClose}  style={{textDecoration:"none",color:"black"}} to="/forsale" ><h6 className='mt-3' >For Sale</h6></Link>
                <Link onClick={handleClose}  style={{textDecoration:"none",color:"black"}} to="/forrent" ><h6 className='mt-3'>For rent</h6></Link>
                <Link onClick={handleClose}  style={{textDecoration:"none",color:"black"}} to="/forinvestment" ><h6 className='mt-3'>For investment</h6></Link>
                <Link onClick={handleClose} style={{textDecoration:"none",color:"black"}} to="/blog" ><h6 className='mt-3'>Blog</h6></Link>
               
                {isUserSignedIn ? (
            
                 
                  <h6 className='mt-3' onClick={handleClose}>Account</h6>
                  ) : (
            <h6 className='mt-3' onClick={() => handleSign('signin')}>Sign in</h6>
          )}
                <Link onClick={handleClose} className='text-decoration-none text-dark' to="/addlisting"><button className='border border-none rounded fw-semibold d-flex mt-3 mb-5' style={{backgroundColor:"#e8ae00"}}><img src="Home pounds.png"/>Add Listing</button></Link>
            </div>
        )}
            <div  className='cursorHover col-lg-6 col-md-8 d-lg-flex d-none  d-lg-initial justify-content-evenly align-items-center'>
                <Link className='hoverLink'  style={{textDecoration:"none"}} to="/" ><h5 style={{  backgroundColor: activeItem === 'home' ? '#ebfffd' : 'transparent' }} onClick={() => handleItemClick('home')}><img className='mb-1' style={{display:"inline"}} src="home.png" alt="" /> Home</h5></Link>
                <Link className='hoverLink' style={{textDecoration:"none"}}  to='/forsale'><h5 style={{  backgroundColor: activeItem === 'forsale' ? '#ebfffd' : 'transparent'  }} onClick={() => handleItemClick('forsale')}>For Sale</h5></Link> 
                <Link className='hoverLink' style={{textDecoration:"none"}}  to='/forrent'><h5 style={{backgroundColor: activeItem === 'forrent' ? '#ebfffd' : 'transparent'  }} onClick={() => handleItemClick('forrent')}>For rent</h5></Link> 
                <Link className='hoverLink'  style={{textDecoration:"none"}}  to='/forinvestment'><h5 style={{  backgroundColor: activeItem === 'forinvestment' ? '#ebfffd' : 'transparent'  }} onClick={() => handleItemClick('forinvestment')}>For investment</h5></Link> 
                <Link className='hoverLink'  style={{textDecoration:"none"}}  to='/blog'><h5 style={{  backgroundColor: activeItem === 'blog' ? '#ebfffd' : 'transparent'  }} onClick={() => handleItemClick('blog')}>Blog</h5></Link>
                {isUserSignedIn ? (
                  <Link className='hoverLink' style={{textDecoration:"none"}} > <h5 style={{  backgroundColor: activeItem === 'signin' ? '#ebfffd' : 'transparent' }}>Account</h5></Link>
                  ) : (
                 <Link className='hoverLink' style={{textDecoration:"none"}} > <h5   style={{  backgroundColor: activeItem === 'signin' ? '#ebfffd' : 'transparent' }} onClick={() => handleSign('signin')}>Sign in</h5></Link>
                )}
            </div>
            <div>
                <Link className='text-decoration-none text-dark' to="/addlisting"><button className='border border-none rounded fw-semibold p-2  d-none d-lg-flex' style={{backgroundColor:"#e8ae00"}}><img src={Homepounds}/>Add Listing</button></Link>
            </div>
        </div>
     
         <Signin open={open} setOpen={setOpen} onSignInClick={toggleSignIn} />
          {/* <DashboardPage onDashboardPageClick={toggleSignIn}/> */}
        
         
       

    </div>
  )
}

export default Navbar