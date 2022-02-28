import { useAtom } from 'jotai'
import { getDecks } from '../lib/classes'
import { logDataAtom } from './form'

export default function FinalDecks() {
    const [battle, setBattle] = useAtom(logDataAtom)
    let decksData = {}
    if(Object.keys(battle).length != 0){
        decksData = getDecks(battle)
        console.log(battle.players)
    }
    return (
        <string>{JSON.stringify(decksData)}</string>
    )
  }