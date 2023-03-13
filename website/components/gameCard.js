import Link from 'next/link'
import Loading from './loading.js'

function GameCard({ game, user }) {
    //true if logged in user is a player of the game
    let isPlayer = (game) => {
        return game['winner'] == user || game['loser'] == user || game['winner'] == "Player" || game['loser'] == "Player"
    }
    //true if logged in user is the winner
    let isWinner = (game) => {
        return (user == game['winner']) || ("Player" == game['winner'])
    }
    return (
        <Link href={`/game/${encodeURIComponent(game['id'])}`} className={`${isWinner(game) ? "border-2 border-green-600 ring-green-600" : isPlayer(game) ? "border-2 border-red-600 ring-red-600" : "ring-scifi1"} bg-scifi1 flex flex-col  w-full md:w-64 justify-center p-2 m-2 rounded-md drop-shadow-md hover:cursor-pointer hover:ring`}>
            <div className="static flex flex-row md:flex-col justify-between md:justify-center items-center m-2">
                {
                    isPlayer(game) ?
                        (
                            <div>
                                <div className="-m-4 absolute flex justify-center inset-x-0 top-0">
                                    <p className={`${isWinner(game) ? "bg-green-500 border-green-600" : "bg-red-500 border-red-600"} text-lg font-medium px-2 py-1 rounded-md border-2`}>
                                        {isWinner(game) ? "🏆 Victory 🏆" : "Defeat"}
                                    </p>
                                </div>
                                <div className="flex flex-row flex-wrap md:flex-col items-center gap-2 md:gap-0">
                                    <p className="text-2xl text-center md:mt-2 font-bold">VS</p>
                                    <p className="text-xl md:text-lg font-medium">
                                        {isWinner(game) ? game['loser'] : game['winner']}
                                    </p>

                                </div>
                            </div>
                        ) :
                        (
                            <div className="flex flex-row flex-wrap md:flex-col items-center gap-2 md:gap-0">
                                <div className="text-xl md:text-lg font-medium">
                                    {game['winner']}
                                </div>

                                <p className="text-2xl font-bold">VS</p>
                                <div className="text-xl md:text-lg font-medium">
                                    {game['loser']}
                                </div>
                            </div>
                        )
                }
                <div className="mt-2 text-2xl md:text-4xl flex justify-center">
                    {
                        game["winCondition"] == "defeat" ? "⚔️" :
                            game["winCondition"] == "completed missions" ? "✔️✔️✔️" :
                                game["winCondition"] == "timeout" ? "⏱️" :
                                    "🏃‍♂️"
                    }
                </div>
            </div>
        </Link>
    )
}

export default GameCard