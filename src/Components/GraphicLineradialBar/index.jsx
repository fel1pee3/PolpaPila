import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function GraphicLineradialBar() {
  const [chartData] = useState({
    series: [70], // Series data for the radial bar chart
    options: {
      chart: {
        height: 350,
        type: 'radialBar', // Type of chart
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%', // Size of the hollow center
          },
        },
      },
      labels: ['Cricket'], // Labels for the radial bar
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="radialBar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}