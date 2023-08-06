import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { PointElement } from 'chart.js';
import { LinearScale } from 'chart.js';
import { LineElement } from 'chart.js';

Chart.register(LineElement);
Chart.register(LinearScale);
Chart.register(PointElement);

const data = {
    datasets: [
      {
        label: 'Monthly Views',
        data: [
          { x: 0, y:0 },
          { x: 0.2, y: 0.5 },
          { x: 0.6, y: 1 },
          { x: 0.8, y:1.4 },
          { x: 1.2, y:0.7 },
          { x: 1.6, y: 1 },
          { x: 1.9, y: 1.4 },
          { x: 2.1, y: 1.2 },
          { x: 2.4, y:0.5 },
          { x: 2.7, y: 1 },
          { x: 3, y:1.3 }
        
        ],
        backgroundColor: 'transparent',
        borderColor: '#3DCA15',
        borderWidth: 2
      }
    ]
  };
  

  const options = {
    scales: {
      x: {
        display: false,
        type: 'linear',
        position: 'bottom'
      },
      y: {
        display: false
      }
    }
  };
  

const LineChart = () => (
  <div class ="p-2 mt-2" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <div className='header'>
        <div className="icon d-flex justify-content-center">
    <svg style={{borderRadius:"50%",backgroundColor:"#E5E4E2",padding:"5px"}} xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#3DAb15" class="bi bi-gear " viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>

</div>

<h3 class="text-center mt-2 mb-0">45.8K</h3>
<p class="text-center text-secondary">Total views</p>
<p class="text-center mb-2 mt-0"> 175.5% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg></p>
    </div>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
