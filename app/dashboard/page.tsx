"use client";

import { useState, useEffect } from 'react';
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import Home from "../Components/Home";
import AppointmentList from "../Components/AppointmentList";
import VideoCall from "../Components/VideoCall";
import Reports from '../Components/Reports';
import AdminTherapistList from "../Components/Admin/AdminTherapistList";
import AdminUserList from "../Components/Admin/AdminUserList";
import Roles from "../Components/Admin/Roles";
import FeedBack from "../Components/Admin/Feedback";
import Engagement from "../Components/Admin/Engagement";
import Profile from "../Components/Admin/Patient_Profile";
import Appointments from "../Components/Admin/Appointment";
import Electronic from "../Components/Admin/Electronic";
import Communication from "../Components/Admin/Communication";
import System_Manage from "../Components/Admin/System_Manage";
import Systen_Updates from "../Components/Admin/System_Update";
import Data_Security from "../Components/Admin/Data_Security";
import DataBackup from "../Components/Admin/Data_Backup";
import Fincancial from "../Components/Admin/Financial";
import Legal from "../Components/Admin/Legal";
import Settings from "../Components/Admin/Settings";
import PatientsList from '../Components/PatientsList';
import AdminPatientsList from '../Components/Admin/AdminPatientsList';
import PatientMessages from '../Components/PatientMessages';
import Create_Therapy from '../Components/Admin/Create_Therapy';
import Create_User from '../Components/Admin/Create_User';
import CreatePatient from '../Components/Admin/AdminCreatePatient';
import TreatmentPlanupdate from '../Components/Therapist/TreatmentPlanupdate';
import SetGoal from '../Components/Therapist/SetGoal';
import TrackPatient from '../Components/Therapist/TrackPatient';
import Recommendations from '../Components/Therapist/Recommandation';
import PatientChart from '../Components/Therapist/PatientChart';
import SearchingPatient from '@/app/Components/SearchingPatient';
import ClinicRecord from '../Components/Therapist/ClinicRecord';
import PatientsSurvey from '../Components/Therapist/PatientsSurvey';
import Emergency from '../Components/Therapist/Emergency';

const UserRole = {
  THERAPIST: "therapist",
  ADMIN: "admin",
};

export default function DashboardPage() {
  const [userRole, setUserRole] = useState(UserRole.THERAPIST);
  const [activeComponent, setActiveComponent] = useState("home");

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
     
      case 'patientChat':
        return < PatientChart/>  
      case 'appointments':
        return <AppointmentList />;
      case "videoCall":
        return <VideoCall />
      case 'Patients':
        return <PatientsList />;
      case 'Messages':
        return <PatientMessages />;
      case 'reports':
        return <Reports />;

      case "therapists":
        return <AdminTherapistList setActiveComponent={setActiveComponent} />;

      case "users":
        return <AdminUserList setActiveComp={setActiveComponent} />;
        
     
      case "roles":
        return <Roles />;
      case "feedback":
        return <FeedBack />;
      case "engagement":
      return <Engagement />;
      case 'Patient list':
        return <AdminPatientsList/>;
      case 'appointment':
        return <Appointments/>
      case 'electronic health records':
        return <Electronic/>
      case 'communication':
        return <Communication/>
      case 'system management':
        return <System_Manage/>
      case 'system updates':
        return <Systen_Updates/>
      case 'data security':
        return <Data_Security/>
        case 'data backup':
          return <DataBackup/>
        case 'financial':
          return <Fincancial/>
        case 'ligal and complaint':
          return <Legal/>
        case 'settings':
          return <Settings/>
          case "Create_User":
            return <Create_User/>
        case 'Create_Therapy':
        return <Create_Therapy/> 
        case 'Create Patient':
          return <CreatePatient/>

      default:
        return <Home userRole={userRole} />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 ">
      <Sidebar 
        userRole={userRole} 
        setActiveComponent={setActiveComponent} 
        setUserRole={setUserRole}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userRole={userRole} />
       
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:bg-gray-900 dark:text-white">
          {renderComponent()}
        </main>
      </div>
    </div>
   
  );
};

    