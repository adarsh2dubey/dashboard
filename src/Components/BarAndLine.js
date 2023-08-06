import React,{useState} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);



const BarAndLine = () => {
  const [clickedDataset, setClickedDataset] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Dataset 2',
        data: [50, 40, 10, 20, 42, 35, 60],
        fill: false,
        borderColor: 'rgba(255, 206, 86, 1)',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const clickedElement = elements[0];
        const datasetIndex = clickedElement.datasetIndex;
        const index = clickedElement.index;
        const datasetLabel = data.datasets[datasetIndex].label;
        const value = data.datasets[datasetIndex].data[index];
        alert(`Clicked: ${datasetLabel}, Value: ${value}`);
        setClickedDataset(clickedElement);
      }
    },
    onHover: (event, elements) => {
      if (elements.length > 0) {
        const hoveredElement = elements[0];
        setHoveredElement(hoveredElement);
      } else {
        setHoveredElement(null);
      }
    },
  };

  return (
    <div class="p-1" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <Line data={data} options={options} />
      {hoveredElement && (
        <p>
          Hovered: {data.labels[hoveredElement.index]},{' '}
          {data.datasets[hoveredElement.datasetIndex].label}:{' '}
          {data.datasets[hoveredElement.datasetIndex].data[hoveredElement.index]}
        </p>
      )}
      {clickedDataset && (
        <p>
          Clicked: {data.labels[clickedDataset.index]},{' '}
          {data.datasets[clickedDataset.datasetIndex].label}:{' '}
          {data.datasets[clickedDataset.datasetIndex].data[clickedDataset.index]}
        </p>
      )}
    </div>
  );
};




export default BarAndLine;
