import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function TimeCharts({ objValue }) {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Representing No. of reservations scheduled on the given date',
      },
    },
  };

    const labels = ["9am to Noon", "Noon to 3pm", "3pm to 6pm", "6pm to 9pm", "9pm to 12am", "12am to 3am", "3am to 6am", "6am to 9am"];
    const label_values = objValue;
    var ctrObj = {};
    for(let i=0;i<labels.length;i++){
      ctrObj[labels[i]] = 0;
    }
    for(let i=0;i<label_values.length;i++){
      if(label_values[i] >= "09:00:00" && label_values[i] < "12:00:00"){
          ctrObj[labels[0]] = ctrObj[labels[0]] + 1;
      }
      else if(label_values[i] >= "12:00:00" && label_values[i] < "15:00:00"){
          ctrObj[labels[1]] = ctrObj[labels[1]] + 1;
      }
      else if(label_values[i] >= "15:00:00" && label_values[i] < "18:00:00"){
          ctrObj[labels[2]] = ctrObj[labels[2]] + 1;
      }
      else if(label_values[i] >= "18:00:00" && label_values[i] < "21:00:00"){
          ctrObj[labels[3]] = ctrObj[labels[3]] + 1;
      }
      else if(label_values[i] >= "21:00:00" && label_values[i] < "24:00:00"){
          ctrObj[labels[4]] = ctrObj[labels[4]] + 1;
      }
      else if(label_values[i] >= "00:00:00" && label_values[i] < "03:00:00"){
          ctrObj[labels[5]] = ctrObj[labels[5]] + 1;
      }
      else if(label_values[i] >= "03:00:00" && label_values[i] < "06:00:00"){
          ctrObj[labels[6]] = ctrObj[labels[6]] + 1;
      }
      else {
          ctrObj[labels[7]] = ctrObj[labels[7]] + 1;
      }
    }
    const data = {
    labels: Object.keys(ctrObj),
    datasets: [
        {
        label: 'No. of reservations',
        data: Object.values(ctrObj),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
    ],
    };
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Line options={options} data={data} style={{width: '100%', height: '100%'}}/>
    </div>
  );
}


export default TimeCharts;