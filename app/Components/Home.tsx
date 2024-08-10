import {
  FaCalendarAlt,
  FaVideo,
  FaChartBar,
  FaUserMd,
  FaUsers,
  FaHome,
} from "react-icons/fa";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(DoughnutController, ArcElement, Legend, Tooltip);

const Home = ({ userRole }) => {

  const chartRef = useRef(null);
  const chartRefUser=useRef(null);

  const chartIns = useRef(null);
  const chartInsTherapy= useRef(null);

  const chartPat = useRef(null);
  const chartInsPat= useRef(null);

  useEffect(() => {
    if (chartIns.current) {
      const ctx = chartIns.current.getContext("2d");

      if (chartInsTherapy.current) {
        chartInsTherapy.current.destroy();
      }

      chartInsTherapy.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Female[70]", "Male[10]"],
          datasets: [
            {
              data: [70, 10],
              backgroundColor: ["#FBA834", "#387ADF"],
            },
          ],
        },
      });
    }
  });


  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRefUser.current) {
        chartRefUser.current.destroy();
      }

      chartRefUser.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Female[50]", "Male[30]"],
          datasets: [
            {
              data: [50, 30],
              backgroundColor: ["#41B06E", "#F7C04A"],
            },
          ],
        },
      });
    }
  });
  useEffect(() => {
    if (chartPat.current) {
      const ctx = chartPat.current.getContext("2d");

      if (chartInsPat.current) {
        chartInsPat.current.destroy();
      }

      chartInsPat.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Female[10]", "Male[40]"],
          datasets: [
            {
              data: [10, 40],
              backgroundColor: ["#41B06E", "#387ADF"],
            },
          ],
        },
      });
    }
  });

  return (
    // This is for Therapiest

    <div className="container mx-auto px-6 py-8">
      <h3 className="text-gray-700 text-3xl font-medium mb-6">
        Welcome back, {userRole === "therapist" ? "Dr. Smith" : "Admin"}!
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userRole === "therapist" ? (
          <>
            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75 text-white">
                  <FaCalendarAlt size={24} />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-semibold text-gray-700">8</h4>
                  <div className="text-gray-500">New Appointments</div>
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
                  <div className="text-gray-500">Upcoming Video Calls</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-pink-600 bg-opacity-75 text-white">
                  <FaChartBar size={24} />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-semibold text-gray-700">5</h4>
                  <div className="text-gray-500">New Reports</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 
          This is for Admin */}

            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-orange-600 bg-opacity-75 text-white">
                  <FaUserMd size={24} />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-semibold text-gray-700">15</h4>
                  <div className="text-gray-500">Total Therapists</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-600 bg-opacity-75 text-white">
                  <FaUsers size={24} />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-semibold text-gray-700">150</h4>
                  <div className="text-gray-500">Total Users</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-600 bg-opacity-75 text-white">
                  <FaUsers size={24} />
                </div>
                <div className="ml-5">
                  <h4 className="text-2xl font-semibold text-gray-700">300</h4>
                  <div className="text-gray-500">Total Patients</div>
                </div>
              </div>
            </div>
       <div className="flex gap-7 mt-4 ">
            <div className="border px-11 border-gray-400 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer duration-300  float-start h-fit  pb-2">
              <p className="text-black font-semibold text-2xl text-center my-3">
                User Categories
              </p>
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="border px-11 border-gray-400 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer duration-300  float-start h-fit  pb-2">
              <p className="text-black font-semibold text-2xl text-center my-3">
                Therapy Categories
              </p>
              <canvas ref={chartIns}></canvas>
            </div>
            <div className="border px-11 border-gray-400 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer duration-300  float-start h-fit  pb-2">
              <p className="text-black font-semibold text-2xl text-center my-3">
                Patient Categories
              </p>
              <canvas ref={chartPat}></canvas>
            </div>
            </div>
          </>
        )}
      </div>

      {/* Additional content can be added here */}
    </div>
  );
};

export default Home;
