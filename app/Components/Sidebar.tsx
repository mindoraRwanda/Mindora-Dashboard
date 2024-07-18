import { FaCalendarAlt, FaVideo, FaChartBar, FaUserMd, FaUsers, FaHome } from 'react-icons/fa';

const Sidebar = ({ userRole, setActiveComponent, setUserRole }) => {
  return (
    <div className="fixed inset-y-0 left-0 transform translate-x-0 w-64 bg-white bg-opacity-90 overflow-y-auto transition duration-200 ease-in-out z-10 md:relative md:translate-x-0">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-purple-600">Dashboard</h2>
        <button onClick={() => setUserRole(userRole === 'therapist' ? 'admin' : 'therapist')} className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition duration-200">
          Switch to {userRole === 'therapist' ? 'Admin' : 'Therapist'}
        </button>
      </div>
      <nav className="mt-8">
        <a onClick={() => setActiveComponent('home')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
          <FaHome className="mr-3" /> Home
        </a>
        {userRole === 'therapist' ? (
          <>
            <a onClick={() => setActiveComponent('appointments')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaCalendarAlt className="mr-3" /> View Appointments
            </a>
            <a onClick={() => setActiveComponent('videoCall')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaVideo className="mr-3" /> Make Video Call
            </a>
            <a onClick={() => setActiveComponent('reports')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaChartBar className="mr-3" /> View Reports
            </a>
          </>
        ) : (
          <>
            <a onClick={() => setActiveComponent('therapists')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaUserMd className="mr-3" /> View Therapists
            </a>
            <a onClick={() => setActiveComponent('users')} className="cursor-pointer flex items-center px-6 py-3 text-gray-700 hover:bg-purple-100 transition duration-200">
              <FaUsers className="mr-3" /> View Users
            </a>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
