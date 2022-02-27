import { Formik, Form, Field, ErrorMessage } from 'formik';
import { atom, useAtom } from 'jotai'
import { Battle, getDecks } from '../lib/classes'

const logDataAtom = atom({})

export default function Basic(){
  const [logData, setLogData] = useAtom(logDataAtom)
  console.log(logData)
  let decks = {}
  if('players' in logData){
    decks = getDecks(Battle.deserialize(logData))
    console.log(decks)
  }
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
                console.log(data)
                setLogData(data)
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
          <strong>{JSON.stringify(decks)}</strong>
        </div>
      )
}