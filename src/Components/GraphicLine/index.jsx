import React from 'react';
import Chart from 'react-apexcharts';

import "./styles.css"

export default function GraphicLine(){

    const options = {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Gráfico de Spline',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // alterna linhas cinzas e transparentes
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
      };
    
      const series = [
        {
          name: 'Desempenho',
          data: [28, 29, 33, 36, 32, 32, 33, 35, 34, 36, 38, 40]
        }
    ];

    return(
        <div className="spline-chart">
            <Chart
                options={options}
                series={series}
                type="line"
                width={500}
                height={350}
            />
        </div>
    )
}