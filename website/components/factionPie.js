import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function FactionPie({deckSummary}) {
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
          'Blob'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [
            deckSummary['machine_cult_count'],
            deckSummary['trade_federation_count'],
            deckSummary['star_empire_count'],
            deckSummary['blob_count']
          ],
          backgroundColor: [
            '#ba2028',
            '#4850a2',
            '#f1c61a',
            '#46a24d'
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