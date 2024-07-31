import React from 'react';
import { FaCalendarAlt, FaVideo, FaChartBar, FaUserMd, FaUsers, FaList, FaSearch } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { FiSettings } from 'react-icons/fi';

interface SidebarProps {
  userRole: 'therapist' | 'admin';
  setActiveComponent: (component: string) => void;
  setUserRole: (role: 'therapist' | 'admin') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole, setActiveComponent, setUserRole }) => {
  return (
    <div className="w-64 bg-white bg-opacity-90 overflow-y-auto transition duration-200 ease-in-out">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-purple-600">Dashboard</h2>
        <button 
          onClick={() => setUserRole(userRole === 'therapist' ? 'admin' : 'therapist')} 
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition duration-200"
        >
          Switch to {userRole === 'therapist' ? 'Admin' : 'Therapist'}
        </button>
      </div>
      <nav className="mt-8">
        {userRole === 'therapist' ? (
          <>
            <a onClick={() => setActiveComponent('Searching')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaSearch className="mr-3" /> Searching
            </a>
            <a onClick={() => setActiveComponent('appointments')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaCalendarAlt className="mr-3" /> View Appointments
            </a>
            <a onClick={() => setActiveComponent('videoCall')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
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
            <a onClick={() => setActiveComponent('therapists')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaUserMd className="mr-3" /> View Therapists
            </a>
            <a onClick={() => setActiveComponent('users')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaUsers className="mr-3" /> View Users
            </a>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
