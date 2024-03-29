import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function LineChart({ winner, description, chartData }) {
    let datasets = []
    let numTurns = 0
    for (let player in chartData) {
        let borderColor = ""
        if (player == winner) {
            borderColor = "#00a5cf"
        } else {
            borderColor = "#ee6055"
        }
        datasets.push({
            label: player,
            fill: false,
            data: chartData[player],
            borderColor: borderColor,
            backgroundColor: borderColor,
        })
        numTurns = chartData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x, i) => i),
        datasets: datasets,
    };
    let options = {
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
                beginAtZero: false,
                offset: true,
                display: false,
            },
            y: {
                beginAtZero: true,
                display: true,
                offset: true,
                grid: {
                    display: false
                }
            },
        },
    }
    return (
        <div className="bg-white rounded-lg md:drop-shadow-scifi5 w-full p-2 md:p-4">
            <Line
                options={options}
                data={data}
            />
        </div>
    )
}

export default LineChart