import React, { useEffect, useState } from 'react'
import './PropertyDetailPage.css'
import { sale } from '../forsale/SaleData'
import Signin from '../Popupfile/Signin'

const PropertyDetailPage = () => {
    const [open, setOpen] = useState(false)

    const [isShare, setIsShare] = useState(false)
    const [show, setShow] = useState(true);
    const [imageIndex, setImageIndex] = useState("");
    // console.log(idd, music);
    const handleClick = (index) => {
        setImageIndex(index);
        setShow(false);
    };
    const slideImage = (step, len) => {
        console.log("len", len);
        const next_index = (imageIndex + step + len) % len;
        console.log(next_index);
        setImageIndex(next_index);
    };

    useEffect(() => {
        console.log(imageIndex, "img index");
    }, [imageIndex]);

    const handleShare = () => {
        setIsShare(true)
    }
    const handeCloseShare = () => {
        setIsShare(false)
    }
    return (
        <div>
            <div className='propertydetail'>
                <h4 className='heading'><i class="ri-arrow-left-s-line"></i>Bach to search result</h4>

                <div className='propertyimage'>
                    {show && (
                        <>
                    <img className='firstimage' src="sale4.png" alt="" />
                    <div className='fiveimage'>
                        <img src="sale4.png" alt="" />
                        <img src="sale4.png" alt="" />
                        <img src="sale4.png" alt="" />
                        <img src="sale4.png" alt="" />
                        <img src="sale4.png" alt="" />
                    </div>
                    <div className='propertyinfo'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='selling'>
                                <h1>.</h1>
                                <span>For sale</span>
                            </div>
                            <div>
                                <i onClick={handleShare} class="ri-share-line me-3" style={{ cursor: "pointer" }}></i>
                                <i class="ri-heart-line"></i>
                            </div>
                            {isShare &&

                                <div className='shareproperty'>
                                    <h6>Share this property</h6>
                                    <i onClick={handeCloseShare} class="ri-close-line"></i>
                                    <i class="ri-facebook-fill"></i>
                                    <i class="ri-whatsapp-line"></i>
                                    <i class="ri-linkedin-fill"></i>
                                    <i class="ri-instagram-line"></i>
                                    <button><i class="ri-links-line"></i>Copy link</button>
                                </div>
                            }
                        </div>
                        <h2><i class="ri-money-pound-circle-fill"></i>7,250</h2>
                        <h4>Semi detached house</h4>
                        <p>Southfield Road, Oxford OX 4</p>
                        <h6>Listed 2 days ago</h6>
                        <div>
                            <p>3 beds</p>
                            <p>2 baths</p>
                            <p>semifurnished</p>
                        </div>
                        <div>
                            <button onClick={() => setOpen(true)} className='call'>Call</button>
                            <button onClick={() => setOpen(true)} className='message'>Message</button>
                        </div>
                    </div>
                    </>
                    )}
                    </div>
                {/* {!show && (
                    <div className="imagedata">
                        <div className="imagedata1">
                            <i
                                onClick={() => slideImage(-1, imgArray.length)}
                                className="ri-arrow-drop-left-line fs-1 text-dark"
                            ></i>
                            <img
                                src={imgArray[imageIndex]}
                                alt=""
                                className="bdahoja"
                            />
                            <i
                                onClick={() => slideImage(1, imgArray.length)}
                                className="ri-arrow-drop-right-line fs-1 text-dark"
                            ></i>
                        </div>
                        <i
                            class="ri-close-circle-line fs-2"
                            onClick={() => setShow(true)}
                        ></i>
                    </div>
                )} */}
            </div>
            <div className='property-description '>
                <h3 className='mt-4'>Description</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat officiis repellendus doloribus eum dolores nostrum ut, vitae quibusdam rem numquam libero! Et labore ipsam cupiditate corrupti ratione nulla odio illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium corporis voluptatibus quam repudiandae nisi deleniti adipisci, iusto perferendis vel velit.</p>
                <h5>See full description <i class="ri-arrow-down-s-line"></i></h5>
                <h3 className='mt-4 col-10'>Property features</h3>
                <div className=' d-flex flex-wrap justify-content-between '>
                    <div className='col-lg-5 col-12'>
                        <h6 className='col-lg-5 col-12'>Exterior features</h6>
                        <li className='col-lg-5 col-12'>Two Double Bedrooms</li>
                        <li className='col-lg-5 col-12'>Two Bathrooms</li>
                        <li className='col-lg-5 col-12'>Porter</li>
                        <li className='col-lg-5 col-12'>High Ceilings</li>
                        <li className='col-lg-5 col-12'>EPC Rating C</li>
                        <li className='col-lg-5 col-12'>Kitchen</li>
                    </div>
                    <div className='col-lg-5 col-12 mt-lg-0 mt-3'>
                        <h6 className='col-lg-5 col-12'>Interior features</h6>
                        <li className='col-lg-5 col-12'>Two Double Bedrooms</li>
                        <li className='col-lg-5 col-12'>Two Bathrooms</li>
                        <li className='col-lg-5 col-12'>Porter</li>
                        <li className='col-lg-5 col-12'>High Ceilings</li>
                        <li className='col-lg-5 col-12'>EPC Rating C</li>
                        <li className='col-lg-5 col-12'>Kitchen</li>



                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-between'>
                    <div className='col-lg-5 col-12'>
                        <h3 className='col-12 mt-4'>Floor Plan</h3>
                        <img className='col-12' src="plan.png" alt="" />

                    </div>
                    <div className='col-lg-5 col-12'>
                        <h3 className='col-12 mt-4'>Map</h3>
                        <img className='col-12' src="map.png" alt="" />

                    </div>

                </div>
                <div className='col-12 d-flex flex-wrap justify-content-between mb-5'>
                    <div className='selecttour col-lg-5 col-12 mt-4 shadow px-3 rounded' >
                        <h3 className=' mt-4'>Shedule A Tour</h3>
                        <input className='col-12 mt-3 border border-warning rounded p-2' type="date" placeholder='select date' />
                        <input className='col-12 mt-3 border border-warning rounded p-2' type="time" placeholder='select time' />
                        <input className='col-12 mt-3 border border-warning rounded p-2' type="text" placeholder='enter name' />
                        <input className='col-12 mt-3 mb-4 border border-warning rounded p-2' type="number" placeholder='enter number' />
                        <button onClick={() => setOpen(true)} className='border border-none mt-4 p-1 rounded fw-semibold col-12 bg-warning'>Schedule a tour</button>
                        <p className='col-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum maxime  quaerat, porro suscipit delectus! <span>Terms of use</span></p>
                    </div>
                    <div className='col-lg-5 col-12  shadow rounded px-3 mt-4'>
                        <h3 className=' mt-4'>Mortgage Calculator</h3>
                        <label className='col-12'>Price</label>
                        <input className='col-12 mt-1 border border-warning rounded p-2' type="number" placeholder='7,250' />
                        <label className='col-12 mt-3'>Repayment Term</label>
                        <select className='col-12 mt-1 border border-warning rounded p-2'>
                            <option>5 Years</option>
                            <option>10 Years</option>
                            <option>15 Years</option>
                            <option>20 Years</option>
                        </select>
                        <label className='col-12 mt-3'>Intrest Rate</label>
                        <input className='col-12 mt-1 border border-warning rounded p-2' type="number" placeholder='5.5%' />
                        <p className='mt-1 fw-semibold'>500 due per month</p>
                        <button className='border border-none mb-lg-0 mb-4 p-1 rounded fw-semibold col-12 bg-warning'>Submit</button>



                    </div>





                </div>
                <h3 className=' mt-4'>Similar Properties Nearby</h3>
                <div className='featuredcard'>
                    {sale.slice(0, 3).map((value, index) => (


                        <div className='featuredcard1' key={index}>
                            <div className='featuredimg'>
                                <img src={value.image} alt="" />
                                <i class="ri-heart-line "></i>
                            </div>
                            <div>
                                <h4><i class="ri-money-pound-circle-fill"></i>{value.price} pcm</h4>

                                <h5>{value.title}</h5>
                                <p>{value.address}</p>
                                <div className='featuredblack'>
                                    <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
                                    <p><img src="bathub.png" alt="" />{value.bath}</p>
                                    <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>

            </div>
            <Signin open={open} setOpen={setOpen} />
        </div>
    )
}

export default PropertyDetailPage