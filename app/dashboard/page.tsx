'use client';

import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import TopBar from '../Components/TopBar';
import AppointmentList from '../Components/AppointmentList';
import VideoCall from '../Components/VideoCall';
import Reports from '../Components/Reports';
import TherapistList from '../Components/TherapistList';
import UserList from '../Components/UserList';

const UserRole = {
  THERAPIST: 'therapist',
  ADMIN: 'admin'
};

export default function DashboardPage() {
  const [userRole, setUserRole] = useState(UserRole.THERAPIST);
  const [activeComponent, setActiveComponent] = useState('appointments');

  const renderComponent = () => {
    switch(activeComponent) {
      case 'appointments':
        return <AppointmentList />;
      case 'videoCall':
        return <VideoCall />;
      case 'reports':
        return <Reports />;
      case 'therapists':
        return <TherapistList />;
      case 'users':
        return <UserList />;
      default:
        return <AppointmentList />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Sidebar 
        userRole={userRole} 
        setActiveComponent={setActiveComponent} 
        setUserRole={setUserRole}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userRole={userRole} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-purple-100 to-pink-100 p-6">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}