import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import SRChart from '../SRChart';
import EventCard from '../eventCard'
import { useState, useEffect } from 'react'

function GameStatsMobile({ winner, chartData, events }) {
    let [chartType, setChartType] = useState(0)
    useEffect(() => {
        document.getElementById("chart-carousel").addEventListener("scroll", (event) => {
            let scrollPos = document.getElementById("chart-carousel").scrollLeft
            setChartType(Math.round(scrollPos / window.innerWidth))
        });
    });
    let chartTypes = ["authorityData", "tradeData", "combatData", "discardData", "drawData", "deckSizeData", "shuffleData"]
    function chartTitle() {
        if (chartType == 0) {
            return "Authority"
        } else if (chartType == 1) {
            return "Trade pool"
        } else if (chartType == 2) {
            return "Combat pool"
        } else if (chartType == 3) {
            return "Discard count"
        } else if (chartType == 4) {
            return "Draw count"
        } else if (chartType == 5) {
            return "Deck size"
        } else if (chartType == 6) {
            return "Shuffle count"
        }
    }
    function nextChart() {
        document.getElementById("chart-carousel").scrollBy({
            top: 0,
            left: window.innerWidth,
            behavior: 'smooth'
          });
    }
    function previousChart() {
        document.getElementById("chart-carousel").scrollBy({
            top: 0,
            left: -window.innerWidth,
            behavior: 'smooth'
          });
    }
    return (
        <div className="flex flex-col bg-scifi1">
            <div className="flex flex-row items-center pt-4">
                <div className="flex justify-start active:bg-slate-100 rounded-full" onClick={previousChart}>
                    <ChevronLeftIcon className={`${chartType == 0? "hidden": ""} w-14 h-14`}></ChevronLeftIcon>
                </div>
                <div className="flex justify-center grow">
                    <p className="font-medium text-xl">{chartTitle()}</p>
                </div>
                <div className="flex justify-end active:bg-slate-100 rounded-full" onClick={nextChart}>
                    <ChevronRightIcon className={`${chartType == 6? "hidden": ""} w-14 h-14`}></ChevronRightIcon>
                </div>
            </div>
            <div id="chart-carousel" className="flex flex-row gap-4 snap-mandatory snap-x overflow-scroll pb-2 rounded-bl-lg rounded-br-lg">
                {
                    chartTypes.map((value, index) => {
                        return (
                            <div id={`chart-${index}`} key={index} className="flex snap-center">
                                <SRChart winner={winner} chartType={value} chartData={chartData[value]}></SRChart>
                            </div>
                        )
                    })
                }
            </div>
            {
                events.length != 0 &&
                <div className="flex flex-row gap-2 md:p-2 justify-center m-2">
                    {
                        events.map((value, index) => {
                            return (
                                <div key={index}>
                                    <EventCard event={value}></EventCard>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default GameStatsMobile