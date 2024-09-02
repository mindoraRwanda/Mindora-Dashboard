// File: pages/settings.js

import React from 'react';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>
        
        {/* Profile Settings Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <input type="file" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-md">Save Changes</button>
          </form>
        </div>

        {/* Notification Settings Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notification Settings</h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Receive email notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Receive SMS notifications</label>
            </div>
          </form>
        </div>

        {/* Account Security Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Account Security</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Change Password</label>
              <input type="password" className="mt-1 p-2 w-full border rounded-md" placeholder="New Password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-md">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
