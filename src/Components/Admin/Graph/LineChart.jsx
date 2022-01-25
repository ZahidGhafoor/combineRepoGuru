import { getDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => {

    // props[salePerDays]

    // console.log(" ____________________ ", props.res);

    let [resArray, setResArray] = useState([])

    useEffect(() => {
        if (props.res) {
            props.res.salePerDays.map((data, index) => {
                setResArray((preValue) => {
                    return [
                        ...preValue,
                        data.totalSales
                    ]
                })
            })
        }
    }, [])

    let [day, setDay] = useState([])

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"]


    // console.log("hlo===============", final)

    useEffect(() => {
        if (props.res) {
            props.res.salePerDays.map((data, index) => {
                let date = new Date(day)

                let final = days[date.getDay()]

                setDay((preValue) => {
                    return [
                        ...preValue,
                        data.day


                    ]
                })
            })
        }
    }, [])



    const data = {


        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"],
        // labels: day,
        datasets: [
            {
                data: resArray,
                label: 'Sales Per Day',
                fill: false,
                backgroundColor: 'green',
                borderColor: 'green',
                tension:0.3


            },

        ],

    };

    const options = {
        plugins: {
            legend: {
              display: false
            }
          },

        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                  }
            },
            x: {
                grid: {
                    display: false
                  }
            }
        },
        maintainAspectRatio: false,
    };


    return (
        <>
            <div style={{ height: "173px" }} className="chart">
                <Line data={data} options={options} />
            </div>

        </>
    )
};

export default LineChart;