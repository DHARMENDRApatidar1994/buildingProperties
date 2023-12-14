import React, { useState } from 'react'
import '../forrent/Forrent.css'
import { sale } from './SaleData'
import { useNavigate } from 'react-router-dom'
import bathhub from '../../assets/Images/property/bathub.png'

const ForSalesec1 = () => {
    const navigate = useNavigate()

    const [isFilterOpen, setIsFilterOpen] = useState(false)


   


    return (
        <div className='pt-lg-0 pt-3'>
            <div className='rentsec1'>
                <div className='rentsec1-left'>
                    <div>

                        <h6>Home/<span>For Sale</span></h6>
                        <h2>Properties For Sale</h2>
                        <p>Search for the best houses for sale in your area.</p>

                    </div>
                </div>
                <img src="BuildingIllustration.png" alt="" />
            </div>
            <div className='frentinput'>
                <input type="text" placeholder='Enter City,Zip,Address' />
                <select className='selectopt'>
                    <option >Price</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                </select>
                <select className='selectopt'>
                    <option >Beds</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                </select>
                <select className='selectopt'>
                    <option >Baths</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                </select>
                <select className='selectopt'>
                    <option >Property type</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                    <option >For Bath</option>
                </select>
                <button onClick={()=>setIsFilterOpen(true)} className='fw-semibold'>Filters <i class="ri-equalizer-line"></i> </button>
                <button className='fw-semibold'>Search <i class="ri-search-line"></i> </button>
            </div>
            {/* filter page design */}
            {isFilterOpen &&
                <div className='d-flex justify-content-center' >
                    <div className='col-8  d-flex flex-wrap bg-light justify-content-center' style={{ position: "absolute", zIndex: "999",marginTop:"-27vmax",height:"80vh",overflowY:"scroll" }}>
                        <h3 className='col-lg-5 col-8 mt-5'>Filter your search result</h3>
                        <i onClick={()=>setIsFilterOpen(false)} class="ri-close-circle-line col-2 col-lg-5 text-end mt-5 fs-3 "></i>
                        <div className='col-lg-5 col-10 mt-5'>
                            <h6 className='fw-normal'>Bedrooms</h6>
                            <select className='border border-none border-warning rounded col-lg-8 col-12 p-2 '>
                                <option>Any</option>
                                <option>Any</option>
                                <option>Any</option>
                                <option>Any</option>
                            </select>
                        </div>
                        <div className='col-lg-5 col-10 mt-5'>
                            <h6 className='fw-normal'>Bathrooms</h6>
                            <select className='border border-none border-warning rounded col-lg-8 col-12 p-2'>
                                <option>Any</option>
                                <option>Any</option>
                                <option>Any</option>
                                <option>Any</option>
                            </select>
                        </div>
                        <h6 className='col-10 mt-5 fw-normal'>Price</h6>
                        <div className='col-lg-5 col-10 mt-1'>
                            <h6 className='fw-normal'>Min price</h6>
                            <select className='border border-none border-warning rounded col-lg-8 col-12 p-2'>
                                <option>No min</option>
                                <option>No min</option>
                                <option>No min</option>
                                <option>No min</option>
                            </select>
                        </div>
                        <div className='col-lg-5 col-10 mt-1'>
                            <h6 className='fw-normal'>Max price</h6>
                            <select className='border border-none border-warning rounded col-lg-8 col-12 p-2'>
                                <option>No max</option>
                                <option>No max</option>
                                <option>No max</option>
                                <option>No max</option>
                            </select>
                        </div>
                        <h6 className='col-10 mt-5 fw-normal'>Property type</h6>
                        <div className='col-10 mt-1'>
                            <select className='border border-none border-warning rounded col-lg-10 col-12 p-2'>
                                <option>Show all</option>
                                <option>Show all</option>
                                <option>Show all</option>
                                <option>Show all</option>
                            </select>
                        </div>
                        <h6 className='col-10 mt-5 fw-normal'>Furnished options</h6>
                        <div className='col-10 mt-1'>
                            <select className='border border-none border-warning rounded col-lg-10 col-12 p-2'>
                                <option>Any</option>
                                <option>Any</option>
                                <option>Any</option>
                                <option>Any</option>
                            </select>
                        </div>
                        <h6 className='col-10 mt-5 fw-normal'>Sort order</h6>
                        <div className='col-lg-5 col-10 mt-1'>
                            <input type="radio" id="sort1" name="time" />
                            <label className='ms-3' for="age1">Anytime</label>
                        </div>
                        <div className='col-lg-5 col-10 mt-1'>
                            <input type="radio" id="sort2" name="time" />
                            <label className='ms-3' for="age1">Last 24 hours</label>
                        </div>
                        <div className='col-lg-5 col-10 mt-1'>
                            <input type="radio" id="sort3" name="time" />
                            <label className='ms-3' for="age1">Last 3 days</label>
                        </div>
                        <div className='col-lg-5 col-10 mt-1'>
                            <input type="radio" id="sort4" name="time" />
                            <label className='ms-3' for="age1">Last 7 days</label>
                        </div>
                        <div className='col-lg-5 col-10 mt-1'>
                            <input type="radio" id="sort5" name="time" />
                            <label className='ms-3' for="age1">Last 14 days</label>
                        </div>
                        <div className='col-lg-5 col-10 mt-1'>
                            <input type="radio" id="sort6" name="time" />
                            <label className='ms-3' for="age1">Last 30 days</label>

                        </div>
                        <div className='col-lg-5 col-10 mt-5 mb-lg-5 mb-2'>
                            <button className='border border-none border-warning rounded p-1 col-8 bg-light'>Reset filters</button>
                        </div>
                        <div className='col-lg-5 col-10 mt-lg-5 mt-0  mb-5'>
                            <button className='border border-none rounded p-1 col-8 bg-warning'>Update results</button>
                        </div>

                    </div>
                </div>
            }

            {/* filter page end */}
            <div className='responsivefrentinput'>
                <input type="text" placeholder='Enter City,Zip,Address' />
                <button onClick={()=>setIsFilterOpen(true)} className='fw-semibold'> <i class="ri-equalizer-line"></i> </button>
                <button className='fw-semibold'><i class="ri-search-line"></i> </button>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='featuredtext'>Properties For Sale</h3>
                <select className='p-1 me-3'>
                    <option >Sort order: <span className='fw-bold'>Anytime</span></option>
                </select>
            </div>
            <div className='featuredcard'>
                {sale.map((value, index) => (


                    <div className='featuredcard1' key={index}>
                        <div className='featuredimg'>
                            < img onClick={()=>{navigate(`/salepropertyDetailPage/${index}`)}} src={value.image} alt="" />
                            <i class="ri-heart-line "></i>
                        </div>
                        <div>
                            <h4>£{value.price} pcm</h4>

                            <h5>{value.title}</h5>
                            <p>{value.address}</p>
                            <div className='featuredblack'>
                                <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
                                <p><img src={bathhub} alt="" />{value.bath}</p>
                                <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
                            </div>
                        </div>


                    </div>
                ))}





            </div>
            <div className='d-flex justify-content-end me-5 mb-4'>
                <i class="ri-arrow-left-s-line fs-3 me-3"></i>
                <i class="border rounded ri-arrow-right-s-line me-5 fs-3 px-2"></i>
            </div>
        </div>
    )
}

export default ForSalesec1