import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaVideo,
  FaChartBar,
  FaUserMd,
  FaUsers,
  FaCog,
  FaCriticalRole,
  FaRegUser,
  FaList, 
  FaSearch
} from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { IoCaretDownSharp, IoPeople } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdOutlineDataset, MdOutlineDocumentScanner } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiCallBellBold } from "react-icons/pi";
import { SiArkecosystem, SiFiles, SiDatabricks } from "react-icons/si";
import { FiSettings } from 'react-icons/fi';
import { FaMessage } from 'react-icons/fa6';
export default function Sidebar({ userRole, setActiveComponent, setUserRole }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-64 bg-white bg-opacity-90 overflow-y-auto transition duration-200 ease-in-out">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-purple-600">Dashboard</h2>
        <button
          onClick={() =>
            setUserRole(userRole === "therapist" ? "admin" : "therapist")
          }
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition duration-200"
        >
          Switch to {userRole === "therapist" ? "Admin" : "Therapist"}
        </button>
      </div>
      <nav className="mt-8">
        {userRole === "therapist" ? (
          <>
            <a onClick={() => setActiveComponent('Searching')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaSearch className="mr-3" /> Searching
            </a>
            <a onClick={() => setActiveComponent('appointments')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaCalendarAlt className="mr-3" /> View Appointments
            </a>
            <a
              onClick={() => setActiveComponent("videoCall")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaVideo className="mr-3" /> Make Video Call
            </a>
            <a onClick={() => setActiveComponent('Patients')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaList className="mr-3" /> Patients List
            </a>
            <a onClick={() => setActiveComponent('Messages')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaMessage className="mr-3" /> Patients Messages
            </a>
            <a onClick={() => setActiveComponent('reports')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaChartBar className="mr-3" /> View Reports
            </a>
            <a onClick={() => setActiveComponent('Settings')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FiSettings className="mr-3" /> Setting
            </a>
          </>
        ) : (
          <>
            <a
              onClick={() => setActiveComponent("therapists")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaUserMd className="mr-3" /> View Therapists
            </a>
            <div className="relative">
              <a
                onClick={() => toggleDropdown("userManagement")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <FaRegUser className="mr-3 text-sm" /> User Management{" "}
                <GoChevronDown className="ml-1" />
              </a>

              {openDropdown === "userManagement" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("users")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1" />
                      User Acccount
                    </p>
                  </a>

                  <a
                    onClick={() => setActiveComponent("roles")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1 text-sm" />
                      Role and Permissions
                    </p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("feedback")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1 text-sm" />
                      User FeedBack
                    </p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("engagement")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1 text-sm" />
                      User Engagement
                    </p>
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                onClick={() => toggleDropdown("patientManagement")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <IoPeople className="mr-3" /> Patient Management{" "}
                <GoChevronDown className="ml-1" />
              </a>

              {openDropdown === "patientManagement" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("profile")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1" />
                      Patient Profile
                    </p>
                  </a>

                  <a
                    onClick={() => setActiveComponent("appointment")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1 text-sm" />
                      Appointments
                    </p>
                  </a>
                </div>
              )}
            </div>
            <a
              onClick={() => setActiveComponent("electronic health records")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <SiFiles className="mr-3" /> Electronic Health Records
            </a>
            <a
              onClick={() => setActiveComponent("communication")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <PiCallBellBold className="mr-3 text-xl" /> Communication
              Management
            </a>

            <div className="relative">
              <a
                onClick={() => toggleDropdown("system management")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <SiArkecosystem className="mr-3" /> System Management{" "}
                <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "system management" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("system management")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1" />
                      System Management
                    </p>
                  </a>

                  <a
                    onClick={() => setActiveComponent("system updates")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1 text-sm" />
                      System Updates and Maintenance
                    </p>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                onClick={() => toggleDropdown("Datamanagement")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <SiDatabricks className="mr-3" /> Data Management{" "}
                <GoChevronDown className="ml-1" />
              </a>

              {openDropdown === "Datamanagement" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("reports")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1" />
                      Data Reports
                    </p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("data security")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="mr-3" /> Data Security
                    </p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("data backup")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex">
                      <LuDot className="m-1 text-sm" />
                      Backup and Recovery
                    </p>
                  </a>
                </div>
              )}
            </div>
            <a
              onClick={() => setActiveComponent("financial")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaMoneyBillWave className="mr-3 text-2xl" /> Financial and
              Billing Management
            </a>

            <a
              onClick={() => setActiveComponent("ligal and complaint")}
              className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <p className="flex">
                <MdOutlineDocumentScanner className="m-1 text-xl" />
                Legal and Compliance
              </p>
            </a>
            <a
              onClick={() => setActiveComponent("settings")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaCog className="mr-3" /> Settings
            </a>
          </>
        )}
      </nav>
    </div>
  );
}
