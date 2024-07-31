export default function TherapistList() {
  const therapists = [
    { id: 1, name: "Dr. Alice Johnson", specialty: "Cognitive Behavioral Therapy", patients: 25 },
    { id: 2, name: "Dr. Bob Smith", specialty: "Family Therapy", patients: 30 },
    { id: 3, name: "Dr. Carol Williams", specialty: "Child Psychology", patients: 20 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4  text-purple-600">Therapists</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Specialty
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Patients
            </th>
          </tr>
        </thead>
        <tbody>
          {therapists.map((therapist) => (
            <tr key={therapist.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 font-medium text-gray-900">{therapist.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{therapist.specialty}</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-gray-900">{therapist.patients}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}