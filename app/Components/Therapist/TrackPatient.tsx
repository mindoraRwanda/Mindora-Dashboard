import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// Define the User interface
interface User {
  id: number;
  name: string;
  level: string;
  lastLogin: string;
}

export default function TrackPatient() {
  // Initial list of users
  const initialUsers: User[] = [
    { id: 1, name: "John Doe", level: "High level", lastLogin: "2024-07-18" },
    { id: 2, name: "Jane Smith", level: "Medium-Low level", lastLogin: "2024-07-17" },
    { id: 3, name: "Bob Johnson", level: "Medium level", lastLogin: "2024-07-16" },
  ];

  // State to manage the list of users, the user being edited, and modal visibility
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({ id: 0, name: '', level: '', lastLogin: '' });
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // Function to handle the "Edit" button click
  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  // Function to handle the "Delete" button click
  const handleDeleteClick = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Function to handle changes in the form inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  // Function to save the edited user details
  const handleSave = () => {
    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? editingUser : user)));
      setEditingUser(null);
      setIsEditModalOpen(false);
    }
  };

  // Function to handle the "Add" button click
  const handleAddClick = () => {
    setNewUser({ id: users.length + 1, name: '', level: '', lastLogin: '' });
    setIsAddModalOpen(true);
  };

  // Function to handle adding a new user
  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ id: 0, name: '', level: '', lastLogin: '' });
    setIsAddModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        onClick={handleAddClick}
      >
        Add New Patient
      </button>
      <table className="min-w-full mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Patient Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Patient Level
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{user.level}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{user.lastLogin}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <button
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-blue-50"
                  onClick={() => handleEditClick(user)}
                >
                  <FaEdit className="bg-blue-500 text-white text-10"/>
                </button>
                <button
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-red-50 ml-2"
                  onClick={() => handleDeleteClick(user.id)}
                >
                 <FaTrash className="bg-red-500 text-white text-10" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditModalOpen && editingUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edit Patient</h3>
            <form>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={editingUser.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Level
                  <input
                    type="text"
                    name="level"
                    value={editingUser.level}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Login
                  <input
                    type="date"
                    name="lastLogin"
                    value={editingUser.lastLogin}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
              <button
                type="button"
                className="mt-2 ml-2 px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Patient</h3>
            <form onSubmit={handleAddUser}>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Level
                  <input
                    type="text"
                    name="level"
                    value={newUser.level}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Add Patient
              </button>
              <button
                type="button"
                className="mt-2 ml-2 px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
