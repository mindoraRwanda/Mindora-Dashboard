// app/Components/Therapist/Notification.tsx
import React from 'react';
import { FaBell } from 'react-icons/fa';

interface Notification {
  id: number;
  message: string;
  date: string;
}

const notifications: Notification[] = [
  { id: 1, message: 'New message from Dr. Smith', date: '2024-08-30' },
  { id: 2, message: 'Appointment rescheduled with Ms. Johnson', date: '2024-08-29' },
  { id: 3, message: 'Patient feedback received', date: '2024-08-28' },
];

const NotificationPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaBell className="mr-2 text-yellow-500" /> Notifications
      </h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id} className="border-b py-2">
              <div className="text-sm font-medium text-gray-900">{notification.message}</div>
              <div className="text-sm text-gray-500">{notification.date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPage;
