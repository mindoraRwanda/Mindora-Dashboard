/* eslint-disable @next/next/no-img-element */
import { Modal } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineMessage, MdNotificationsNone } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";
import Profile from "@/app/Components/Therapist/images/profile.jpeg";
import { useTranslation } from 'react-i18next';
import TranslationProvider from "../dashboard/translationProvider";

export default function TopBar({ userRole, items = [], onSearch }) {
  const { t, i18n } = useTranslation(); 
  const [filteredItems, setFilteredItems] = useState(items);
  const [calendarModal, setCalendarModal] = useState(false);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const router = useRouter();
  
  const handleLogout = () => {
    router.push("/");
  };

  const handleModal = () => {
    setCalendarModal(true);
  };


  // Example user object for demonstration purposes
  const user = {
    name: "John Doe",
    profilePhoto: "/images/profile.jpeg" // Make sure this path is correct
  };
  const handleCancel = () => {
    setCalendarModal(false);
  };
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage).then(() => {
      setFilteredItems([...filteredItems]); // Force re-render by updating state
    });
  };
  
  

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className=" lg:text-2xl font-semibold text-purple-600 sm:text-sm md:text-sm">
          {userRole === "therapist" ? t('therapist_dashboard') : t('admin_dashboard')}
        </h1>

        <div className="flex gap-4 items-center">
          <div className="text-gray-600 text-xl">
            <select
              id="languageSelect"
              className="form-select p-1 rounded border-2 border-gray-100"
              aria-label="Default select example"
              onChange={handleLanguageChange} 
            >
              <option value="en">English</option>
              <option value="kin">Kinyarwanda</option>
            </select>
          </div>


          {/* Icons and Buttons */}
          <button className="text-purple-600 mx-3" onClick={handleModal}>
            <IoCalendarNumber size={32} />
          </button>
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <MdOutlineMessage className="text-3xl ml-5 text-purple-600" />
          </a>

          <a href="#" data-bs-toggle="dropdown">
            <MdNotificationsNone className="text-3xl ml-5 text-purple-600" />
          </a>
      {/* Profile Section */}
      <div className="flex items-center gap-2">
            <img
              src={user.profilePhoto}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700 font-medium">{user.name}</span>
          </div>
          <button
            onClick={handleLogout}
            className="ml-5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-200"
          >
      {t('logout')}
          </button>
        </div>
      </div>

      <Modal
          title="Calendar"
        footer={null}
        visible={calendarModal}
        onCancel={handleCancel}
        className="text-center"
      >
             <div className="flex justify-center">
                 <Calendar onChange={onChange} value={value} />
             </div>
        </Modal>
    </header>
  );
}
