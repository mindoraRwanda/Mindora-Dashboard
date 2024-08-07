import React, { useState } from "react";

import {
  FaCalendarAlt,
  FaVideo,
  FaChartBar,
  FaUserMd,
  FaUsers,
  FaHome,
  FaCog,
  FaCriticalRole,
  FaRegUser,
  FaList,
  FaReadme,
  FaFileInvoice,
  FaResearchgate,
  FaTemperatureHigh,
  FaSearch,
  FaMoneyBillWave
} from "react-icons/fa";
import { FaBarsProgress, FaHouseMedicalCircleCheck, FaKitMedical, FaNotesMedical, FaRecordVinyl, FaRegFaceSurprise } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { IoCaretDownSharp, IoPeople } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdOutlineDataset, MdOutlineDocumentScanner, MdOutlineMessage, MdOutlineSettings } from "react-icons/md";
import { PiCallBellBold } from "react-icons/pi";
import { SiArkecosystem, SiFiles, SiDatabricks } from "react-icons/si";

export default function Sidebar({ userRole, setActiveComponent, setUserRole }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="fixed inset-y-0 left-0 transform translate-x-0 w-64 bg-white bg-opacity-90 overflow-y-auto transition duration-200 ease-in-out z-10 md:relative md:translate-x-0">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-purple-600">Dashboard</h2>
        <button
          onClick={() => setUserRole(userRole === "therapist" ? "admin" : "therapist")}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition duration-200"
        >
          Switch to {userRole === "therapist" ? "Admin" : "Therapist"}
        </button>
      </div>
      <nav className="mt-8">
        <a onClick={() => setActiveComponent('home')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
          <FaHome className="mr-3" /> Home
        </a>
        {userRole === "therapist" ? (
          <>
            <a onClick={() => setActiveComponent("appointments")} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaCalendarAlt className="mr-3" /> View Appointments
            </a>
            <a onClick={() => setActiveComponent("videoCall")} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaVideo className="mr-3" /> Make Video Call
            </a>
            <a
              onClick={() => setActiveComponent('Patients')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaList className="mr-3" /> Patients List
            </a>
            <a onClick={() => setActiveComponent('Messages')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <MdOutlineMessage className="mr-3" /> Patients Messages
            </a>
            <a
              onClick={() => setActiveComponent('reports')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaChartBar className="mr-3" /> View Reports
            </a>
            <a onClick={() => setActiveComponent('settings')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <MdOutlineSettings className="mr-3" /> Setting
            </a>
            <a
              onClick={() => setActiveComponent('Record')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaReadme className="mr-3" /> Education Resources
            </a>
            <a
              onClick={() => setActiveComponent('Record')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaRegFaceSurprise className="mr-3" /> Referral and Collaboration
            </a>
            <a
              onClick={() => setActiveComponent('Record')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaFileInvoice className="mr-3" /> Billing and Insurance
            </a>
            <a
              onClick={() => setActiveComponent('patients feedback')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaResearchgate className="mr-3" /> Patients Feedback
            </a>
            <a
              onClick={() => setActiveComponent('emergency')}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaTemperatureHigh className="mr-3" /> Emergency
            </a>
            <div className="relative">
              <a
                onClick={() => toggleDropdown("Notification")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <PiCallBellBold className="mr-3" /> Notification <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "Notification" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("SendNotification")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1" />Send Notification</p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("ViewNotification")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1 text-sm" /> View Notification</p>
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <a
                onClick={() => toggleDropdown("TherapistManagement")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <FaUsers className="mr-3" /> Therapist Management <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "TherapistManagement" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("Create and Update")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1" />Create and Update</p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("Schedules")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1 text-sm" /> Schedules</p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("Availability")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1 text-sm" /> Availability</p>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                onClick={() => toggleDropdown("PatientManagement")}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
              >
                <FaRegUser className="mr-3" /> Patient Management <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "PatientManagement" && (
                <div className="ml-6">
                  <a
                    onClick={() => setActiveComponent("ManageProfile")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1" />Manage Profile</p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("RequestHistory")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1 text-sm" /> Request History</p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("AppointmentDetails")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1 text-sm" /> Appointment Details</p>
                  </a>
                  <a
                    onClick={() => setActiveComponent("Patient Notes")}
                    className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
                  >
                    <p className="flex"><LuDot className="m-1 text-sm" /> Patient Notes</p>
                  </a>
                </div>
              )}
            </div>
            <a
              onClick={() => setActiveComponent("manageFinance")}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer"
            >
              <FaMoneyBillWave className="mr-3" /> Manage Finance
            </a>
            <div className="relative">
              <a onClick={() => toggleDropdown("userManagement")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                <FaRegUser className="mr-3 text-sm" /> User Management <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "userManagement" && (
                <div className="ml-6">
                  <a onClick={() => setActiveComponent("users")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1" /> User Account</p>
                  </a>
                  <a onClick={() => setActiveComponent("roles")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> Role and Permissions</p>
                  </a>
                  <a onClick={() => setActiveComponent("feedback")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> User Feedback</p>
                  </a>
                  <a onClick={() => setActiveComponent("engagement")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> User Engagement</p>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <a onClick={() => toggleDropdown("patientManagement")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                <IoPeople className="mr-3" /> Patient Management <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "patientManagement" && (
                <div className="ml-6">
                  <a onClick={() => setActiveComponent("profile")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1" /> Patient Profile</p>
                  </a>
                  <a onClick={() => setActiveComponent("appointment")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> Appointments</p>
                  </a>
                </div>
              )}
            </div>
            <a onClick={() => setActiveComponent("electronic health records")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <SiFiles className="mr-3" /> Electronic Health Records
            </a>
            <a onClick={() => setActiveComponent("communication")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <PiCallBellBold className="mr-3 text-xl" /> Communication Management
            </a>
            <div className="relative">
              <a onClick={() => toggleDropdown("systemManagement")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                <SiArkecosystem className="mr-3" /> System Management <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "systemManagement" && (
                <div className="ml-6">
                  <a onClick={() => setActiveComponent("system management")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1" /> System Management</p>
                  </a>
                  <a onClick={() => setActiveComponent("system updates")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> System Updates and Maintenance</p>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <a onClick={() => toggleDropdown("dataManagement")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                <SiDatabricks className="mr-3" /> Data Management <GoChevronDown className="ml-1" />
              </a>
              {openDropdown === "dataManagement" && (
                <div className="ml-6">
                  <a onClick={() => setActiveComponent("reports")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1" /> Data Reports</p>
                  </a>
                  <a onClick={() => setActiveComponent("data security")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> Data Security</p>
                  </a>
                  <a onClick={() => setActiveComponent("data backup")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
                    <p className="flex"><LuDot className="m-1 text-sm" /> Backup and Recovery</p>
                  </a>
                </div>
              )}
            </div>
            <a onClick={() => setActiveComponent("financial")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaMoneyBillWave className="mr-3 text-2xl" /> Financial and Billing Management
            </a>
            <a onClick={() => setActiveComponent("legal and compliance")} className="block px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <p className="flex"><MdOutlineDocumentScanner className="m-1 text-xl" /> Legal and Compliance</p>
            </a>
            <a onClick={() => setActiveComponent("settings")} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaCog className="mr-3" /> Settings
            </a>
           
          </>
        )}
      </nav>
    </div>
  );
}
