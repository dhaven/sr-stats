import Chart from 'chart.js/auto';
import { atom, useAtom } from 'jotai'
import { getChartData } from '../lib/helper'
import { logDataAtom } from './form'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const chartTypeAtom = atom("authorityData")

export default function GameChart({winner}) {
    const [battle, setBattle] = useAtom(logDataAtom)
    const [chartType, setChartType] = useAtom(chartTypeAtom)
    let chartData = {}
    if(Object.keys(battle).length == 0){
        let chartStatus = Chart.getChart("gameChart");
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        return(
            <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
                <canvas id="gameChart"></canvas>
            </div>
        )
    }
    chartData = getChartData(battle)
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    let chartTypes = {
        authorityData: "line",
        tradeData: "bar",
        combatData: "bar",
        scrapData: "bar",
        discardData: "bar",
        drawCount: "bar"
    }
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
    let chartStatus = Chart.getChart("gameChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    new Chart("gameChart",{
        type: chartTypes[chartType],
        data: data,
        options: {
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
    })
    return(
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="flex justify-center p-1 space-x-1">
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "bg-gray-200 text-sm px-2 py-2 border border-gray-300 rounded-lg" :
                                               "bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg"
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
                                    selected ? "bg-gray-200 text-sm px-2 py-2 border border-gray-300 rounded-lg" :
                                               "bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg"
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
                                    selected ? "bg-gray-200 text-sm px-2 py-2 border border-gray-300 rounded-lg" :
                                               "bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg"
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
                                    selected ? "bg-gray-200 text-sm px-2 py-2 border border-gray-300 rounded-lg" :
                                               "bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg"
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
                                    selected ? "bg-gray-200 text-sm px-2 py-2 border border-gray-300 rounded-lg" :
                                               "bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg"
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
                                    selected ? "bg-gray-200 text-sm px-2 py-2 border border-gray-300 rounded-lg" :
                                               "bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg"
                                }
                                type="button" onClick={(e) => {setChartType("drawCount")}}>
                                draw
                            </button>
                        }
                    </Tab>
                </Tab.List>
            </Tab.Group>
            <canvas id="gameChart"></canvas>
        </div>
    )
  }