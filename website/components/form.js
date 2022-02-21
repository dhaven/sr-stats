import { Formik, Form, Field, ErrorMessage } from 'formik';
import { atom, useAtom } from 'jotai'
import { parseBattle, getDecks, getAuthority, getTrade } from '../lib/test'

export const authorityAtom = atom({})
export const tradeAtom = atom({})
export const deckAtom = atom({})

export default function Basic(){
    const [valueAuthority, setAuthority] = useAtom(authorityAtom)
    const [valueTrade, setTrade] = useAtom(tradeAtom)
    const [valueDeck, setDeck] = useAtom(deckAtom)
    return (
        <div>
          <Formik
            initialValues={{ battlelog: ''}}
            onSubmit={(values) => {
                let battle = parseBattle(values.battlelog)
                setDeck(getDecks(battle))
                setAuthority(getAuthority(battle))
                setTrade(getTrade(battle))
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