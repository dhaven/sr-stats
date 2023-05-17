import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


function BarChartWinLoss({ data }) {
    let colors = ["#00a5cf", "#ee6055"]
    let labels = ["win", "loss"]
    let datasets = []
    datasets.push({
        data: data,
        fill: false,
        backgroundColor: colors,
        borderRadius: 50
    })
    const dataChart = {
        labels: labels,
        datasets: datasets
    };
    let options = {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        //   show the x and y scales*-
        scales: {
            x: {
                beginAtZero: true,
                display: false,
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 18,
                    }
                }
            }
        },
    }
    return (
        <>
            <Bar
                options={options}
                data={dataChart}
            />
        </>
    )
}

export default BarChartWinLoss