import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import card_list from '../../lib/card_data/cards.js'
import HorizontalCard from '../horizontalCard'
import VerticalCard from '../verticalCard'

function PlayerCard({ player, deck, gambit, missions }) {
    let factions = {
        'Machine Cult': 0,
        'Trade Federation': 0,
        'Star Empire': 0,
        'Blob': 0,
        'Unaligned': 0
    }
    Object.keys(deck).forEach(card => {
        card_list[card]['faction'].forEach(faction => {
            factions[faction] += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        })
    })
    let normalize = factions => {
        let newFactions = JSON.parse(JSON.stringify(factions));
        let sum = 0
        for (let faction in newFactions) {
            sum += newFactions[faction]
        }
        for (let faction in newFactions) {
            newFactions[faction] = newFactions[faction] / sum
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
                label: 'Blob'
            },
            {
                data: [
                    factions['Unaligned'],
                ],
                backgroundColor: '#a9a9a9',
                label: 'Unaligned'
            }]
    };
    let options = {
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
        <div className="flex flex-row bg-white p-2">
            <div className="flex flex-col grow">
                <div className="flex flex-row my-2">
                    <p className="flex text-xl font-bold">{player}</p>
                    <div className="h-8 w-3/4">
                        <Bar
                            className="rounded-full p-2"
                            data={data}
                            options={options}
                        >
                        </Bar>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col grow">
                        <p className="text-lg font-medium">Gambits</p>
                        <hr className="border-2 border-scifi5 rounded-full w-1/2"></hr>
                        <div className="flex flex-row gap-2 my-2">
                            {
                                Object.keys(gambit).map((value, index) => {
                                    return (
                                        <HorizontalCard key={index} cardName={value} category={"gambits"}></HorizontalCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col grow">
                        <p className="text-lg font-medium">Missions</p>
                        <hr className="border-2 border-scifi5 rounded-full w-3/4"></hr>
                        <div className="flex flex-row gap-2 my-2">
                            {
                                missions.map((value, index) => {
                                    return (
                                        <VerticalCard key={index} cardName={value} category={"missions"}></VerticalCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <div className="w-10 h-10 pointer-events-none">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default PlayerCard