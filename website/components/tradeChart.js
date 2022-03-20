import Chart from 'chart.js/auto';
import { useAtom } from 'jotai'
import { getTrade } from '../lib/classes'
import { logDataAtom } from './form'
import { Config } from './chartConfig'

export default function TradeChart({winner}) {
    const [battle, setBattle] = useAtom(logDataAtom)
    console.log(battle)
    let tradeData = {}
    if(Object.keys(battle).length == 0){
        console.log("delete chart")
        let chartStatus = Chart.getChart("tradeChart");
        console.log(chartStatus)
        if(chartStatus != undefined) {
            console.log("destroyed1")
            chartStatus.destroy();
        }
        return(
            <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
                <canvas id="tradeChart"></canvas>
            </div>
        )
    }
    tradeData = getTrade(battle)
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    for(let player in tradeData){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        datasets.push({
            label: player,
            fill: false,
            data: tradeData[player],
            backgroundColor: borderColor,

        })
        numTurns = tradeData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets
    };
    let chartStatus = Chart.getChart("tradeChart");
    if (chartStatus != undefined) {
        console.log("destroyed2")
        chartStatus.destroy();
    }
    Config.plugins.title = {
        display: true,
        text: 'Trade pool'
    }
    new Chart("tradeChart",{
        type: "bar",
        data: data,
        options: Config
    })
    return(
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
            <canvas id="tradeChart"></canvas>
        </div>
    )
  } 