


import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import LOGO from '../../assets/Images/navimage/LOGO.png'
import './Signup.css'
// import Signin from './Signin'

export default function Signup({ signUpOpen,setSignUpOpen }) {

    //  const [open,setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    return (
      <>
        <Transition.Root show={signUpOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setSignUpOpen}>
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
                                <div className='sinmain2'>
                                <i onClick={() => setSignUpOpen(false)} className="signclose ri-close-circle-line"></i>
                                    <div className='signflex2'>
                                        <div className='signone2'>
                                            <img src={LOGO} alt="" />

                                        </div>
                                        <div className='signtwo2'>
                                            <h5 >Welcome to Linked Bricks. <br /> Sign up to enjoy much more</h5>
                                            <h6>Already resistered?  <span
                                            //  onClick={() => setOpen(true)}
                                             > Sign in</span></h6>
                                            <input className='ms-4' type="text" placeholder='Email' />
                                            <input className='mt-4' type="text" placeholder='Password' />
                                            <i class="ri-eye-off-fill"></i>
                                            <input className='mt-4' type="text" placeholder='Confirm Password' />
                                            <i class="ri-eye-off-fill"></i>
                                            <p>Password must be at least B characters with 1 uppercase letter and 1 special charecter</p>
                                            <button>Sign Up</button>
                                            <h3>By signing up. you accept our <span>Terms of Use</span> and <span>Privacy Policy</span></h3>

                                            <h4>or continue with</h4>
                                            <div className='signicon2'>
                                                <i class="ri-google-fill "></i>
                                                <i class="ri-facebook-fill ms-5"></i>
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
        {/* <Signin open={open} setOpen={setOpen}/> */}
        </>
    )
}
