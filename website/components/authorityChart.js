import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function AuthorityChart({winner, authorityData}){
    //construct our dataset array
    let datasets = []
    let numTurns = 0
    for(let player in authorityData){
        let borderColor = ""
        if(player == winner){
            borderColor = "#3d5a80"
        }else{
            borderColor = "#ee6c4d"
        }
        datasets.push({
            label: player,
            fill: false,
            data: authorityData[player],
            borderColor: borderColor,
            backgroundColor: borderColor,
        })
        numTurns = authorityData[player].length
    }
    const data = {
        labels: Array(numTurns).fill().map((x,i)=>i),
        datasets: datasets,
    };
    let options = {
        plugins: {
            title: {
                display: true,
                text: "Authority",
                font: {
                    size: 16
                }
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
        <div className="bg-scifi1 rounded-lg drop-shadow-scifi5 w-full p-4">
            <Line
                options={options}
                data={data}
            />
        </div>
    )
    
}

export default AuthorityChart