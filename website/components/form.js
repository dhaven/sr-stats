import { Formik, Form, Field } from 'formik';
import { atom, useAtom } from 'jotai'
import { example1, example2 } from '../lib/example_data.js'

export const logDataAtom = atom({})
const errorMessageAtom = atom("")
const rawDataAtom = atom("")

export default function InputLog(){
  const [logData, setLogData] = useAtom(logDataAtom)
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom)
    return (
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-1/2 max-w-lg">
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
                <div className="flex flex-row gap-1 w-full">
                  <button className="bg-white text-sm px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="button" onClick={(e) => {props.setFieldValue("battlelog",example1)}}>
                    example 1
                  </button>
                  <button className="bg-white text-sm px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="button" onClick={(e) => {props.setFieldValue("battlelog",example2)}}>
                    example 2
                  </button>
                </div>
                <Field className="w-full h-24 p-2 text-sm md:h-48 lg:h-48 bg-gray-50 rounded-lg border border-gray-300 resize-none" name="battlelog" as="textarea"/>
                <button className="w-min bg-white text-sm px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="submit">
                  Submit
                </button>
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