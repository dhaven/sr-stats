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
    let players = []
    let chartTitles = {
        tradeData: "Trade",
        combatData: "Combat",
        discardData: "Discarded",
        drawCount: "Draw"
    }
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
    console.log(dataAggrChart)
    console.log(dataTempChart)
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
        //   show the x and y scales
        scales: {
            x: { 
                beginAtZero: true,
            },
        },
    }
    return (
        <div className="bg-white rounded-lg drop-shadow-scifi5">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="flex flex-wrap p-2">
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
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
                                    selected ? "ring ring-scifi-2 text-sm px-2 py-2 m-1 border border-gray-300 rounded-lg drop-shadow-md" :
                                               "bg-white text-sm px-2 py-2 m-1 border border-gray-300 hover:ring rounded-lg drop-shadow-md"
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
                                Draw
                            </button>
                        }
                    </Tab>
                </Tab.List>
            </Tab.Group>
            <Bar
                options={optionsAggrChart}
                data={dataAggrChart}
            />
             <Bar
                options={optionsTempChart}
                data={dataTempChart}
            />
        </div>
    )
}

export default OtherCharts 