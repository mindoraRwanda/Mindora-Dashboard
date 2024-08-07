import React, { useState, ChangeEvent } from "react";
import { BiShow, BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import CreatePatient from "./AdminCreatePatient";
import { FiSearch } from "react-icons/fi";
import { message, Modal } from "antd";
import VideoCall from "../VideoCall";

export default function AdminPatientsList() {

  const initialPatients=[
    { id: 1, name: "John Doe", email: "john@example.com", gender:'Male', lastLogin: "2024-07-18" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", gender:'female',lastLogin: "2024-07-17" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", gender:'Male',lastLogin: "2024-07-16" },
  ];
  const [searchQuery,setSearchQuery]=useState("");
  const [isModalVisible,setIsModalVisible]=useState(false);
  const [filteredPatient, setFilteredPatient]=useState(initialPatients);
  const [patient, setPatient] = useState(initialPatients);
  const [isEditable,setIsEditable]=useState(false);
  const [selectedPatient,setSelectedPatient]=useState(null);


  // Function to handle the "Edit" button click
  const handleEditClick = (patient) => {
    setIsEditable(true);
    setSelectedPatient(patient);
    setIsModalVisible(true);
   
  };

  const handleSearch=(event)=>{
    const query=event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered=patient.filter(
   (patient)=>patient.name.toLocaleLowerCase().includes(query)||
              patient.email.toLocaleLowerCase().includes(query)
             );
    setFilteredPatient(filtered);
};

  const handleView =(patient)=>{
    setSelectedPatient(patient);
    setIsModalVisible(true);
    setIsEditable(false);
  };

  const handleCancel=()=>{
    setIsModalVisible(false);
  }

  const handleDelete=(patientId)=>{
    const confirmed=window.confirm('Do you want to delete patient ?');
    if(confirmed){
      const updatePatient= patient.filter((patient)=>patient.id !==patientId);
      setPatient(updatePatient);
      setFilteredPatient(updatePatient);
      message.success('Patient Deleted');
    };

  };

  const handleUpdate=(updatedPatient)=>{
    const updatedPatients=patient.map((patient)=>
    patient.id === updatedPatient.id ? updatedPatient:patient);

    setPatient(updatedPatients);
    setFilteredPatient(updatedPatients);
    setIsModalVisible(false);
    message.success("Updated successfully");
  };

  const addPatient=(newPatient)=>{
    newPatient.id=patient.length + 1;
    const UpdatedPatients= [...patient,newPatient];
    setPatient(UpdatedPatients);
    setFilteredPatient(UpdatedPatients);
    setIsModalVisible(false);
    message.success("New Patient Added Successfully"); 

  };
  const showModal = () => {
    setSelectedPatient(null);
    setIsEditable(true);
    setIsModalVisible(true);
  };
 



  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex justify-between mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-purple-600">List of Patients</h2>
      <div className="items-center border rounded bg-white flex float-right">
          <input
            type="text"
            name="query"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="rounded-l outline-none text-black m-3"
          />
          <button
            type="submit"
            className="p-2 text-xl text-black bg-white rounded-r"
          >
            <FiSearch />
          </button>
        </div>
        </div>
        <div className="flex float-right border-2 border-slate-300 rounded-md  mt-4">
        <a
          onClick={showModal}
          className=" bg-purple-600 font-bold p-2 px-2 cursor-pointer text-white rounded-md "
        >
          {" "}
          + Add New
        </a>
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Last Visit
            </th>
           
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredPatient.map((patient) => (
            <tr key={patient.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">{patient.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{patient.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{patient.gender}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{patient.lastLogin}</div>
              </td>
              
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="flex text-sm leading-5 text-gray-900">
                  <button
                    className="flex mr-2 bg-transparent rounded border-2 border-slate-300 font-semibold  p-1 text-black"
                    onClick={() => handleView(patient)}
                  >
                    <BiShow size={25} />
                    
                  </button>
                  <button
                    className="flex mr-2 text-blue-700 border-2 border-slate-300 p-1 rounded font-semibold"
                    onClick={() => handleEditClick(patient)}
                  >
                    <BiEditAlt size={25} />
                    
                  </button>
                  <button
                    className="flex mr-2 text-red-500 rounded  p-1 border-2 border-slate-300  font-semibold"
                    onClick={() => handleDelete(patient.id)}
                  >
                    <MdDelete size={25} />
                    
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<Modal visible={isModalVisible}  footer={null} onCancel={handleCancel}>
    
{selectedPatient ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {
                isEditable ? " Edit Patient " :" Patient Details "
              }
            </h2>
          
            <p className="text-black m-3">
              <span>Name:</span><br />
              <input type="text"  className="p-1 mt-2 rounded-md border-2 border-gray-300"
               value={selectedPatient.name}
               readOnly={!isEditable}
               onChange={(e)=>setSelectedPatient({...selectedPatient, name:e.target.value})}/>
            </p>
            <p className="text-black m-3">
              <span>Email:</span><br />

              <input type="email"  className="p-1 mt-2 rounded-md border-2 border-gray-300"
              value={selectedPatient.email}
              readOnly={!isEditable}
              onChange={(e)=>setSelectedPatient({...selectedPatient,email:e.target.value})}/>
            </p>
            
            <p className="text-black m-3 flex">
              <span>Last Login:</span>
             <p className="text-md font-semibold ml-2">
               {selectedPatient.lastLogin}
          </p>
            </p>
           
            {isEditable &&(
              <button onClick={()=>handleUpdate(selectedPatient)} className="text-center border-2 p-2 ml-3 rounded-md bg-red-600 text-white font-semibold">Update
              </button>
            )}
             <VideoCall/>
          </div>
        ) : (
          <CreatePatient addPatient={addPatient}/>
        )}
</Modal>
     
    </div>
  );
}
