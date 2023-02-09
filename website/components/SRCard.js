import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'

function SRCard({type, filename, isOpen, setIsOpen}) {
    function closeModal() {
        setIsOpen(false)
      }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                        >
                        &#8203;
                        </span>
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block relative p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="z-10 absolute top-0 right-0 m-2">
                                    <button
                                        type="button"
                                        className="font-medium bg-scifi3/80 text-white text-sm text-bold px-2 py-2 border drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-full"
                                        onClick={(e) => {e.stopPropagation();setIsOpen(false)}}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="border-4 border-black">
                                    <Image
                                        src= {filename}
                                        height={type == "ship" ? 481 : 336}
                                        width={type == "ship" ? 336: 481}
                                        quality={100}
                                />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
        </>
    )
}

export default SRCard