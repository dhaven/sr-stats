import { useState } from "react";
import SRChart from './SRChart';

function GameStats({ winner, chartData, turnDecks, events }) {
    const [chartType, setChartType] = useState("authorityData");
    return (
        <div className="flex flex-col gap-4 md:mx-4">
            <div className="flex flex-col w-full bg-scifi4 md:rounded-md border-2 border-scifi4 drop-shadow-scifi5 p-2 sm:p-4">
                <div className="flex flex-row flex-wrap sm:p-2 sm:p-4 gap-2 sm:gap-4">
                    <button
                        className={
                            chartType == "authorityData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("authorityData") }}>
                        Authority
                    </button>
                    <button
                        className={
                            chartType == "tradeData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("tradeData") }}>
                        Trade
                    </button>
                    <button
                        className={
                            chartType == "combatData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("combatData") }}>
                        Combat
                    </button>
                    <button
                        className={
                            chartType == "discardData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("discardData") }}>
                        Discard
                    </button>
                    <button
                        className={
                            chartType == "drawData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("drawData") }}>
                        Draw
                    </button>
                    <button
                        className={
                            chartType == "deckSizeData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("deckSizeData") }}>
                        Deck size
                    </button>
                    <button
                        className={
                            chartType == "shuffleData" ? "bg-scifi3 text-white text-sm font-medium px-2 sm:px-6 py-2 rounded-lg" :
                                "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-2 sm:px-6 py-2 border rounded-lg"
                        }
                        type="button" onClick={(e) => { setChartType("shuffleData") }}>
                        Shuffle
                    </button>
                </div>
                <SRChart winner={winner} chartType={chartType} chartData={chartData[chartType]}></SRChart>
            </div>
        </div>
    )
}

export default GameStats