import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false)
 

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
  }
  return (
    <div>
        <div className='d-flex justify-content-lg-evenly justify-content-between  align-items-center ' >
       
            <img className='maillogo mt-2 mb-2 ms-lg-0 ms-5' src="maillogo.png"   alt="" />
            {isPopupOpen ? (<i onClick={handleClose} class="ri-close-circle-line d-lg-none fw-bold fs-2 ms-5 "></i>):(<i onClick={handleOpen} class="ri-menu-line d-lg-none  fw-bold fs-2 ms-5 "></i>)}
        {isPopupOpen && ( 
        <div className='ms-3 d-lg-none    bg-dark p-2 text-light px-5 ' style={{position:"absolute",top:"8vmax",right:"1px",zIndex:"999"}}>
                <Link  style={{textDecoration:"none",color:"white"}} to="/" > <h6><img src="hpme.img" alt="" />Home</h6></Link>
                <Link  style={{textDecoration:"none",color:"white"}} to="/forsale" ><h6 >For Sale</h6></Link>
                <Link  style={{textDecoration:"none",color:"white"}} to="/forrent" ><h6 >For rent</h6></Link>
                <Link  style={{textDecoration:"none",color:"white"}} to="/forinvestment" ><h6>For investment</h6></Link>
                <Link  style={{textDecoration:"none",color:"white"}} to="/blog" ><h6>Blog</h6></Link>
                <h6 onClick={() => handleSign('signin')}>Sign in</h6>
                <Link className='text-decoration-none text-dark' to="/addlisting"><button className='border border-none rounded fw-semibold d-flex' style={{backgroundColor:"#e8ae00"}}><img src="Home pounds.png"/>Add Listing</button></Link>
            </div>
        )}
            <div className='col-lg-6 col-md-8 d-lg-flex d-none  d-lg-initial justify-content-evenly align-items-center'>
                <Link  style={{textDecoration:"none",color:"black"}} to="/" ><h5 style={{ cursor: 'pointer', backgroundColor: activeItem === 'home' ? 'transparent' : '#ebfffd',padding:"6px",borderRadius:"10px",fontWeight:"400" }} onClick={() => handleItemClick('home')}><img className='mb-1' style={{display:"inline"}} src="home.png" alt="" /> Home</h5></Link>
                <Link  style={{textDecoration:"none",color:"black"}}  to='/forsale'><h5 style={{ cursor: 'pointer', backgroundColor: activeItem === 'forsale' ? '#ebfffd' : 'transparent',padding:"6px",borderRadius:"10px",fontWeight:"400"  }} onClick={() => handleItemClick('forsale')}>For Sale</h5></Link> 
                <Link  style={{textDecoration:"none",color:"black"}}  to='/forrent'><h5 style={{ cursor: 'pointer', backgroundColor: activeItem === 'forrent' ? '#ebfffd' : 'transparent',padding:"6px",borderRadius:"10px",fontWeight:"400"  }} onClick={() => handleItemClick('forrent')}>For rent</h5></Link> 
                <Link  style={{textDecoration:"none",color:"black"}}  to='/forinvestment'><h5 style={{ cursor: 'pointer', backgroundColor: activeItem === 'forinvestment' ? '#ebfffd' : 'transparent',padding:"6px",borderRadius:"10px",fontWeight:"400"  }} onClick={() => handleItemClick('forinvestment')}>For investment</h5></Link> 
                <Link  style={{textDecoration:"none",color:"black"}}  to='/blog'><h5 style={{ cursor: 'pointer', backgroundColor: activeItem === 'blog' ? '#ebfffd' : 'transparent',padding:"6px",borderRadius:"10px",fontWeight:"400"  }} onClick={() => handleItemClick('blog')}>Blog</h5></Link>
                <h5  style={{ cursor: 'pointer', backgroundColor: activeItem === 'signin' ? '#ebfffd' : 'transparent',padding:"6px",borderRadius:"10px",fontWeight:"400"  }} onClick={() => handleSign('signin')}>Account</h5>
            </div>
            <div>
                <Link className='text-decoration-none text-dark' to="/addlisting"><button className='border border-none rounded fw-semibold p-2  d-none d-lg-flex' style={{backgroundColor:"#e8ae00"}}><img src="Home pounds.png"/>Add Listing</button></Link>
            </div>
        </div>
     
         {/* <Signin open={open} setOpen={setOpen}/> */}
       

    </div>
  )
}

export default DashBoard