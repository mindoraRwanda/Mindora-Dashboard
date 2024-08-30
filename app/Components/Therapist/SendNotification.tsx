// app/Components/Therapist/SendNotification.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface Notification {
  id: number;
  message: string;
  date: string;
  recipients: string[];
}

const recipientsList = [
  'John Doe',
  'Jane Smith',
  'Emily Johnson',
  'Michael Brown',
];

const SendNotificationPage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleRecipientChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value);
    setSelectedRecipients(selectedValues);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newNotification: Notification = {
      id: notifications.length + 1,
      message,
      date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
      recipients: selectedRecipients,
    };
    setNotifications([...notifications, newNotification]);
    setMessage('');
    setSelectedRecipients([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaPaperPlane className="mr-2 text-blue-500" /> Send Notification
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block text-black w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Type your notification message here"
            required
          />
        </div>
        <div className='text-black'>
          <label className="block text-sm font-medium text-gray-700">Recipients</label>
          <select
            multiple
            value={selectedRecipients}
            onChange={handleRecipientChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            {recipientsList.map((recipient) => (
              <option key={recipient} value={recipient}>
                {recipient}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-500 text-white rounded-md"
        >
          Send
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Sent Notifications</h3>
        {notifications.length === 0 ? (
          <p>No notifications sent yet</p>
        ) : (
          <ul>
            {notifications.map(notification => (
              <li key={notification.id} className="border-b py-2">
                <div className="text-sm font-medium text-gray-900">{notification.message}</div>
                <div className="text-sm text-gray-500">Date: {notification.date}</div>
                <div className="text-sm text-gray-500">Recipients: {notification.recipients.join(', ')}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SendNotificationPage;
