import { useAtom } from 'jotai'
import { logDataAtom } from './form'

export default function WinnerMessage() {
    const [battle, setBattle] = useAtom(logDataAtom)
    if(Object.keys(battle).length == 0){
        return(
            <div>
            </div>
        )
    }else{
        return <div>
            <p className="font-sans text-2xl font-bold tracking-wide">{battle['winner']} won the game 🎉</p>
        </div>
    }
  } 