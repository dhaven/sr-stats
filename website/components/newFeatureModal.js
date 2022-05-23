import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { appVersion } from './layout.js'

export default function NewFeatureModal({isOpen, setIsOpen}) {
    function closeModal() {
        setIsOpen(false)
      }
    function shouldDisplay(){
        let lastVersion = localStorage.getItem('appVersion');
        if(lastVersion == appVersion){
            return false
        }else{
            localStorage.setItem('appVersion',appVersion)
            return true
        }
    }
  return (
    <>
        {
            shouldDisplay() && (
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
                                    className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                    Version {appVersion} was just released 🚀
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        - Added support for Heroes, Missions and Gambits!
                                    </p>
                                </div>
                                <div className="mt-2">
                                <p className="text-sm font-medium text-gray-900">
                                        version 0.4.0
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        - Share your games with friends using the unique game URL!
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       - Added game overview component
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       - Bug fixing
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm font-medium text-gray-900">
                                        version 0.3.1
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        - More extension support! (multi-faction & ships and bases)
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       - Display ships vs bases count
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       - Bug fixing
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm font-medium text-gray-900">
                                        version 0.2.0
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        - Added support for Frontiers and Colony Wars extensions
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       - Let user select between multiple graphs
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       - Improve Deck summary view
                                    </p>
                                </div>
                                <div className="flex mt-4 flex-col items-end">
                                    <button
                                        type="button"
                                        className="inline-flex font-medium bg-scifi3 text-white text-sm text-bold px-4 py-2 border drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-lg"
                                        onClick={closeModal}
                                    >
                                        close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
            )
        }
    </>
  )
}