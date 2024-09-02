import React, { useEffect, useRef, useState } from 'react';
import { Chart, CategoryScale, BarController, BarElement, LinearScale, ChartOptions, ChartData } from 'chart.js';

// Register the required components for Chart.js
Chart.register(CategoryScale, BarController, BarElement, LinearScale);

const PatientsChart: React.FC = () => {
    const chartRef = useRef<Chart | null>(null); // Reference to store the chart instance

    // State for chart data
    const [chartData, setChartData] = useState<ChartData<'bar', number[], string>>({
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
            {
                data: [66, 144, 146, 116, 107, 131, 43],
                label: "Available",
                borderColor: "rgba(54, 162, 235, 1)",  // Blue border
                backgroundColor: "rgba(54, 162, 235, 0.6)", // Semi-transparent blue fill
                borderWidth: 2
            },
            {
                data: [40, 100, 44, 70, 63, 30, 10],
                label: "Attended",
                borderColor: "rgba(255, 99, 132, 1)", // Red border
                backgroundColor: "rgba(255, 99, 132, 0.6)", // Semi-transparent red fill
                borderWidth: 2
            },
            {
                data: [20, 24, 50, 34, 33, 23, 12],
                label: "Appointed",
                borderColor: "rgba(255, 205, 86, 1)", // Yellow border
                backgroundColor: "rgba(255, 205, 86, 0.6)", // Semi-transparent yellow fill
                borderWidth: 2
            },
            {
                data: [6, 20, 52, 12, 11, 78, 21],
                label: "Emergencies",
                borderColor: "rgba(75, 192, 192, 1)", // Teal border
                backgroundColor: "rgba(75, 192, 192, 0.6)", // Semi-transparent teal fill
                borderWidth: 2
            }
        ]
    });

    // State for chart options with animation and background color
    const [chartOptions, setChartOptions] = useState<ChartOptions<'bar'>>({
        indexAxis: 'x', // Rotate the chart by setting indexAxis to 'x'
        plugins: {
            legend: {
                labels: {
                    color: 'black'
                }
            },
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                ctx.fillStyle = 'white'; // Set the background color to white
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        },
        scales: {
            y: { // This is now the y-axis, flipped for rotation
                ticks: {
                    color: 'black',
                    beginAtZero: true // Ensure the bars start from the bottom (zero)
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: { // This is now the x-axis, flipped for rotation
                ticks: {
                    color: 'black'
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        },
        animation: { // Animation options
            duration: 1000, // Duration of the animation in milliseconds
            easing: 'easeInOutQuart', // Easing function for smooth animation
            onComplete: () => {
                console.log('Animation Complete!');
            }
        }
    });

    // useEffect to initialize and update the chart
    useEffect(() => {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;

        // Destroy existing chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });

        // Cleanup on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [chartData, chartOptions]); // Depend on chartData and chartOptions

    // Function to update the chart data
    const updateChart = () => {
        setChartData({
            ...chartData,
            datasets: [
                ...chartData.datasets,
                {
                    data: [10, 15, 25, 30, 22, 20, 14],
                    label: "New Data",
                    borderColor: "rgba(153, 102, 255, 1)", // Purple border
                    backgroundColor: "rgba(153, 102, 255, 0.6)", // Semi-transparent purple fill
                    borderWidth: 2
                }
            ]
        });
    };

    return (
        <>
        
            <h1 className="w-[150px]   mx-auto mt-10 text-xl font-semibold capitalize "></h1>
            <div className="w-[1400px] bg-white h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
            <button onClick={updateChart} className="mx-auto mt-4 p-2 bg-blue-500 text-white rounded">Update Chart</button>
        </>
    );
};

export default PatientsChart;
