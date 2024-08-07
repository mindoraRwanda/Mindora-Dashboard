'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import TopBar from '../Components/TopBar';
import Searching from '@/app/Components/SearchingPatient';
import AppointmentList from '../Components/AppointmentList';
import VideoCall from '../Components/VideoCall';
import Reports from '../Components/Reports';
import TherapistList from '../Components/TherapistList';
import UserList from '../Components/UserList';
import PatientsList from '@/app/Components/PatientsList';
import PatientMessages from '../Components/PatientMessages';
import TreatmentPlanupdate from '../Components/Therapist/TreatmentPlanupdate';
import SetGoal from '../Components/Therapist/SetGoal';
import TrackPatient from '../Components/Therapist/TrackPatient';
import Recommendations from '../Components/Therapist/Recommandation';
import PatientChart from '../Components/Therapist/PatientChart';
import SearchingPatient from '@/app/Components/SearchingPatient';
import ClinicRecord from '../Components/Therapist/ClinicRecord';
import PatientsSurvey from '../Components/Therapist/PatientsSurvey';
import Emergency from '../Components/Therapist/Emergency';

type UserRoleType = 'therapist' | 'admin';

interface UserRoleEnum {
  THERAPIST: UserRoleType;
  ADMIN: UserRoleType;
}

const UserRole: UserRoleEnum = {
  THERAPIST: 'therapist',
  ADMIN: 'admin'
};

const DashboardPage: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRoleType>(UserRole.THERAPIST);
  const [activeComponent, setActiveComponent] = useState<string>('appointments');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'emegency':
        return < Emergency/>
      case 'patients feedback':
        return < PatientsSurvey/>
      case'Record':
      return <ClinicRecord/>
      case 'Searching':
      return < SearchingPatient/>;
      case 'TreatmentPlan':
        return <TreatmentPlanupdate />;
        case 'SetGoal':
          return < SetGoal/>;
          case 'TrackPatient':
          return < TrackPatient/>;
          case 'Recommandation':
          return < Recommendations/>;
      case 'Searching':
        return <Searching />;
      case 'patientChat':
        return < PatientChart/>  
      case 'appointments':
        return <AppointmentList />;
      case 'videoCall':
        return <VideoCall />;
      case 'Patients':
        return <PatientsList />;
      case 'Messages':
        return <PatientMessages />;
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
    <div className={`flex h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 ${darkMode ? 'dark' : ''}`}>
      <Sidebar 
        userRole={userRole} 
        setActiveComponent={setActiveComponent} 
        setUserRole={setUserRole}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userRole={userRole} />
        <div className="">
          
        </div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:bg-gray-900 dark:text-white">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
