import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function BarChartTotal({ winner, description, chartData }) {
    let datasets = []
    let data = []
    let labels = []
    let colors = []
    for (let player in chartData) {
        data.push(chartData[player].reduce((x,y) => { return x + y}, 0))
        labels.push(player)
        if (player == winner) {
            colors.push("#3d5a80")
        } else {
            colors.push("#ee6c4d")
        }
    }
    datasets.push({
        data: data,
        fill: false,
        backgroundColor: colors
    })
    const dataChart = {
        labels: labels,
        datasets: datasets
    };
    let options = {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: description
            },
            legend: {
                display: false,
            },
        },
        //   animate in
        animation: {
            duration: 1,
        },
        responsive: true,
        maintainAspectRatio: false,
        //   show the x and y scales*-
        scales: {
            x: {
                beginAtZero: true,
                display: false,
                offset: false
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
    }
    return (
        <div className="h-32 sm:h-60 bg-scifi1 rounded-md p-2 drop-shadow-scifi5">
            <Bar
                options={options}
                data={dataChart}
            />
        </div>
    )
}

export default BarChartTotal