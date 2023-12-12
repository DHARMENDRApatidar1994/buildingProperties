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
import LOGO from '../../assets/Images/navimage/LOGO.png'

import Signup from './Signup'
import './Signin.css'
import { Link } from 'react-router-dom'

export default function Signin({ open, setOpen,onSignInClick}) {
    const [signUpOpen, setSignUpOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

                    <div className="fixed inset-0 z-10 ">
                        <div className="">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="  ">
                                    <div className='sinmain'>
                                        <i onClick={() => setOpen(false)} className="signclose ri-close-circle-line"></i>
                                        <div className='signflex'>
                                            <div className='signone'>
                                                <img src={LOGO} alt="" />

                                            </div>
                                            <div className='signtwo'>
                                                <h5 >Welcome to Linked Bricks. <br /> Sign in to enjoy much more</h5>
                                                <h6>No account?  <span onClick={() => setSignUpOpen(true)}> Sign up</span></h6>
                                                <input className='' type="text" placeholder='Email' />
                                                <input className='mt-2' type="text" placeholder='Password' />
                                                <i class="ri-eye-off-fill"></i>
                                                <p>Forgot Password?</p>
                                                <Link className='text-dark' onClick={onSignInClick} to='/dashboard'><button >Continue</button></Link>
                                                <h4>or sign in with</h4>
                                                <div className='signicon'>
                                                    <i class="ri-google-fill "></i>
                                                    <i class="ri-facebook-fill ms-2"></i>
                                                </div>




                                            </div>

                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Signup signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen} />
        </>

    )
}
