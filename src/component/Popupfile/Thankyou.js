// import React from 'react'
// import "./Thankyou.css"

// const Thankyou = () => {
//     return (
//         <div>
//             <div className='thankmain'>
//                 <div className='thankdisplay'>
//                     <div className='w-100 d-flex justify-content-lg-between justify-content-evenly  align-items-center'>
//                         <h5 className='w-100 text-center ms-5'>Thank you!</h5>
//                         <i class="ri-close-line bg-warning-subtle fs-4  bg-light px-2 mb-3 rounded-circle" style={{ cursor: "pointer", marginTop:"-2.7vmax", }}></i>
//                     </div>
//                     <p>Thank you for your awesome feedback. your review has been submitted!</p>
//                     <button>Done</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Thankyou



import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import './Thankyou.css'



export default function Thankyou({ thankYouOpen, setThankYouOpen }) {
    

    const cancelButtonRef = useRef(null)

    return (
        <>
            <Transition.Root show={thankYouOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setThankYouOpen}>
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
                                <div className='thankmain'>
                 <div className='thankdisplay'>
                     <div className='w-100 d-flex justify-content-lg-between justify-content-evenly  align-items-center'>
                         <h5 className='w-100 text-center ms-5'>Thank you!</h5>
                         <i onClick={() => setThankYouOpen(false)}  class="ri-close-line bg-warning-subtle fs-4  bg-light px-2 mb-3 rounded-circle" style={{ cursor: "pointer", marginTop:"-2.7vmax", }}></i>
                     </div>
                     <p>Thank you for your awesome feedback. your review has been submitted!</p>
                     <button onClick={() => setThankYouOpen(false)}>Done</button>
                 </div>
             </div>      
            

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
           
        </>

    )
}