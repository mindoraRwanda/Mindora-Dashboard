import {
  FaCalendarAlt,
  FaVideo,
  FaChartBar,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { MdAddCircle } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Form, Image, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";

Chart.register(DoughnutController, ArcElement, Legend, Tooltip);

const list = [
  {
    id: 1,
    name: "Alice",
    role: "Cognitive Behavioral Therapy",
    phone:"+250 789897235",
    amount:"$20",
    lastmeet:"2024.08.12"
  
  },
 
  {
    id: 3,
    name: "Muvunyi",
    role: "Child Psychology",
    phone:"+250 789262736",
    amount:"$30",
    lastmeet:"2024.08.12"
   
  },
  { id: 4, name: "Placide", role: "Boy's Methal", phone:"+25 078432535",amount:"$100",lastmeet:"2024.08.12" },
];

const Home = ({ userRole }) => {
  const [visible,setVisible]=useState(false);
  const chartRef = useRef(null);
  const chartRefUser = useRef(null);
  const chartIns = useRef(null);
  const chartInsTherapy = useRef(null);
  const chartPat = useRef(null);
  const chartInsPat = useRef(null);

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
              backgroundColor: ["#41B06E", "#F7C04A"],
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
              backgroundColor: ["#FBA834", "#387ADF"],
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

  // this is for modal

  const handleModal=()=>{
    setVisible(true);
  }
const hanleCancelModal=()=>{
  setVisible(false);
}
  return (
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
            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ">
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

            <div className="flex gap-7 mt-4">
              <div className="border px-11 border-gray-400 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer duration-300 float-start h-fit pb-2">
                <p className="text-black font-semibold text-2xl text-center my-3">
                  User Categories
                </p>
                <canvas ref={chartRef}></canvas>
              </div>
              <div className="border px-11 border-gray-400 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer duration-300 float-start h-fit pb-2">
                <p className="text-black font-semibold text-2xl text-center my-3">
                  Therapy Categories
                </p>
                <canvas ref={chartIns}></canvas>
              </div>
              <div className="border px-11 border-gray-400 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer duration-300 float-start h-fit pb-2">
                <p className="text-black font-semibold text-2xl text-center my-3">
                  Patient Categories
                </p>
                <canvas ref={chartPat}></canvas>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Move Recent Events and Upcoming Events to below the other content */}
      {userRole === "admin" && (
              <div className="flex gap-7 mt-8">
                <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1  w-3/5">
                  <h4 className="text-2xl font-semibold text-purple-600 mb-4">Recent Convesations</h4>
                 <table className="min-w-full">
                  <thead>
                    <tr className="gap-5">
                      <th className="text-black capitalize text-xs leading-5 text-left border-b-2 border-gray-300 px-5 py-2 ">name</th>
                      <th className="text-black capitalize text-xs leading-5 text-left border-b-2 border-gray-300 px-5 py-2"> Role</th>
                      <th className="text-black capitalize text-xs leading-5 text-left border-b-2 border-gray-300 px-5 py-2">recent date  </th>
                    </tr>
                  </thead>
                  <tbody>
                  {list.map((list)=>(
                    <tr key={list.id}>
                       <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {list.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {list.role}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {list.lastmeet}
                </div>
              </td> </tr>
                  )

                  )}
                  </tbody>
                 </table>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 w-2/5">
                  <h4 className="text-2xl font-semibold text-purple-600 mb-4">Upcoming Meetings</h4>
                 <div className="text-black border border-gray-300 m-5 p-2 rounded">
                  <strong>Boy Mental therapy:: Placide</strong><br />
                  <p className="leading-3 capitalize my-2">To day at:2:00 - 3:00</p>
                  <p className="leading-3 capitalize my-2">@ meet.google.mxz</p>
                 </div>
                 <div className="text-black border border-gray-300 m-5 p-2 rounded">
                  <strong>Family therapy:: Alice</strong><br />
                  <p className="leading-3 capitalize my-2">Tomorrow at:17:00 - 19:00</p>
                  <p className="leading-3 capitalize my-2">@ meet.google.mxz</p>
                 </div>
                 <button className="text-white bg-purple-600 border border-gray-300 rounded px-3 mr-4 py-1 flex float-right" onClick={handleModal}><MdAddCircle size={24}/>Add</button>
                </div>

               
                <Modal title="Add the Upcoming Event" visible={visible} onCancel={hanleCancelModal} footer={null}>
                
                  <Form>
                    <FormItem name="Name" label="Name:" rules={[{required:true}]}>
                      <Input placeholder="Enter name"/>
                    </FormItem><br />
               
                    <FormItem name="Phone No:" label="Phone" rules={[{required:true}]}>
                      <Input placeholder="Enter phone number"/>
                    </FormItem><br />
                   
                    <FormItem name="Time" label="Time:" rules={[{required:true}]}>
                      <Input placeholder="Enter Time it will occur"/>
                    </FormItem><br />

                    <FormItem name="Link" label="Link:" rules={[{required:true}]}>
                      <Input placeholder="Enter Link will be Used "/>
                    </FormItem><br />
                    </Form>
                    <div className="flex justify-center mt-4">
                    <button className="text-white bg-purple-600 border border-gray-300 px-2 py-1 rounded items-center flex"><MdAddCircle size={24}/>Add</button>
                    </div>
                    </Modal>
              </div>
              
            )}

                   {userRole==="admin"&&(
                     <div className="flex gap-7 mt-8">
                    <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1  w-4/6">
                    <h4 className="text-2xl font-semibold text-purple-600 mb-4">Payment Management</h4>
                    <p className="text-black text-lg my-4 font-semibold"> Recent Payroll</p>

                  <table className="min-w-full">
                    <thead >
                      <tr className="gap-5 border-b-2 border-gray-300 px-5 py-2">
                        <th className="text-black capitalize text-xs leading-5 text-left  ">Patient Name</th>
                        <th className="text-black capitalize text-xs leading-5 text-left px-5 py-2 flex float-right">Amount Payed</th>
                      </tr>
                    </thead>
                    <tbody>
                  {list.map((list)=>(
                  <tr key={list.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {list.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900 flex float-right">
                  {list.amount}
                </div>
              </td>
              </tr>
              ))}

              </tbody>
                  </table>
                   
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 w-2/6 ">
                    <h4 className="text-2xl font-semibold text-purple-600 mb-4">Payment System</h4>
                    <div className="border border-gray-300 rounded">
                      <div className="flex">
                      <div>
                      <Image src="/Images/momo.jpg" alt="momo" width={70} height={73} className="rounded"/>
                      </div>
                      <div>
                      <p className="px-2 text-xl text-black m-1">Payed with Mobile Money</p>
                      <p className="text-black text-xl font-semibold ml-2">+25 0789897235</p>
                      </div>
                      </div>
                      <strong className="text-black text-md font-sans text-center"> Total Amount: $100</strong>
                    </div>
                  
                    <div className="border border-gray-300 rounded mt-8">
                      <div className="flex">
                      <div>
                      <Image src="/Images/paypal.png" alt="paypal" width={70} height={73} className="rounded"/>
                      </div>
                      <div>
                      <p className="px-2 text-xl text-black m-1">Payed with PayPal</p>
                      <p className="text-black text-xl font-semibold ml-2">1122363674674376</p>
                      </div>
                      </div>
                      <strong className="text-black text-md font-sans text-center"> Total Amount: $50</strong>
                    </div>
                    </div>
                    </div>
                )}
              
    </div>
  );
};

export default Home;
