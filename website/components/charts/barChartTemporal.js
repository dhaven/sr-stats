import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function BarChartTemporal({ winner, description, chartData }) {
    let datasets = []
    let numTurns = 0
    for (let player in chartData) {
        let borderColor = ""
        if (player == winner) {
            borderColor = "#3d5a80"
        } else {
            borderColor = "#ee6c4d"
        }
        datasets.push({
            label: player,
            fill: false,
            data: chartData[player],
            backgroundColor: borderColor,
            categoryPercentage: 0.75
        })
        numTurns = chartData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x, i) => i),
        datasets: datasets
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: description
            },
            legend: {
                display: true,
                position: "bottom"
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
    return (
        <div className="h-40 sm:h-80 w-full bg-scifi1 rounded-md p-2 drop-shadow-scifi5">
            <Bar
                options={options}
                data={data}
            />
        </div>
    )
}

export default BarChartTemporal