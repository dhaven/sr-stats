import { useState } from "react";
import { getChartData, getAggrChartData } from '../lib/helper'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function OtherCharts({firstPlayer, winner, rounds}){
    const [chartType, setChartType] = useState("tradeData");
    let chartData = getChartData({firstPlayer, winner, rounds})
    let aggrChartData = getAggrChartData({firstPlayer, winner, rounds})
    //construct our dataset array
    let datasetsTempChart = []
    let datasetsAggrChart = []
    let numTurns = 0
    datasetsAggrChart.push({
        data: Object.values(aggrChartData[chartType]),
        fill: false,
        backgroundColor: ["#3d5a80","#ee6c4d"]
    })
    for(let player in chartData[chartType]){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        datasetsTempChart.push({
            label: player,
            fill: false,
            data: chartData[chartType][player],
            backgroundColor: borderColor,
            categoryPercentage: 0.75
        })
        numTurns = chartData[chartType][player].length
    }
    const dataTempChart = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasetsTempChart,
    };
    const dataAggrChart = {
        labels: Object.keys(aggrChartData[chartType]),
        datasets: datasetsAggrChart
    };
    let optionsTempChart = {
        plugins: {
            title: {
                display: false,
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
        maintainAspectRatio: false,
        //   show the x and y scales
        scales: {
            x: {
                beginAtZero: false,
                offset: false,
                display: false,
            },
            y: { 
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
        },
    }
    let optionsAggrChart = {
        indexAxis: 'y',
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        },
        //   animate in
        animation: {
            duration: 1,
        },
        responsive: true,
        maintainAspectRatio: false,
        //   show the x and y scales*-
        scales: {
            x: { 
                beginAtZero: true,
                display: false,
                offset: false
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
    }
    return (
        <div className="flex w-full bg-scifi3 rounded-md border-2 border-scifi4 drop-shadow-scifi5 p-4">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="flex flex-col flex-wrap p-4 gap-4">
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "bg-slate-500/70 text-scifi1 text-sm border border-2 font-medium px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi1 text-sm font-medium px-6 py-2 border rounded-lg"
                                }
                                type="button" onClick={(e) => {setChartType("tradeData")}}>
                                Trade
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "bg-slate-500/70 text-scifi1 text-sm border border-2 font-medium px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi1 text-sm font-medium px-6 py-2 border rounded-lg"
                                }
                                type="button" onClick={(e) => {setChartType("combatData")}}>
                                Combat
                            </button>
                        }
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "bg-slate-500/70 text-scifi1 text-sm border border-2 font-medium px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi1 text-sm font-medium px-6 py-2 border rounded-lg"
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
                                    selected ? "bg-slate-500/70 text-scifi1 text-sm border border-2 font-medium px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi1 text-sm font-medium px-6 py-2 border rounded-lg"
                                }
                                type="button" onClick={(e) => {setChartType("drawCount")}}>
                                Draw
                            </button>
                        }
                    </Tab>
                </Tab.List>
            </Tab.Group>
            <div className="flex flex-col w-full p-4 gap-4">
                <div className="h-60 bg-scifi1 rounded-md p-2 drop-shadow-scifi5">
                    <Bar
                        options={optionsAggrChart}
                        data={dataAggrChart}
                    />
                </div>
                <div className="h-80 w-full bg-scifi1 rounded-md p-2 drop-shadow-scifi5">
                    <Bar
                        options={optionsTempChart}
                        data={dataTempChart}
                    />
                </div>
            </div>
        </div>
    )
}

export default OtherCharts 