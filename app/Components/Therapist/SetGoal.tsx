import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// Define the User interface
interface User {
  id: number;
  action: string;
  name: string;
  email: string;
  lastLogin: string;
  status: string;
}

export default function SetGoal() {
  // Initial list of users
  const initialUsers: User[] = [
    { id: 1, action: 'Visiting patients', name: "John Doe", email: "2024-07-10", status: "AHEAD", lastLogin: "2024-07-18" },
    { id: 2, action: "Testing patients", name: "Jane Smith", email: "2024-07-21", status: "ON TRACK", lastLogin: "2024-07-29" },
    { id: 3, action: "Checking patient and report", name: "Bob Johnson", email: "2024-08-11", status: "ENDING", lastLogin: "2024-08-01" },
  ];

  // State to manage the list of users and the user being edited or created
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({ id: 0, action: '', name: '', email: '', lastLogin: '', status: 'ON TRACK' });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to handle the "Edit" button click
  const handleEditClick = (user: User) => {
    setEditingUser(user);
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
    }
  };

  // Function to handle the "Add" button click
  const handleAddClick = () => {
    setNewUser({ id: users.length + 1, action: '', name: '', email: '', lastLogin: '', status: 'ON TRACK' });
    setIsModalOpen(true);
  };

  // Function to handle adding a new user
  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ id: 0, action: '', name: '', email: '', lastLogin: '', status: 'ON TRACK' });
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        onClick={handleAddClick}
      >
        Add New Action
      </button>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Responsible
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Starting Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Ending Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Change
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">{user.action}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{user.lastLogin}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{user.status}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <button
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-blue-50"
                  title="Edit" onClick={() => handleEditClick(user)}
                >
                  <FaEdit className="  bg-blue-500 text-white text-10" />
                </button>
                <button
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-red-50 ml-2"
                  title="Delete" onClick={() => handleDeleteClick(user.id)}
                >
                  <FaTrash className="bg-red-500 text-white text-10" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-xl font-semibold mb-2">Edit User</h3>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Action
                <input
                  type="text"
                  name="action"
                  value={editingUser.action}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Responsible
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
                Starting Date
                <input
                  type="date"
                  name="email"
                  value={editingUser.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Ending Date
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
          </form>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center height-100px">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Action</h3>
            <form onSubmit={handleAddUser}>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Action
                  <input
                    type="text"
                    name="action"
                    value={newUser.action}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Responsible
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
                  Starting Date
                  <input
                    type="date"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ending Date
                  <input
                    type="date"
                    name="lastLogin"
                    value={newUser.lastLogin}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Add Action
              </button>
              <button
                type="button"
                className="mt-2 ml-6 px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={() => setIsModalOpen(false)}
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
