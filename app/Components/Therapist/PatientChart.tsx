import { useEffect } from "react";
import { Chart } from "chart.js";

function Example() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [66, 144, 146, 116, 107, 131, 43],
                    label: "Available",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgba(109, 253, 181, 0.5)",
                    borderWidth: 2
                }, {
                    data: [40, 100, 44, 70, 63, 30, 10],
                    label: "Attended",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    borderWidth: 2
                }, {
                    data: [20, 24, 50, 34, 33, 23, 12],
                    label: "Appointed",
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgba(255, 205, 86, 0.5)",
                    borderWidth: 2
                }, {
                    data: [6, 20, 52, 12, 11, 78, 21],
                    label: "Emergences",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    borderWidth: 2
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'black' // set label color to black
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'black' // set x-axis tick color to black
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)' // set x-axis grid color
                        }
                    },
                    y: {
                        ticks: {
                            color: 'black' // set y-axis tick color to black
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)' // set y-axis grid color
                        }
                    }
                }
            },
            plugins: [{
                beforeDraw: function (chart) {
                    var ctx = chart.ctx;
                    ctx.fillStyle = 'white'; // set the background color to white
                    ctx.fillRect(0, 0, chart.width, chart.height);
                }
            }]
        });
    }, []);

    return (
        <>
            <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize "></h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    );
}

export default Example;
