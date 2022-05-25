import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import { atom, useAtom } from 'jotai'
import { getChartData } from '../lib/helper'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

export const chartTypeAtom = atom("authorityData")

export default function GameChart({firstPlayer, winner, rounds}) {
    const [chartType, setChartType] = useAtom(chartTypeAtom)
    let chartData = getChartData({firstPlayer, winner, rounds})
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    let chartTitles = {
        authorityData: "Authority",
        tradeData: "Trade pool",
        combatData: "Combat Pool",
        scrapData: "Scrapped",
        discardData: "Discarded",
        drawCount: "Draw count"
    }
    for(let player in chartData[chartType]){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        if(chartType == 'authorityData'){
            datasets.push({
                label: player,
                fill: false,
                data: chartData[chartType][player],
                borderColor: borderColor,
                backgroundColor: borderColor,
            })
        }else{
            datasets.push({
                label: player,
                fill: false,
                data: chartData[chartType][player],
                backgroundColor: borderColor,
                categoryPercentage: 0.75
    
            })
        }
        numTurns = chartData[chartType][player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets,
    };
    let options = {
        plugins: {
            title: {
                display: true,
                text: chartTitles[chartType]
            },
            legend: {
                display: false,
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        //   animate in
        animation: {
            duration: 1,
        },
        responsive: true,
        //   show the x and y scales
        scales: {
            x: {
                beginAtZero: false,
                offset: true,
                display: false,
            },
            y: { 
                beginAtZero: true,
            },
        },
    }
    return(
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="flex flex-wrap p-1">
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
                                }
                                type="button" onClick={(e) => {setChartType("authorityData")}}>
                                authority
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
                                }
                                type="button" onClick={(e) => {setChartType("tradeData")}}>
                                trade pool
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
                                }
                                type="button" onClick={(e) => {setChartType("combatData")}}>
                                combat pool
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
                                }
                                type="button" onClick={(e) => {setChartType("scrapData")}}>
                                Scrap
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
                                }
                                type="button" onClick={(e) => {setChartType("discardData")}}>
                                Discard
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
                                }
                                type="button" onClick={(e) => {setChartType("drawCount")}}>
                                extra draw
                            </button>
                        }
                    </Tab>
                </Tab.List>
            </Tab.Group>
            {
                chartType == "authorityData" ?
                <Line
                options={options}
                data={data}
                /> : 
                <Bar
                options={options}
                data={data}
                />
            }
        </div>
    )
  }