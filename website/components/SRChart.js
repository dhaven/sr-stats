import { useState } from "react";
import LineChart from "./charts/lineChart";
import BarChartTemporal from "./charts/barChartTemporal";
import BarChartTotal from "./charts/barChartTotal";

function SRChart({ winner, chartType, chartData }) {
    function hasMultipleCharts(chartType) {
        if (chartType == "tradeData" || chartType == "combatData" || chartType == "discardData" || chartType == "drawData" || chartType == "shuffleData") {
            return true
        }
        return false
    }
    function getDescription(chartType, type){
        if(chartType == "tradeData"){
            if(type == "total"){
                return "Total amount of trade collected during the game"
            }else{
                return "Trade collected on each turn"
            }
        }else if(chartType == "combatData"){
            if(type == "total"){
                return "Total amount of combat collected during the game"
            }else{
                return "Combat collected on each turn"
            }
        }else if(chartType == "discardData"){
            if(type == "total"){
                return "Total amount of cards discarded during the game"
            }else{
                return "Amount of cards discarded on each turn"
            }
        }else if(chartType == "drawData"){
            if(type == "total"){
                return "Total amount of cards drawn during the game"
            }else{
                return "Amount of cards drawn on each turn"
            }
        }else if(chartType == "shuffleData"){
            if(type == "total"){
                return "Total number of times the player shuffled his discard pile to form a new deck"
            }else{
                return "Number of times the player shuffled his discard pile to form a new deck on each turn"
            }
        }else if(chartType == "authorityData"){
            return "The authority of each player for any given turn"
        }else if(chartType == "deckSizeData"){
            return "The number of cards in each players deck for any given turn"
        }
    }
    return (
        <div className="flex flex-col w-full">
            {
                hasMultipleCharts(chartType) ? (
                    <div className="flex flex-col w-screen lg:w-full py-2 md:p-4 gap-4">
                        <BarChartTotal winner={winner} description={getDescription(chartType, "total")} chartData={chartData}></BarChartTotal>
                        <BarChartTemporal winner={winner} description={getDescription(chartType, "temporal")} chartData={chartData}></BarChartTemporal>
                    </div>
                ) : (
                    <div className="flex h-60 md:h-80 w-screen lg:w-full py-2 md:p-4 gap-4">
                        <LineChart winner={winner} description={getDescription(chartType, "")} chartData={chartData}></LineChart>
                    </div>
                )
            }

        </div>
    )
}

export default SRChart