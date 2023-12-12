import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function DeleteModal({ deleteOpen, setDeleteOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={deleteOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setDeleteOpen}
      >
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
              <Dialog.Panel className="relative w-[500px] h-[262px] transform overflow-hidden rounded-[20px] bg-white text-left transition-all ">
                <div className="bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="w-[452px] h-[124px] my-[20px]  "
                      >
                        Delete Conversation
                        <div className="mt-2">
                          <p className="text-sm">
                            Are you sure you want to delete this conversation?
                            This will permanently delete all the files you’ve
                            sent as well.
                          </p>
                        </div>
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="mx-[24px] pb-[5px] w-[452px] ">
                  <button
                    type="button"
                    className="mx-[8px] px-[16px] py-[12px] w-[218px] h-[50px] border-[1.5px] border-[#E53935] rounded-[12px] font-medium bg-white  text-[18px] text-gray-900  ring-gray-300  "
                    onClick={() => setDeleteOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-[16px] py-[12px] w-[218px] h-[50px] rounded-[12px] border-[1.5px] border-[#E53935] bg-[#E53935]  hover:bg-red-500  font-medium text-[18px]"
                    onClick={() => setDeleteOpen(false)}
                  >
                    Delete
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
