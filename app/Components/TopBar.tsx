import { Modal } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineMessage, MdNotificationsNone } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function TopBar({ userRole, items = [], onSearch }) {
  
  const [filteredItems, setFilteredItems] = useState(items);
  const [calendarModal,setCalendarModal]=useState(false);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
const handleModal=()=>{
  setCalendarModal(true);
};

const handleCancel=()=>{
  setCalendarModal(false);
};

 

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-purple-600">
          {userRole === "therapist" ? "Therapist Dashboard" : "Admin Dashboard"}
        </h1>

        <div className="flex gap-1">
          
          <div className="text-gray-600 text-xl">
            <select
              id="languageSelect"
              className="form-select p-1 rounded border-2 border-gray-100"
              aria-label="Default select example"
            >
              <option>English</option>
              <option>French</option>
              <option>Kinyarwanda</option>
            </select>
          </div>

          <div className="flex items-center">
          
          <button className=" text-purple-600 mx-3" onClick={handleModal}><IoCalendarNumber size={32}/></button>
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <MdOutlineMessage className="text-3xl ml-5 text-purple-600" />
            </a>

            <a href="#" data-bs-toggle="dropdown">
              <MdNotificationsNone className="text-3xl ml-5 text-purple-600" />
            </a>

            <button
              onClick={handleLogout}
              className="ml-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    <Modal title="Calendar" footer={null} visible={calendarModal} onCancel={handleCancel} className="text-center">
   <div className="flex justify-center">
   <Calendar onChange={onChange} value={value} />
   </div>
    </Modal>
    </header>
  );
}
