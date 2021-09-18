import React from 'react';
import {Pie} from 'react-chartjs-2';


function Chart(){
  
    const state = {
          labels: ['Transportation', 'Health-Care', 'Hotel',
                  'Feeding', 'Miscellanous'],
          datasets: [
            {
              label: 'Expense Analysis',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
              data: [65, 59, 80, 45, 222]
            }
          ]
        }
    return (
      <div>
        <Pie
          data={state}
          options={{
            responsive:true,
            title:{
              display:true,
              text:'Expense Analysis Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
       
      </div>
    )
  }

export default Chart;