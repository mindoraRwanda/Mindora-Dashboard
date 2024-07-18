import { FaCalendarAlt, FaVideo, FaChartBar, FaUserMd, FaUsers } from 'react-icons/fa';

export default function Sidebar({ userRole, setActiveComponent, setUserRole }) {
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
            <a onClick={() => setActiveComponent('appointments')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaCalendarAlt className="mr-3" /> View Appointments
            </a>
            <a onClick={() => setActiveComponent('videoCall')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaVideo className="mr-3" /> Make Video Call
            </a>
            <a onClick={() => setActiveComponent('reports')} className="flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer">
              <FaChartBar className="mr-3" /> View Reports
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
}