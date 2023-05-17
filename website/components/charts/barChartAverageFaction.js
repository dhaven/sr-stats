import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


function BarChartAverageFaction({ factions }) {
    let normalize = factions => {
        let newFactions = JSON.parse(JSON.stringify(factions));
        let sum = 0
        for (let faction in newFactions) {
            sum += newFactions[faction]
        }
        for (let faction in newFactions) {
            newFactions[faction] = 100 * (newFactions[faction] / sum)
        }
        return newFactions
    }
    factions = normalize(factions)
    const data = {
        labels: ["Faction distribution"],
        datasets: [
            {
                data: [
                    factions['Machine Cult'],
                ],
                backgroundColor: '#ba2028',
                label: 'Machine Cult'
            },
            {
                data: [
                    factions['Trade Federation'],
                ],
                backgroundColor: '#4850a2',
                label: 'Trade Federation'
            },
            {
                data: [
                    factions['Star Empire'],
                ],
                backgroundColor: '#f1c61a',
                label: 'Star Empire'
            },
            {
                data: [
                    factions['Blob'],
                ],
                backgroundColor: '#46a24d',
                label: 'Blob',
                borderRadius: 50
            }]
    };
    let options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Winning deck average composition"
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        //   show the x and y scales*-
        scales: {
            x: {
                stacked: true,
                display: false,
            },
            y: {
                stacked: true,
                display: false,
            }
        },
    }
    return (
        <>
            <Bar
                data={data}
                options={options}
            >
            </Bar>
        </>
    )
}

export default BarChartAverageFaction