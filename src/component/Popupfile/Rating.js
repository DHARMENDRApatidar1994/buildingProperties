// import React from 'react'
// import "./Rating.css"

// const Rating = () => {
//     return (
//         <div>
//             <div className='thankmain2'>
//                 <div className='thankdisplay2'>
//                     <div className='mt-sm-4  mt-lg-0 w-100 d-flex justify-content-lg-between justify-content-evenly  align-items-center'>
//                         <h5 className='w-100 text-center ms-5'>Ratings and Reviews</h5>
//                         <i class="ri-close-line bg-warning-subtle fs-4  bg-light px-2 mb-3 rounded-circle" style={{ cursor: "pointer", marginTop:"-2.7vmax", }}></i>
//                     </div>
//                     <p>We'll like to know how Linked Bricks works for you</p>
//                     <div className=' w-75 d-flex justify-content-evenly fs-5'style={{marginTop:"-2vmax",color:"rgb(206, 206, 206)"}}>
//                     <i class="ri-star-fill"></i>
//                     <i class="ri-star-fill"></i>
//                     <i class="ri-star-fill"></i>
//                     <i class="ri-star-fill"></i>
//                     <i class="ri-star-fill"></i>
//                     </div>
//                      <div className='d-flex flex-column' style={{width:"90%"}}>
//                         <label className='lable fw-semibold' >Add a title or headline</label>
//                         <input className='px-3' type="text" placeholder='Review title (e.g Great Service)' />
//                         <label className='lable mt-3 fw-semibold'>Add a description</label>
//                        <textarea className='px-3 py-2' style={{color:"gray"}} name="" id="" cols="50" rows="7">please describe your experience</textarea>
//                      </div>
//                     <button>Submit Review</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Rating



// import React from 'react'
// import "./Signin.css"

// const Signin = () => {
//   return (
//     <div>
//         <div className='sinmain'>
//         <i class="signclose ri-close-circle-line"></i>
//             <div className='signflex'>
//                 <div className='signone'>
//                     <img src="LOGO.png" alt="" />

//                 </div>
//                 <div className='signtwo'>
//                     <h5 >Welcome to Linked Bricks. <br/> Sign in to enjoy much more</h5>
//                     <h6>No account?  <span> Sign up</span></h6>
//                     <input type="text" placeholder='Email' />
//                     <input className='mt-4' type="text" placeholder='Password' />
//                     <i class="ri-eye-off-fill"></i>
//                     <p>Forgot Password?</p>
//                     <button>Continue</button>
//                     <h4>or sign in with</h4>
//                     <div className='signicon'>
//                     <i class="ri-google-fill "></i>
//                     <i class="ri-facebook-fill ms-5"></i>
//                     </div>




//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Signin






import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import './Rating.css'
import Thankyou from './Thankyou'


export default function Rating({ openRating, setOpenRating }) {
    const [thankYouOpen, setThankYouOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <>
            <Transition.Root show={openRating} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenRating}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="w-[1164px] h-[664px] relative transform overflow-hidden rounded-lg bg-white ">
                                           <div className='thankmain2'>
                <div className='thankdisplay2'>
                    <div className='mt-sm-4  mt-lg-0 w-100 d-flex justify-content-lg-between justify-content-evenly  align-items-center'>
                        <h5 className='w-100 text-center ms-5'>Ratings and Reviews</h5>
                        <i class="ri-close-line bg-warning-subtle fs-4  bg-light px-2 mb-3 rounded-circle" style={{ cursor: "pointer", marginTop:"-2.7vmax", }}></i>
                    </div>
                    <p>We'll like to know how Linked Bricks works for you</p>
                    <div className=' w-75 d-flex justify-content-evenly fs-5'style={{marginTop:"-2vmax",color:"rgb(206, 206, 206)"}}>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    </div>
                     <div className='d-flex flex-column' style={{width:"90%"}}>
                        <label className='lable fw-semibold' >Add a title or headline</label>
                        <input className='px-3' type="text" placeholder='Review title (e.g Great Service)' />
                        <label className='lable mt-3 fw-semibold'>Add a description</label>
                       <textarea className='px-3 py-2' style={{color:"gray"}} name="" id="" cols="50" rows="7">please describe your experience</textarea>
                     </div>
                    <button onClick={() => setThankYouOpen(true)} >Submit Review</button>
                </div>
            </div>  

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Thankyou thankYouOpen={thankYouOpen} setThankYouOpen={setThankYouOpen} />
        </>

    )
}
