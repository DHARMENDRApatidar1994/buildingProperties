  import { Dialog, Transition } from "@headlessui/react";
  import { Fragment } from "react";
  import { useNavigate } from "react-router-dom";

  export default function WarningModal({ isOpen, setIsOpen }) {
    function closeModal() {
      setIsOpen(false);
    }

    const navigate = useNavigate();

    return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 text-gray-900"
                    >
                      Exit Property Listing
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to exit without completely updating
                        your listing details? Your information will be lost and
                        you won’t be able to continue if you leave.
                      </p>
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-black border-[1.5px] border-[#E53935]"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#E53935] px-4 py-2 text-sm font-semibold"
                        onClick={()=>navigate("/")}
                      >
                        Continue
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }
