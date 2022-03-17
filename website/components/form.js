import { Formik, Form, Field, ErrorMessage } from 'formik';
import { atom, useAtom } from 'jotai'
import styles from './form.module.css'

export const logDataAtom = atom({})

export default function InputLog(){
  const [logData, setLogData] = useAtom(logDataAtom)
    return (
        <div class="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-1/2 max-w-lg">
          <Formik
            initialValues={{ battlelog: ''}}
            onSubmit={(values) => {
              fetch('/api/parse_log', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values.battlelog),
              })
              .then(response => response.json())
              .then(data => {
                setLogData(data)
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }}
          >
            <Form class="flex flex-col items-end gap-1">
              <Field class="w-full h-24 p-2 text-sm lg:h-48 bg-gray-50 rounded-lg border border-gray-300 resize-none" name="battlelog" as="textarea"/>
              <ErrorMessage name="battlelog" component="div" />
              <button class="w-min bg-white text-sm px-5 py-2.5 border border-gray-300 hover:bg-gray-100 rounded-lg" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      )
}