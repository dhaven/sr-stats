import Chart from 'chart.js/auto';
import { useAtom } from 'jotai'
import { getAuthority } from '../lib/classes'
import { logDataAtom } from './form'
import styles from './chart.module.css'

export default function AuthorityChart() {
    const [battle, setBattle] = useAtom(logDataAtom)
    let authorityData = {}
    if(Object.keys(battle).length != 0){
        authorityData = getAuthority(battle)
        console.log(authorityData)
    }
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    for(let player in authorityData){
        datasets.push({
            label: player,
            fill: false,
            data: authorityData[player]
        })
        numTurns = authorityData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets
    };
    let chartStatus = Chart.getChart("authorityChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }  
    new Chart("authorityChart",{
        type: "line",
        data: data,
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    })
    return (
        <div>
            <canvas id="authorityChart"></canvas>
        </div>
    )
  }