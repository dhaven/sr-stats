import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

function SRLoginInvite({ isOpen, setIsOpen, gameSummary }) {
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const router = useRouter()
    function closeModal() {
        setIsOpen(false)
        router.push(`/game/${gameSummary['id']}`)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function emailLogin(email) {
        setIsError(false)
        setIsLoading(true)
        signIn("email", 
            {
                redirect: false, 
                email: email, 
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/game/${gameSummary['id']}`
            })
            .then(res => {
                setIsLoading(false)
                if (res?.error) {
                    console.log(res.error)
                    setSuccessMessage("")
                    setIsError(true)
                } else if (res.ok) {
                    setEmail("")
                    //if the res is ok. Update dialog to let user know to check his emails
                    setSuccessMessage("An email was sent with a login link. Check your emails to finalize login.")
                }
            })
    }
    function oAuthLogin(provider) {
        setIsError(false)
        signIn(provider, 
            { 
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/game/${gameSummary['id']}`
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
                                <div className="flex flex-row justify-center">
                                    <div className="w-3/4 flex flex-col items-center gap-2">
                                        {/*
                                        <button
                                            onClick={() => oAuthLogin("google")}
                                            className="w-full inline-flex justify-center items-center text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg"
                                        >
                                            <svg className="w-4 h-4 mx-1" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 7.84363V11.307H13.8438C13.6365 12.428 12.9994 13.373 12.0489 14.0064V16.2534H14.9562C16.6601 14.6951 17.641 12.4029 17.641 9.67839C17.641 9.04502 17.5854 8.43176 17.4792 7.84865H9V7.84363Z" fill="#3E82F1"></path>
                                                <path d="M9.00001 14.861C6.65394 14.861 4.67192 13.2876 3.96406 11.1714H0.955627V13.4937C2.43709 16.4142 5.48091 18.4198 9.00001 18.4198C11.432 18.4198 13.4697 17.6206 14.9562 16.2533L12.0489 14.0064C11.245 14.5443 10.2135 14.861 9.00001 14.861Z" fill="#32A753"></path>
                                                <path d="M3.96404 5.45605H0.955617C0.348876 6.66246 0 8.02972 0 9.47238C0 10.915 0.348876 12.2823 0.955617 13.4887L3.96404 11.1714C3.78202 10.6335 3.6809 10.0605 3.6809 9.47238C3.6809 8.88426 3.78202 8.31122 3.96404 7.77336V5.45605Z" fill="#F9BB00"></path>
                                                <path d="M0.955627 5.45597L3.96406 7.77327C4.67192 5.65703 6.65394 4.08368 9.00001 4.08368C10.3197 4.08368 11.5079 4.53608 12.4382 5.42078L15.0219 2.85214C13.4646 1.40948 11.427 0.52478 9.00001 0.52478C5.48091 0.52478 2.43709 2.53043 0.955627 5.45597Z" fill="#E74133"></path>
                                            </svg>
                                            Continue with Google
                                        </button>
                                        */}
                                        {/*
                                        <button
                                            onClick={() => oAuthLogin("facebook")}
                                            className="w-full inline-flex justify-center items-center text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg"
                                        >
                                            <svg className="w-4 h-4 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="#4267b2" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                            </svg>
                                            Continue with Facebook
                                        </button>
                                        <div className="w-full flex justify-center items-center text-center h-2 w-full border-b my-4">
                                            <span className="z-10 h-4 bg-white px-2 text-sm">
                                                OR
                                            </span>
                                        </div>
                                        */}
                                        <input placeholder="Enter your email" className="w-full p-2 border drop-shadow-md border-scifi4 ring-scifi2 hover:ring text-sm rounded-lg resize-none" type="email" value={email} onChange={handleEmailChange} />
                                        <button
                                            onClick={() => emailLogin(email)}
                                            className="inline-flex justify-center w-full text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg"
                                        >
                                            {
                                                isLoading &&
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-scifi4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                </svg>
                                            }
                                            Sign in with Email
                                        </button>
                                    </div>
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
