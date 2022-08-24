import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function FactionPie({factions}) {
  let options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    responsive: true,
    maintainAspectRatio: true
  }
    const data = {
        labels: [
          'Machine Cult',
          'Trade Federation',
          'Star Empire',
          'Blob',
          'Unaligned'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [
            factions['Machine Cult'],
            factions['Trade Federation'],
            factions['Star Empire'],
            factions['Blob'],
            factions['Unaligned']
          ],
          backgroundColor: [
            '#ba2028',
            '#4850a2',
            '#f1c61a',
            '#46a24d',
            '#a9a9a9'
          ],
          hoverOffset: 4
        }]
      };
    return (
            <Doughnut
                data={data}
                options={options}
                />
    )
  }
  
  export default FactionPie