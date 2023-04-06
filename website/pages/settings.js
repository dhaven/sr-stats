import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout, { siteTitle } from '../components/layout'
import AddGameModal from '../components/dialogs/addGameModal.js'
import { useSession } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]"
import Image from 'next/image'
import { Formik, Form, Field } from "formik"
const { MongoClient, ObjectId } = require('mongodb');
import { getServerSession } from "next-auth/next"
import { useState } from 'react'
import { CheckCircleIcon, ExclamationTriangleIcon, UserCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const Settings = ({ provider }) => {
    const { data: session } = useSession()
    const router = useRouter()
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState("Delete account")
    const [deleteInProgress, setDeleteInProgress] = useState(false)
    const [isAddGameOpen, setIsAddGameOpen] = useState(false)
    // If no session exists, display access denied message
    if (!session) {
        return (
            <Layout>
                <Head>
                    <title>SR Stats - settings</title>
                </Head>
                <p className="p-4 bg-white rounded-lg border-2 border-scifi4">Nothing to see here...</p>
            </Layout>
        )
    }
    const reloadSession = () => {
        const event = new Event("visibilitychange");
        document.dispatchEvent(event);
    };
    const delete_account = () => {
        setIsError(false)
        setDeleteInProgress(true)
        setDeleteMessage("Deleting account ...")
        fetch('/api/delete_account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ delete: true }),
        })
            .then(response => response.json())
            .then(data => {
                setDeleteInProgress(false)
                setDeleteMessage("Delete account")
                if (data['status'] == 'success') {
                    localStorage.clear()
                    reloadSession()
                    router.push('/')
                } else {
                    setIsError(true)
                }
            })
            .catch((error) => {
                setIsError(true)
                setDeleteInProgress(false)
                setDeleteMessage("Delete account")
                console.error('Error:', error);
            });
    }
    return (
        <Layout>
            <Head>
                <title>SR Stats - Settings</title>
            </Head>
            <div className="flex flex-col gap-1 m-2 w-full md:w-2/3 items-center bg-white p-8 rounded-lg border-2 border-scifi5">
                {session.user.image ? (
                    <Image
                        alt="profile_picture"
                        src={session.user.image}
                        className="rounded-full mr-1 border-2 border-scifi3"
                        width={64}
                        height={64}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                ) : (
                    <UserCircleIcon
                        className="mr-1 h-16 w-16"
                        aria-hidden="true"
                    />
                )}
                <p className="text-lg font-medium text-scifi5">
                    {session.user.email}
                </p>
                <div className="mt-4 w-full md:w-1/2">
                    <Formik
                        initialValues={{ ign: session.user.ign }}
                        onSubmit={(values) => {
                            setIsSuccess(false)
                            setIsError(false)
                            fetch('/api/update_account', {
                                method: 'POST', // or 'PUT'
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(values.ign),
                            })
                                .then(data => {
                                    setIsSuccess(true)
                                    reloadSession()
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                    setIsError(true)
                                });
                        }}
                    >
                        {
                            props => (
                                <Form className="flex flex-col rounded-md border border-scifi5 px-4 pb-4">
                                    <p className="font-medium m-2">
                                        In Game Name (IGN)
                                    </p>
                                    <div className="flex flex-row mx-2 justify-between gap-2 w-full">
                                        <Field id="ign" name="ign" as="input" className="w-3/4 px-2 border border-scifi4 ring-scifi2 hover:ring text-sm rounded-lg resize-none" />
                                        <button type="submit" className="w-min font-medium bg-scifi3 text-white text-sm text-bold p-1 lg:px-4 lg:py-2 border items-center drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-lg">
                                            Update
                                        </button>
                                    </div>
                                    <div className={`${isSuccess ? "" : "hidden"} w-full inline-flex items-center mt-4 p-2 border-2 bg-green-100 border-green-700 drop-shadow-md rounded-lg`}>
                                        <div>
                                            <CheckCircleIcon className="w-8 text-green-700"></CheckCircleIcon>
                                        </div>
                                        <p className="ml-4 font-medium text-sm">
                                            IGN setting successfully updated
                                        </p>

                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2 rounded-md border bg-red-100 border-red-700 mt-4 px-4 pb-4">
                    <div className="flex flex-row items-center mt-2">
                        <div className="">
                            <ExclamationTriangleIcon className="w-8 text-red-700"></ExclamationTriangleIcon>
                        </div>
                        <p className="font-medium mx-2 text-red-700">
                            Delete account
                        </p>
                    </div>
                    <p className="text-sm text-red-700 mx-2">
                        This will also delete all the games you have uploaded.
                    </p>
                    <button type="submit" onClick={delete_account} className="inline-flex items-center justify-center w-full font-medium bg-red-700 text-white text-sm text-bold p-1 lg:px-4 lg:py-2 items-center drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-lg">
                        {
                            deleteInProgress &&
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            </svg>
                        }
                        {deleteMessage}
                    </button>
                </div>
                <div className={`${isError ? "" : "hidden"} flex items-center mt-4 p-2 border-2 bg-red-100 border-red-700 drop-shadow-md rounded-lg`}>
                    <div className="">
                        <ExclamationCircleIcon className="w-8 text-red-700"></ExclamationCircleIcon>
                    </div>
                    <p className="ml-4 font-medium text-sm">
                        An error occured while trying to delete your account. Please try again later.
                    </p>

                </div>
            </div>
            {!isAddGameOpen &&
                <div className="md:hidden">
                    <div className="z-20 fixed bottom-0 left-0 right-0">
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsAddGameOpen(true)} className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            }
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setIsAddGameOpen}></AddGameModal>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    if(!session){
        return {
            props: { },
        }
    }
    const DBclient = new MongoClient(process.env.MONGODB_URI,
        {
            auth: {
                username: process.env.MONGODB_USERNAME,
                password: process.env.MONGODB_PASSWORD
            },
            authSource: '$external',
            authMechanism: 'SCRAM'
        });
    const db = DBclient.db("starrealms")
    const cursor = db.collection('accounts')
        .find({ userId: ObjectId(session.user.id) })
        .project({ 'provider': 1 })
    if (await cursor.hasNext()) {
        let val = await cursor.next()
        let provider = val.provider || "email"
        return {
            props: { provider },
        }
    }else{
        return {
            props: { provider: "email" },
        }
    }
}

export default Settings