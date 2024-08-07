import { useState, ChangeEvent } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  lastLogin: string;
}

export default function SearchingPatient() {
  // Initial list of users defined inside the component
  const users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", lastLogin: "2024-07-18" },
    { id: 2, name: "Jane Smith", email: "jone@example.com", lastLogin: "2024-07-20" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", lastLogin: "2024-07-21" },
  ];

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Function to handle changes in the search input field
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter users based on the search query (case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastLogin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" rounded-lg  p-3">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-2 p-1 border border-gray-300 rounded-lg w-full text-black"
      />
      
      {/* Conditionally render the table only if the search query is not empty */}
      {searchQuery ? (
        filteredUsers.length > 0 ? (
          <table className="min-w-full">
            <tbody>
              {/* Map over the filteredUsers array to display each user */}
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-3 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-3 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-3 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-gray-900">{user.lastLogin}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )
      ) : null}
    </div>
  );
}
