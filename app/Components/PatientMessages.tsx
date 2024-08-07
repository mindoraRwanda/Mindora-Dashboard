import { useState } from 'react';
import { FaFileAlt, FaDownload, FaChartBar } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

export default function Messages() {
  const [selectedReport, setSelectedReport] = useState(null);

  const messages = [
    { id: 1, title: "John Doe", date: "2024-07-01", type: "progress" },
    { id: 2, title: "Bob Johnson", date: "2024-07-15", type: "summary" },
    { id: 3, title: "Jane Smith", date: "2024-07-30", type: "analysis" },
  ];

  const renderReportDetails = (messages) => {
    switch (messages.type) {
      case 'progress':
        return (
          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <h3 className="font-semibold">Monthly Patient Progress</h3>
            <p>This report shows the progress of patients over the last month.</p>
            <div className="mt-2">
              <FaChartBar className="inline mr-2" />
              Progress Chart would be displayed here
            </div>
          </div>
        );
      case 'summary':
        return (
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <h3 className="font-semibold">Therapy Session Summary</h3>
            <p>A summary of all therapy sessions conducted this month.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Total sessions: 45</li>
              <li>Average session duration: 50 minutes</li>
              <li>Most common topics: Anxiety, Depression, Stress Management</li>
            </ul>
          </div>
        );
      case 'analysis':
        return (
          <div className="mt-4 p-4 bg-purple-100 rounded-lg">
            <h3 className="font-semibold">Treatment Effectiveness Analysis</h3>
            <p>An analysis of the effectiveness of different treatment methods.</p>
            <div className="mt-2">
              <FaChartBar className="inline mr-2" />
              Effectiveness comparison chart would be displayed here
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Reports</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <ul className="divide-y divide-gray-200">
            {messages.map((messages) => (
              <li key={messages.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaMessage className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {messages.title}
                    </p>
                    <p className="text-sm text-gray-500">{messages.date}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => setSelectedReport(messages)}
                      className="inline-flex items-center shadow-sm px-2.5 py-0.5 border text-black border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedReport && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{selectedReport.title}</h3>
              {renderReportDetails(selectedReport)}
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}