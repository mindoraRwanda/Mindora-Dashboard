export default function UserList() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", lastLogin: "2024-07-18" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", lastLogin: "2024-07-17" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", lastLogin: "2024-07-16" },
  ];

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
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}
