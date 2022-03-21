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
        return(
            <div>
            <p className="text-3xl font-semibold tracking-wide">
                <span className="bg-winnerdark text-white mx-2 text-2xl px-2 rounded">
                {battle['winner']}
                </span>
                won the game 🎉
            </p>
        </div>
        )
    }
  } 