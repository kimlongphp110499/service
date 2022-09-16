import { useEffect } from "react";
import { Line } from "react-chartjs-2";

function ChartData() {

   

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
        datasets: [
            {
                label: "# of Votes",
                data: [25, 20, 60, 41, 66, 45, 80, 20, 60, 41, 66, 45, ],
                borderColor: '#fff',
                borderWidth: "0",
                backgroundColor: "#F6B81D",
                pointColor: "#F6B81D",
                pointBorderColor: "#fff",
                pointBackgroundColor: "#F6B81D",
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverBackgroundColor: "#F6B81D",
                pointHoverBorderColor: "#fff",
                pointHoverRadius: 7,
                lineTension: 0,
            },
        ],
    };

    const options = {        
        legend: false,
            scales: {
                yAxes: [{
                    zeroLineWidth: 0,
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0,
                        stepSize: 20,
                        padding: 10,
                        fontColor: '#D0D0E6',
                        fontFamily: "'Rubik', sans-serif",
                    },
                    gridLines: {
                        // display: false,
                        color: '#E3E9EF',
                        drawBorder: false,
                        zeroLineColor: '#E3E9EF'
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#E3E9EF',

                    },
                    ticks: {
                        padding: 5,
                        fontColor: '#D0D0E6',
                        fontFamily: "'Rubik', sans-serif",
                    }
                }]
            }
    };

    return (
        <>
            <Line data={data} height={80} options={options} id="coin_earned" style={{height: "250px", "width":"100%!important"}} />
        </>
    );
}
export default ChartData
