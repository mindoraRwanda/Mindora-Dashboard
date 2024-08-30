import {
  FaCalendarAlt,
  FaVideo,
  FaChartBar,
  FaGamepad,
} from "react-icons/fa";
import {
  Chart,
  DoughnutController,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";
import { FaBookBookmark } from "react-icons/fa6";

Chart.register(
  DoughnutController,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Legend,
  Tooltip
);

const EducationSource = () => {
  const chartRef = useRef(null);
  const chartRefTherapy = useRef(null);
  const bulletChartRef = useRef(null);

  const chartIns = useRef(null);
  const chartInsTherapy = useRef(null);
  const bulletChartIns = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartIns.current) {
        chartIns.current.destroy();
      }

      chartIns.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Completed[70]", "Task remained[10]"],
          datasets: [
            {
              data: [70, 10],
              backgroundColor: ["#FBA834", "#387ADF"],
            },
          ],
        },
      });
    }
  }, []);

  useEffect(() => {
    if (chartRefTherapy.current) {
      const ctx = chartRefTherapy.current.getContext("2d");

      if (chartInsTherapy.current) {
        chartInsTherapy.current.destroy();
      }

      chartInsTherapy.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Courses[50]", "Completed[30]"],
          datasets: [
            {
              data: [50, 30],
              backgroundColor: ["#41B06E", "#F7C04A"],
            },
          ],
        },
      });
    }
  }, []);

  useEffect(() => {
    if (bulletChartRef.current) {
      const ctx = bulletChartRef.current.getContext("2d");

      if (bulletChartIns.current) {
        bulletChartIns.current.destroy();
      }

      bulletChartIns.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Progress"],
          datasets: [
            {
              label: "Target",
              data: [100],
              backgroundColor: "#E0E0E0",
              barThickness: 15,
            },
            {
              label: "Achieved",
              data: [70],
              backgroundColor: "#FF7043",
              barThickness: 15,
            },
          ],
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              max: 100,
              beginAtZero: true,
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h3 className="text-gray-700 text-3xl font-medium mb-6">
        Education Resources Dr. Smith!
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75 text-white">
              <FaGamepad size={24} />
            </div>
            <div className="ml-5">
              <h4 className="text-2xl font-semibold text-gray-700">8</h4>
              <div className="text-gray-500">Game</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-600 bg-opacity-75 text-white">
              <FaVideo size={24} />
            </div>
            <div className="ml-5">
              <h4 className="text-2xl font-semibold text-gray-700">3</h4>
              <div className="text-gray-500">Tutorials</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-pink-600 bg-opacity-75 text-white">
              <FaBookBookmark size={24} />
            </div>
            <div className="ml-5">
              <h4 className="text-2xl font-semibold text-gray-700">5</h4>
              <div className="text-gray-500">Books</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional charts for therapists */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <canvas ref={chartRef}></canvas>
          <div className="text-center text-gray-500 mt-2">weekly Progress</div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <canvas ref={chartRefTherapy}></canvas>
          <div className="text-center text-gray-500 mt-2">Course Progress</div>
        </div>
        <div className="bg-white text-purple-500 rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <canvas ref={bulletChartRef}></canvas>
          <div className="text-center text-gray-500 mt-2">Daily tasks</div>
        </div>
      </div>
    </div>
  );
};

export default EducationSource;
