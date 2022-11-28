import { useState } from "react";
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function OtherCharts({winner, otherData, otherAggrData}){
    const [chartType, setChartType] = useState("tradeData");
    //construct our dataset array
    let datasetsTempChart = []
    let datasetsAggrChart = []
    let numTurns = 0
    let aggrData = []
    let aggrLabels = []
    let aggrColors = []
    for(let player in otherAggrData[chartType]){
        aggrData.push(otherAggrData[chartType][player])
        aggrLabels.push(player)
        if(player == winner){
            aggrColors.push("#3d5a80")
        }else{
            aggrColors.push("#ee6c4d")
        }
    }
    datasetsAggrChart.push({
        data: aggrData,
        fill: false,
        backgroundColor: aggrColors
    })
    for(let player in otherData[chartType]){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        datasetsTempChart.push({
            label: player,
            fill: false,
            data: otherData[chartType][player],
            backgroundColor: borderColor,
            categoryPercentage: 0.75
        })
        numTurns = otherData[chartType][player].length
    }
    const dataTempChart = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasetsTempChart,
    };
    const dataAggrChart = {
        labels: aggrLabels,
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
                beginAtZero: true,
                offset: true,
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
        <div className="flex flex-col sm:flex-row w-full bg-scifi4 md:rounded-md border-2 border-scifi4 drop-shadow-scifi5 p-2 sm:p-4">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="flex flex-row sm:flex-col flex-wrap sm:p-2 sm:p-4 gap-2 sm:gap-4">
                    <Tab as={Fragment}>
                        {({ selected }) =>
                            <button 
                                className={
                                    selected ? "bg-scifi3 text-white text-sm font-medium px-4 sm:px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-4 sm:px-6 py-2 border rounded-lg"
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
                                    selected ? "bg-scifi3 text-white text-sm font-medium px-4 sm:px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-4 sm:px-6 py-2 border rounded-lg"
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
                                    selected ? "bg-scifi3 text-white text-sm font-medium px-4 sm:px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-4 sm:px-6 py-2 border rounded-lg"
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
                                    selected ? "bg-scifi3 text-white text-sm font-medium px-4 sm:px-6 py-2 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-sm font-medium px-4 sm:px-6 py-2 border rounded-lg"
                                }
                                type="button" onClick={(e) => {setChartType("drawData")}}>
                                Draw
                            </button>
                        }
                    </Tab>
                </Tab.List>
            </Tab.Group>
            <div className="flex flex-col w-full py-2 md:p-4 gap-4">
                <div className="h-32 sm:h-60 bg-scifi1 rounded-md p-2 drop-shadow-scifi5">
                    <Bar
                        options={optionsAggrChart}
                        data={dataAggrChart}
                    />
                </div>
                <div className="h-40 sm:h-80 w-full bg-scifi1 rounded-md p-2 drop-shadow-scifi5">
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