import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiShow, BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { message, Modal } from "antd";
import Create_User from "./Create_User";

export default function AdminUserList({ setActiveComp }) {
  const initialsUser = [
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(initialsUser);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users,setUsers]=useState(initialsUser);
  const [isEditable,setIsEditable]=useState(false);

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
  const handleView = (user) => {
    setSelectedUser(user);
    setIsEditable(false);
    setIsModalVisible(true);
  };

  const showModal = () => {
    setSelectedUser(null);
    setIsEditable(true);
    setIsModalVisible(true);
  };

  const handleEdit=(user)=>{
    setSelectedUser(user);
    setIsEditable(true);
    setIsModalVisible(true);
  };
  const handleDelete=(userId)=>{
    const updateUsers = users.filter((user)=>user.id !== userId);
    setUsers(updateUsers);
    setFilteredUsers(updateUsers);
    message.success("User Deleted SuccessFully");

  };

  const handleUpdate=(updateUser)=>{
    const updateUsers=users.map((user)=>
    user.id === updateUser.id ? updateUser:user);

    setUsers(updateUsers);
    setFilteredUsers(updateUsers);
    setIsModalVisible(false);
    message.success("updated user Successfully");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleBlock=()=>{
    message.info('You will block User');
  };

  const addUser=(newUser)=>{
    newUser.id=users.length+1;
    setUsers([...users,newUser]);
    setFilteredUsers([...users,newUser]);
    setIsModalVisible(false);
    message.success("New User Added Successfully"); 

  }
  
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
              Last Login
            </th>
         
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
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
              <td className=" py-5 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900 ml-5">
                <button className="border-2 border-gray-300 p-2 px-6 rounded-md font-semibold" onClick={handleBlock}>Active</button>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="flex text-sm leading-5 text-gray-900">
                  <button
                    className="flex mr-2 bg-transparent rounded border-2 border-slate-300 font-semibold  p-1 text-black"
                    onClick={() => handleView(user)}
                  >
                    <BiShow size={25} />
                    
                  </button>
                  <button
                    className="flex mr-2 text-blue-700 border-2 border-slate-300 p-1 rounded font-semibold"
                    onClick={() => handleEdit(user)}
                  >
                    <BiEditAlt size={25} />
                    
                  </button>
                  <button
                    className="flex mr-2 text-red-500 rounded  p-1 border-2 border-slate-300  font-semibold"
                    onClick={() => handleDelete(user.id)}
                  >
                    <MdDelete size={25} />
                    
                  </button>
                </div>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>

      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        
        {selectedUser ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {
                isEditable ? " Edit User " :" User Details "
              }
            </h2>
            <p className="text-black m-3">
              <span>Name:</span><br />
              <input type="text"  className="p-1 mt-2 rounded-md border-2 border-gray-300"
               value={selectedUser.name}
               readOnly={!isEditable}
               onChange={(e)=>setSelectedUser({...selectedUser, name:e.target.value})}/>
            </p>
            <p className="text-black m-3">
              <span>Email:</span><br />

              <input type="email"  className="p-1 mt-2 rounded-md border-2 border-gray-300"
              value={selectedUser.email}
              readOnly={!isEditable}
              onChange={(e)=>setSelectedUser({...selectedUser,email:e.target.value})}/>
            </p>
            
            <p className="text-black m-3 flex">
              <span>Last Login:</span>
             <p className="text-md font-semibold ml-2">
               {selectedUser.lastLogin}
          </p>
            </p>

            {isEditable &&(
              <button onClick={()=>handleUpdate(selectedUser)} className="text-center border-2 p-2 ml-3 rounded-md bg-red-600 text-white font-semibold">Update
              </button>
            )}
          </div>
        ) : (
          <Create_User addUser={addUser}/>
        )}
      </Modal>
    </div>
  );
}
