import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { getChartData } from '../lib/helper'

function AuthorityChart({firstPlayer, winner, rounds}){
    let chartData = getChartData({firstPlayer, winner, rounds})
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    for(let player in chartData["authorityData"]){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        datasets.push({
            label: player,
            fill: false,
            data: chartData["authorityData"][player],
            borderColor: borderColor,
            backgroundColor: borderColor,
        })
        numTurns = chartData["authorityData"][player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets,
    };
    let options = {
        plugins: {
            title: {
                display: true,
                text: "Authority"
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
    return (
        <div className="bg-white rounded-lg drop-shadow-scifi5">
            <Line
                options={options}
                data={data}
            />
        </div>
    )
    
}

export default AuthorityChart