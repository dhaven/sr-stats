import { useAtom } from 'jotai'

export default function WinnerMessage({winner}) {
    return(
        <div>
            <p className="text-3xl font-semibold tracking-wide">
                <span className="bg-winnerdark text-white mx-2 text-2xl px-2 rounded">
                {winner}
                </span>
                won the game 🎉
            </p>
        </div>
    )
  } 