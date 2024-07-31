export default function AppointmentList() {
  const appointments = [
    { id: 1, patientName: "John Doe", date: "2024-07-20", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2024-07-21", time: "2:00 PM" },
    { id: 3, patientName: "Bob Johnson", date: "2024-07-22", time: "11:30 AM" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4  text-purple-600">Upcoming Appointments</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Patient Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">{appointment.patientName}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{appointment.date}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{appointment.time}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}