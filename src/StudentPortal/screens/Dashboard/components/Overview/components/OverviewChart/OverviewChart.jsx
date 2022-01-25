import React from 'react'
import { Line } from "react-chartjs-2";


const OverviewChart = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(252, 172, 0)',
                yAxisID: 'y-axis-1',
            },
            {
                label: '',
                data: [1, 2, 1, 1, 2, 2],
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(251, 91, 91)',
                yAxisID: 'y-axis-2',
            },
        ],
    };

    const options = {

        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnArea: false,

                    },
                },
            ],
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        }
    };

    return (
        <div className="overview__chart">
            <Line data={data} options={options} />
        </div>
    )
}

export default OverviewChart
