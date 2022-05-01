import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router'

export default function AddGameModal({isOpen, setIsOpen}) {
    function closeModal() {
        setIsOpen(false)
    }
    const router = useRouter()
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
                <div className="w-full p-1 m-1">
                    <Formik
                        initialValues={{ battlelog: ''}}
                        onSubmit={(values) => {
                            closeModal()
                            fetch('/api/parse_log', {
                                method: 'POST', // or 'PUT'
                                headers: {
                                'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(values.battlelog),
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data)
                                router.push(`/game/${data['id']}`)
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                        }}
                    >
                        {props => (
                            <Form className="flex flex-col items-end gap-1">
                                <div className="flex flex-row gap-1 justify-start w-full">
                                    <button type="button" className="w-min bg-white rounded-lg border border-gray-300 hover:bg-gray-100 text-sm px-4 py-2 text-center inline-flex items-center mr-2" onClick={(e) => {navigator.clipboard.readText().then(cliptext => props.setFieldValue("battlelog",cliptext))}}>
                                        <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                                        Paste
                                    </button>
                                    <button className="w-min bg-white rounded-lg border border-gray-300 hover:bg-gray-100 text-sm px-4 py-2 text-center inline-flex items-center mr-2" type="button" onClick={(e) => {props.setFieldValue("battlelog","")}}>
                                    <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                        clear
                                    </button>
                                </div>
                                <div className="flex flex-row  h-24 md:h-48 lg:h-48 gap-1 w-full">
                                    <Field className="w-full grow h-full p-2 text-sm bg-gray-50 rounded-lg border border-gray-300 resize-none" name="battlelog" as="textarea"/>
                                </div>
                                <button
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    type="submit"
                                >
                                    Add Game
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}