import Chart from 'chart.js/auto';

export default function TradeChart({ tradeData }) {
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
    return (
        <canvas id="tradeChart"></canvas>
    )
  } 