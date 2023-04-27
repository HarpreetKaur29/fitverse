import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { CategoryScale } from "chart.js/auto";

Chart.register(CategoryScale)

const ImpressionsChart = () => {
  const data = {
    labels: ["Mo" , "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Impressions",
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
            display: false,
            labelString: "Impressions"
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
      <h2 className="text-white">Daily Page Impressions</h2>
        </div>
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ImpressionsChart;