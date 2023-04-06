import FinalAuthority from './finalAuthority.js'
import Link from 'next/link'

function RecentGameItem({ gameInfo }) {
    return (
        <Link href={`/game/${encodeURIComponent(gameInfo['_id'])}`}>
            <div className="md:mx-2 hover:bg-slate-200 cursor-pointer">
                <div className="flex flex-row md:gap-8 items-center justify-center">
                    <div className="flex flex-col items-center">
                        <p className="text-center md:text-lg">
                            {gameInfo['winner']['name']}
                        </p>
                        <FinalAuthority authority={gameInfo['winner']['authority']}></FinalAuthority>
                    </div>
                    <p className="font-medium text-xl">VS</p>
                    <div className="flex flex-col items-center">
                        <p className="text-center md:text-lg">
                            {gameInfo['loser']['name']}
                        </p>
                        <FinalAuthority authority={gameInfo['loser']['authority']}></FinalAuthority>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecentGameItem