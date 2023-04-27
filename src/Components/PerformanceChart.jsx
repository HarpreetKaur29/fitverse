import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { CategoryScale } from "chart.js/auto";

Chart.register(CategoryScale)

const PerformanceChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Calories",
        data: [],
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  };

  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 4000,
            stepSize: 1000,
            callback: function (value) {
              return `${value / 1000}k`;
            }
          },
          scaleLabel: {
            display: true,
            labelString: "Calories"
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time"
          }
        }
      ]
    }
  };

  return (
    <div>
        <div className="chart_header flex justify-between">
      <h2 className="text-white">Performance Chart</h2>
      <select name="chart_options" id="chart_option" className="bg-transparent border rounded text-gray-400 text-xs p-1">
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="yearly">Yearly</option>
      </select>

        </div>
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;