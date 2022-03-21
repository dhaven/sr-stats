import Chart from 'chart.js/auto';
import { useAtom } from 'jotai'
import { getAuthority } from '../lib/helper'
import { logDataAtom } from './form'
import { Config } from './chartConfig'

export default function AuthorityChart({winner}) {
    const [battle, setBattle] = useAtom(logDataAtom)
    let authorityData = {}
    if(Object.keys(battle).length == 0){
        let chartStatus = Chart.getChart("authorityChart");
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        return(
            <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
                <canvas id="authorityChart"></canvas>
            </div>
        )
    }
    authorityData = getAuthority(battle)
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
    let chartStatus = Chart.getChart("authorityChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    Config.plugins.title = {
        display: true,
        text: 'Authority'
    }
    new Chart("authorityChart",{
        type: "line",
        data: data,
        options: Config,
    })
    return(
        <div className="w-screen p-1 m-1 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg">
            <canvas id="authorityChart"></canvas>
        </div>
    )
  }