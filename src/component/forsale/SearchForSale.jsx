import React from 'react'
import { sale } from './SaleData'
import './SearchForSale.css'
import location from '../../assets/Images/property/.png'

const SearchForSale = () => {
    return (
        <div style={{paddingTop:"7vmax"}}>

            <div className='searchsec1'>
                <h6>Home/Search/<span>For Rent</span></h6>
            </div>
            <div className='searchsec2'>
                <img src={location} alt="" />
            </div>

            <div className='searchinput '>
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
                <button className='fw-semibold'>Filters <i class="ri-equalizer-line"></i> </button>
                <button className='fw-semibold'>Search <i class="ri-search-line"></i> </button>
            </div>
            <div className='responsivefrentinput'>
                <input type="text" placeholder='Enter City,Zip,Address' />
                <button className='fw-semibold'> <i class="ri-equalizer-line"></i> </button>
                <button className='fw-semibold'><i class="ri-search-line"></i> </button>
            </div>
            <h2 className='oxford'>Properties for sale in Oxford Circus Station, London</h2>
            <div className='result'>
                <h4>13 results</h4>
                <button>sort order : <span>Anytime <i class="ri-arrow-down-s-line"></i></span></button>
            </div>
            <h4 className='searchfeatured'>Featured Properties</h4>
            <div className='featuredcardsale' style={{ backgroundColor: "#ebfffd" }}>

                {sale.slice(0,8).map((value, index) => (


                    <div className='featuredcard1sale' key={index}>
                        <div className='featuredimgsale'>
                            <img src={value.image} alt="" />
                            <i class="ri-heart-line "></i>
                        </div>
                        <div>
                            <h4><i class="ri-money-pound-circle-fill"></i>{value.price} pcm</h4>

                            <h5>{value.title}</h5>
                            <p>{value.address}</p>
                            <div className='featuredblacksale'>
                                <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
                                <p><img src="bathub.png" alt="" />{value.bath}</p>
                                <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
                            </div>
                        </div>


                    </div>
                ))}





            </div>

            {sale.slice(0, 4).map((value, index) => (


                <div className='searchedsec2' key={index}>

                    <img className='picture' src={value.image} alt="" />
                    <div className='searchedsec2-right'>
                        <h4 className='fs-3'><i class="ri-money-pound-circle-fill "></i>{value.price} </h4>

                        <h4 className='fs-4' style={{ color: "#01b8c6" }}>{value.title}</h4>
                        <p>{value.address}</p>
                        <p>{value.para}</p>
                        <p><i class="ri-calendar-2-line me-2"></i>Listed 2 days ago</p>


                        <div className='featuredblack'>
                            <p><i class="ri-hotel-bed-fill me-2"></i>{value.bed}</p>
                            <p><img src="bathub.png" alt="" />{value.bath}</p>
                            <p><i class="ri-sofa-fill me-2"></i>{value.furniture}</p>
                        </div>
                    </div>
                </div>

            ))}




        </div>

    )
}

export default SearchForSale