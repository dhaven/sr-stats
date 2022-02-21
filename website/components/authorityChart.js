import Chart from 'chart.js/auto';

export default function AuthorityChart({ authorityData }) {
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
        <canvas id="authorityChart"></canvas>
    )
  }