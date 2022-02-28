import { Formik, Form, Field, ErrorMessage } from 'formik';
import { atom, useAtom } from 'jotai'
import { Battle } from '../lib/classes'

export const logDataAtom = atom({})

export default function Basic(){
  const [logData, setLogData] = useAtom(logDataAtom)
    return (
        <div>
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
                setLogData(Battle.deserialize(data))
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="battlelog" as="textarea"/>
                <ErrorMessage name="battlelog" component="div" />
                <button type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )
}