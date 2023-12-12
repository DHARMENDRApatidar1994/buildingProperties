import React, { useEffect, useState } from 'react'
import '../forrent/PropertyDetailPage.css'
import Signin from '../Popupfile/Signin'
import { useParams } from 'react-router-dom'
import { investment } from './InvestmentData'
import plan from '../../assets/Images/property/plan.png'
import map from '../../assets/Images/property/map.png'
import bath from '../../assets/Images/property/bathub24.png'
import calender from '../../assets/Images/property/calendar.png'

const InvestmentPropertyDetailPage = () => {
    const [open, setOpen] = useState(false)

    const [isShare, setIsShare] = useState(false)
    const [show, setShow] = useState(true);
    const [imageIndex, setImageIndex] = useState("");
    // console.log(idd, music);

    const { id } = useParams();
    //   console.log(id);
      const obj = investment[id];
    //   console.log(obj)
    //   console.log(blog);
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
                    <img className='firstimage' src={obj.image} alt="" />
                    <div className='fiveimage'>
                        <img src={obj.image} alt="" />
                        <img src={obj.image} alt="" />
                        <img src={obj.image} alt="" />
                        <img src={obj.image} alt="" />
                        <img src={obj.image} alt="" />
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
                        <h2 className='mt-5'>£{obj.price}</h2>
                        <h4 className='fw-semibold'>{obj.title}</h4>
                        <p>{obj.address}</p>
                        <h6><img className='d-inline' src={calender} alt="" /> Listed 2 days ago</h6>
                        <div className='col-10 d-flex   justify-content-between rounded align-items-center pt-2 mb-3'>
                            <p className='ms-3'><i class="ri-hotel-bed-fill me-2"></i>{obj.bed} bed</p>
                            <p><img className='d-inline' src={bath} alt="" />{obj.bath} bath</p>
                            <p className='me-3'><i class="ri-sofa-fill me-2"></i>{obj.furniture}</p>
                        </div>
                        <div>
                            <button onClick={() => setOpen(true)} className='call'>Call</button>
                            <button onClick={() => setOpen(true)} className='message'>Message</button>
                        </div>
                    </div>
                    </>
                    )}
                    </div>
               
            </div>
            <div className='property-description '>
                <h3 className='mt-4'>Description</h3>
                <p>Situated within the highly sought after village of Kennington is this three bedroom semi-detached family home located on Bagley Close.  Internally you are met with an enternace hall, living room, kitchen and dining room which offers access out into the rear garden.Following up the stairs onto the first floor sits three bedrooms and a family bathroom. 

Externally this property benefits from a front garden with a shared driveway to the right of the property itself offering access to the garage and rear garden.Floorplan and Energy Performance Certifcate (EPC) to follow.Kennington is a vibrant community village on the southern edge of Oxford, with excellent links to Oxford city and Abingdon town. By car the Southern by-pass and A34 are accessible within 1.0 miles There are local convenience shops, post office, doctor’s surgery, library, church, public house and St Swithun’s primary school and playgroup. Oxford railway station is located 2.48 miles away and Oxford City Centre is 2.8 miles away.<br /><br /></p>
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
                        <img className='col-12 mt-3' src={plan} alt="" />

                    </div>
                    <div className='col-lg-5 col-12'>
                        <h3 className='col-12 mt-4'>Map</h3>
                        <img className='col-12 mt-3' src={map} alt="" />

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
                        <p className='col-12'>You agree that Linked Bricks may contact you via phone/text about inquiry, which may involve the use of automated means. You also agree to our <span>Terms of use</span></p>
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
                    {investment.slice(0, 3).map((value, index) => (


                        <div className='featuredcard1' key={index}>
                            <div className='featuredimg'>
                                <img src={value.image} alt="" />
                                <i class="ri-heart-line "></i>
                            </div>
                            <div>
                                <h4>£{value.price} pcm</h4>

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

export default InvestmentPropertyDetailPage