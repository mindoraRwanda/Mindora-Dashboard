// pages/profile-settings.js
import { useState } from 'react';
import Modal from '../components/Modal'; // Import the Modal component

const ProfileSettings = () => {
  const defaultProfile = {
    name: 'Dr. Jane Doe',
    email: 'janedoe@example.com',
    phone: '123-456-7890',
    profilePicture: '',
    bio: 'Experienced therapist specializing in cognitive behavioral therapy (CBT) and mindfulness-based practices.',
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePicture: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile); // For now, just log the profile
    setIsModalOpen(false); // Close the modal on save
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Profile Settings</h1>
      
      {/* Default Profile Display */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <div className="flex items-center mb-4">
          {profile.profilePicture ? (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
          <div className="ml-4">
            <p className="text-lg font-medium">{profile.name}</p>
            <p className="text-sm text-gray-600">{profile.email}</p>
            <p className="text-sm text-gray-600">{profile.phone}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">{profile.bio}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 bg-purple-500 text-white font-medium py-1 px-3 rounded hover:bg-purple-600"
        >
          Edit
        </button>
      </div>

      {/* Modal for Editing Profile */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col">
            <label htmlFor="profilePicture" className="mb-2 font-medium">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded p-2"
            />
            {profile.profilePicture && (
              <img
                src={profile.profilePicture}
                alt="Profile Preview"
                className="mt-4 w-16 h-16 rounded-full object-cover"
              />
            )}
          </div>

          {/* Bio */}
          <div className="flex flex-col">
            <label htmlFor="bio" className="mb-2 font-medium">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
              rows="4"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-purple-500 text-white font-medium py-2 px-4 rounded hover:bg-purple-600 w-full"
          >
            Save Changes
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProfileSettings;
