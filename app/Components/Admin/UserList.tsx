import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiShow,BiEditAlt  } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { message } from "antd";

export default function UserList({setActiveComp}) {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      lastLogin: "2024-07-18",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      lastLogin: "2024-07-17",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      lastLogin: "2024-07-16",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Handle search input and filter users based on name or email
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };
  const handleView=()=>{
    message.info('This is not done yet');
  };
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Users</h2>
        <div className="items-center border rounded bg-white flex float-right">
          <input
            type="text"
            name="query"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="rounded-l outline-none text-black m-3"
          />
          <button type="submit" className="p-2 text-xl text-black bg-white rounded-r">
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="flex float-right border-2 border-slate-300 rounded mt-4">

<a onClick={()=>setActiveComp('Create_User')}  className=" text-purple-600 font-bold p-2 px-2 cursor-pointer"> + Add New</a>

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
              Last Login
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  {user.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">
                  {user.email}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">
                  {user.lastLogin}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="flex text-sm leading-5 text-gray-900">
                  <button className="flex mr-2 bg-transparent rounded border-2 border-slate-300 font-semibold  p-1 text-black" onClick={handleView}><BiShow size={20}/>Show</button>
                  <button className="flex mr-2 text-blue-700 border-2 border-slate-300 p-1 rounded font-semibold" onClick={handleView}><BiEditAlt size={20}/>Edit</button>
                  <button className="flex mr-2 text-red-500 rounded  p-1 border-2 border-slate-300  font-semibold" onClick={handleView}><MdDelete size={20}/>Delete</button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
