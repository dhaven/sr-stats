import Chart from 'chart.js/auto';
import { useAtom } from 'jotai'
import { getTrade } from '../lib/classes'
import { logDataAtom } from './form'
import styles from './chart.module.css'

export default function TradeChart() {
    const [battle, setBattle] = useAtom(logDataAtom)
    let tradeData = {}
    if(Object.keys(battle).length == 0){
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
        datasets.push({
            label: player,
            fill: false,
            data: tradeData[player]
        })
        numTurns = tradeData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets
    };
    let chartStatus = Chart.getChart("tradeChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    new Chart("tradeChart",{
        type: "bar",
        data: data,
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    })
    return(
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
            <canvas id="tradeChart"></canvas>
        </div>
    )
  } 