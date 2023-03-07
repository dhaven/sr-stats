import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Formik, Form, Field } from "formik"

function AddIGN({ isOpen, setIsOpen, session }) {
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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg text-center font-medium leading-6 text-gray-900 m-2"
                                >
                                    Finalize account creation
                                </Dialog.Title>
                                <div className="flex flex-row justify-center">
                                    <div className="w-3/4 flex flex-col gap-2">
                                        <div className="text-center">
                                            What is your Star Realms IGN (in-game name) ?
                                        </div>
                                        <Formik
                                            initialValues={{ ign: '' }}
                                            onSubmit={(values) => {
                                                fetch('/api/update_account', {
                                                    method: 'POST', // or 'PUT'
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify(values.ign),
                                                })
                                                    .then(data => {
                                                        session.user.ign = values.ign
                                                        closeModal()
                                                    })
                                                    .catch((error) => {
                                                        console.error('Error:', error);
                                                    });
                                            }}
                                        >
                                            {
                                                props => (
                                                    <Form>

                                                        <Field name="ign" placeholder="Enter your IGN" as="input" className="w-full p-2 border drop-shadow-md border-scifi4 ring-scifi2 hover:ring text-sm rounded-lg resize-none" />
                                                        <div className="flex flex-row justify-end">
                                                            <button type="submit" className="inline-flex my-4 w-min font-medium bg-scifi3 text-white text-sm text-bold p-1 lg:px-4 lg:py-2 border items-center drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-lg">Confirm</button>
                                                        </div>
                                                    </Form>
                                                )
                                            }
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AddIGN
