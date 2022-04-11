import { Formik, Form, Field } from 'formik';
import { atom, useAtom } from 'jotai'
import { example1, example2 } from '../lib/example_data.js'

export const logDataAtom = atom({})
const errorMessageAtom = atom("")

export default function InputLog(){
  const [logData, setLogData] = useAtom(logDataAtom)
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom)
    return (
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-4/5 lg:w-3/4 max-w-lg">
          <Formik
            initialValues={{ battlelog: ''}}
            onSubmit={(values) => {
              setErrorMessage("")
              setLogData({})
              fetch('/api/parse_log', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values.battlelog),
              })
              .then(response => response.json())
              .then(data => {
                if(data.status == "success"){
                  setLogData(data.data)
                }else{
                  setErrorMessage("Unable to parse data")
                }
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }}
          >
            {props => (
              <Form className="flex flex-col items-end gap-1">
                <div className="flex flex-row justify-end gap-1 w-full">
                  <button type="button" className="bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center" onClick={(e) => {props.setFieldValue("battlelog","")}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
                <div className="flex flex-row gap-1 h-24 md:h-48 lg:h-48 w-full">
                  <div className="flex grow-0 w-32 flex-col gap-1">
                    <button className="bg-white  min-w-48 text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="button" onClick={(e) => {props.setFieldValue("battlelog",example1)}}>
                      example 1
                    </button>
                    <button className="bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="button" onClick={(e) => {props.setFieldValue("battlelog",example2)}}>
                      example 2
                    </button>
                  </div>
                  <Field className="w-full grow h-full p-2 text-sm bg-gray-50 rounded-lg border border-gray-300 resize-none" name="battlelog" as="textarea"/>
                </div>
                <div className="flex flex-row gap-1 justify-end w-full">
                  <button type="button" className="w-min bg-white rounded-lg border border-gray-300 hover:bg-gray-100 text-sm px-4 py-2 text-center inline-flex items-center mr-2" onClick={(e) => {navigator.clipboard.readText().then(cliptext => props.setFieldValue("battlelog",cliptext))}}>
                    <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                    Paste
                  </button>
                  <button className="w-min bg-white text-sm px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="submit">
                    Submit
                  </button>
                </div>
                {
                  errorMessage != "" && (
                    <div className="p-2 text-sm w-full text-red-700 bg-red-100 rounded-lg" role="alert">
                      <span className="font-medium">Error : </span>Unable to parse input data
                    </div>
                  )
                }
              </Form>
            )}
          </Formik>
        </div>
      )
}