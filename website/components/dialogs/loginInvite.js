import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

function SRLoginInvite({ isOpen, setIsOpen, gameSummary }) {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const router = useRouter()
    function closeModal() {
        setIsOpen(false)
        router.push(`/game/${gameSummary['id']}`)
    }
    function oAuthLogin(provider) {
        setIsError(false)
        signIn(provider,
            {
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/game/${gameSummary['id']}`
            },
            { 
                prompt: 'login' 
            })
            .then(res => {
                if (res?.error) {
                    console.log(res.error)
                    setSuccessMessage("")
                    setIsError(true)
                } else {
                    //if the res is ok. Update dialog to let user know to check his emails
                    closeModal()
                }
            })
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
                            <div className="inline-block justify-center w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h2"
                                    className="text-xl text-center font-medium leading-6 text-gray-900 m-2"
                                >
                                    Game successfully uploaded!
                                    <div className="flex justify-center">
                                        <CheckCircleIcon className="w-14 font-bold text-green-700"></CheckCircleIcon>
                                    </div>
                                </Dialog.Title>
                                <Dialog.Description
                                    as="h3"
                                    className="text-md text-center font-medium leading-6 text-gray-900 mx-2 my-4"
                                >
                                    Login to your SR-stats account to access all your games
                                </Dialog.Description>
                                <div className="flex flex-row justify-end gap-2">
                                    <button
                                        onClick={closeModal}
                                        className="hover:bg-slate-200 text-scifi5 font-medium text-sm px-2 sm:px-4 py-2 border-0 focused-border-none rounded-md"
                                    >
                                        skip
                                    </button>
                                    <button
                                        onClick={(e) => { oAuthLogin('auth0') }}
                                        className="inline-flex justify-center text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg"
                                    >
                                        {
                                            isLoading &&
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-scifi4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            </svg>
                                        }
                                        Sign in
                                    </button>
                                </div>
                                <div className={`${isError ? "" : "hidden"} flex items-center mt-4 p-2 border-2 bg-red-100 border-red-700 drop-shadow-md rounded-lg`}>
                                    <div className="">
                                        <ExclamationCircleIcon className="w-8 text-red-700"></ExclamationCircleIcon>
                                    </div>
                                    <p className="ml-4 font-medium text-sm">
                                        There was some error while trying to sign you in. Please try again later or choose another method.
                                    </p>

                                </div>
                                <div className={`${successMessage == "" ? "hidden" : ""} w-full inline-flex items-center mt-4 p-2 border-2 bg-green-100 border-green-700 drop-shadow-md rounded-lg`}>
                                    <div>
                                        <CheckCircleIcon className="w-8 text-green-700"></CheckCircleIcon>
                                    </div>
                                    <p className="ml-4 font-medium text-sm">
                                        {successMessage}
                                    </p>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default SRLoginInvite
