import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router'
import { atom, useAtom } from 'jotai'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
import SRLoginInvite from './loginInvite.js'

const errorMessageAtom = atom("")

export default function AddGameModal({ isOpen, setIsOpen }) {
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom)
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadCompleted, setIsUploadCompleted] = useState(false);
  const [openLoginInvite, setOpenLoginInvite] = useState(false)
  const [gameSummary, setGameSummary] = useState("")
  const router = useRouter()
  const { data: session, status } = useSession()
  function closeModal() {
    setIsOpen(false)
  }
  useEffect(() => {
    if(isUploadCompleted && (status == "unauthenticated")){
      setIsUploadCompleted(false) //switch back to false to make sure we don't store the game too many times
      //store the game in cache
      let games = localStorage.getItem('games')
      if(games != null){
        games = JSON.parse(games)
        games.push(gameSummary)
        localStorage.setItem('games', JSON.stringify(games));
      }else{
        games = []
        games.push(gameSummary)
        localStorage.setItem('games', JSON.stringify(games));
      }
      //ask user to login so that we can link a user to the game
      setOpenLoginInvite(true)
    }else if(isUploadCompleted && (status == "authenticated")){
      //if user is already logged in then just redirect 
      router.push(`/game/${gameSummary['id']}`)
    }

  }, [isUploadCompleted])
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="md:px-4 text-center">
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
              className="inline-block align-middle"
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
              <div className="inline-block w-full md:max-w-lg p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl md:rounded-2xl">
                <div className="w-full p-1 m-1">
                  <Formik
                    initialValues={{ battlelog: '' }}
                    onSubmit={(values) => {
                      setErrorMessage("")
                      if (values.battlelog == "") {
                        setErrorMessage("Cannot submit empty battle data")
                      } else {
                        setIsLoading(true)
                        fetch('/api/parse_log', {
                          method: 'POST', // or 'PUT'
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(values.battlelog),
                        })
                          .then(response => response.json())
                          .then(data => {
                            if (data['status'] == 'success') {
                              setGameSummary(data['summary'])
                              setIsLoading(false)
                              setIsUploadCompleted(true)
                              closeModal()
                              //router.push(`/game/${data['id']}`)
                            } else {
                              console.error('Error:', data['status']);
                              setErrorMessage(data['status'])
                              setIsLoading(false)
                            }
                          })
                          .catch((error) => {
                            console.error('Error:', error);
                            setErrorMessage("An unexpected error occured: " + error)
                            setIsLoading(false)
                          });
                      }
                    }}
                  >
                    {props => (
                      <Form className="flex flex-col h-full items-end gap-1">
                        <div className="flex flex-row justify-start gap-1 w-full lg-w-1/2">
                          <button type="button" className="bg-white border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center" onClick={(e) => { props.setFieldValue("battlelog", "") }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                          </button>
                        </div>
                        <div className="z-10 absolute top-0 right-0 m-2">
                          <button
                            type="button"
                            className="font-medium text-sm text-bold px-2 py-2 border drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-full"
                            onClick={closeModal}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex flex-row h-96 gap-1 w-full lg-w-1/2">
                          <Field className="w-full lg-w-1/2 h-full p-2 text-sm bg-gray-50 rounded-lg border border-gray-300 resize-none" name="battlelog" as="textarea" />
                        </div>
                        <div className="flex flex-row gap-1">
                          <button type="button" className="w-min bg-white  rounded-lg border border-gray-300 hover:bg-gray-100 text-sm px-4 py-2 text-center inline-flex items-center mr-2" onClick={(e) => { navigator.clipboard.readText().then(cliptext => props.setFieldValue("battlelog", cliptext)) }}>
                            <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                            Paste
                          </button>
                          <button
                            className="inline-flex w-min font-medium bg-scifi3 text-white text-sm text-bold p-1 lg:px-4 lg:py-2 border items-center drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-lg"
                            type="submit"
                          >
                            {
                              isLoading &&
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              </svg>
                            }
                            Submit
                          </button>
                        </div>
                        {
                          errorMessage != "" && (
                            <div className="p-2 text-sm w-full text-red-700 bg-red-100 rounded-lg" role="alert">
                              <span className="font-medium">Error : Unable to parse input data. Sorry about that :(</span>
                            </div>
                          )
                        }
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <SRLoginInvite isOpen={openLoginInvite} setIsOpen={setOpenLoginInvite} gameSummary={gameSummary}></SRLoginInvite>
    </>
  )
}