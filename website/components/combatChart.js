import Chart from 'chart.js/auto';
import { useAtom } from 'jotai'
import { getCombat } from '../lib/helper'
import { logDataAtom } from './form'

export default function CombatChart({winner}) {
    const [battle, setBattle] = useAtom(logDataAtom)
    let combatData = {}
    if(Object.keys(battle).length == 0){
        let chartStatus = Chart.getChart("combatChart");
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        return(
            <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
                <canvas id="combatChart"></canvas>
            </div>
        )
    }
    combatData = getCombat(battle)
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    for(let player in combatData){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        datasets.push({
            label: player,
            fill: false,
            data: combatData[player],
            backgroundColor: borderColor,
            categoryPercentage: 0.75
        })
        numTurns = combatData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets,
    };
    let chartStatus = Chart.getChart("combatChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    new Chart("combatChart",{
        type: "bar",
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Combat pool'
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
        },
    })
    return(
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
            <canvas id="combatChart"></canvas>
        </div>
    )
  }