import React, { useState, ChangeEvent } from "react";

// Define the User interface
interface User {
  id: number;
  name: string;
  email: string;
  lastLogin: string;
}

export default function UserList() {
  // Initial list of users
  const initialUsers: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", lastLogin: "2024-07-18" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", lastLogin: "2024-07-17" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", lastLogin: "2024-07-16" },
  ];

  // State to manage the list of users and the user being edited
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Function to handle the "Edit" button click
  const handleEditClick = (user: User) => {
    setEditingUser(user);
  };

  // Function to handle changes in the form inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    }
  };

  // Function to save the edited user details
  const handleSave = () => {
    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? editingUser : user)));
      setEditingUser(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
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
              Last Login
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
                <div className="text-sm leading-5 text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{user.lastLogin}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <button
                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-blue-50"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
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
                Email
                <input
                  type="email"
                  name="email"
                  value={editingUser.email}
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
    </div>
  );
}
