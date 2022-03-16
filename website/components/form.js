import { Formik, Form, Field, ErrorMessage } from 'formik';
import { atom, useAtom } from 'jotai'
import styles from './form.module.css'

export const logDataAtom = atom({})

export default function InputLog(){
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
                setLogData(data)
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }}
          >
            <Form className={styles.container}>
              <Field className={styles.textarea} name="battlelog" as="textarea"/>
              <ErrorMessage name="battlelog" component="div" />
              <button type="submit" className={styles.item}>
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      )
}