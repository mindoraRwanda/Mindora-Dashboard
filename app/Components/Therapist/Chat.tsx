import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Chat() {
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [chatHistories, setChatHistories] = useState({}); // Store chat histories for all users
  const messagesEndRef = useRef(null);

  // Dummy data for followers and collaborators with profile photos
  const users = [
    { name: 'John Doe', photo: './images/profile.jpeg', role: 'Follower' },
    { name: 'Jane Smith', photo: './images/images.jpeg', role: 'Follower' },
    { name: 'Alice Johnson', photo: './images/imag3.jpeg', role: 'Follower' },
    { name: 'Bob Brown', photo: './images/imag1.jpeg', role: 'Collaborator' },
    { name: 'Emily Davis', photo: './images/imag3.jpeg', role: 'Collaborator' },
    { name: 'Michael Wilson', photo: './images/images.jpeg', role: 'Collaborator' },
  ];

  const sendMessage = () => {
    if (input.trim() === '' && !selectedFile) return;

    const newMessage = {
      text: input,
      sender: 'You',
      time: new Date().toLocaleTimeString(),
      file: selectedFile,
    };

    // Save the message in the current chat's history
    setChatHistories((prevHistories) => {
      const updatedHistory = {
        ...prevHistories,
        [currentChat.name]: [...(prevHistories[currentChat.name] || []), newMessage],
      };
      return updatedHistory;
    });

    setInput('');
    setSelectedFile(null);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistories, currentChat]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUserClick = (user) => {
    setCurrentChat(user);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <h2 className="text-gray-500 font-bold mb-4">Referrals</h2>
        <ul className="space-y-2 mb-6">
          {users
            .filter((user) => user.role === 'Follower')
            .map((user, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleUserClick(user)}
              >
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-800">{user.name}</span>
              </li>
            ))}
        </ul>

        <h2 className="bg-puple text-gray-500 font-bold mb-4">Collaborators</h2>
        <ul className="space-y-2">
          {users
            .filter((user) => user.role === 'Collaborator')
            .map((user, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleUserClick(user)}
              >
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-800">{user.name}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-6">
        {/* Chat Header */}
        {currentChat && (
          <div className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center space-x-3">
            <img
              src={currentChat.photo}
              alt={currentChat.name}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="text-lg font-bold text-gray-900">{currentChat.name}</h3>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-lg space-y-4">
          {currentChat && chatHistories[currentChat.name]?.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-xs`}>
                {message.sender !== 'You' && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                )}
                <div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'You'
                        ? 'bg-gray-100 text-gray-900 rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                    {message.file && (
                      <div className="mt-2">
                        {message.file.type.startsWith('image/') ? (
                          <img
                            src={URL.createObjectURL(message.file)}
                            alt="uploaded"
                            className="max-w-full h-auto rounded-lg"
                          />
                        ) : (
                          <a
                            href={URL.createObjectURL(message.file)}
                            download={message.file.name}
                            className="text-blue-500 underline"
                          >
                            {message.file.name}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* Empty div to ensure we always scroll to the bottom */}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex mt-4 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
            className="flex-1 p-3 border text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />

          <div className="relative flex items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="p-3 bg-gray-300 text-black rounded-l-none cursor-pointer hover:bg-gray-400"
            >
              📎
            </label>
            {selectedFile && (
              <button
                onClick={handleRemoveFile}
                className="absolute left-full ml-1 text-red-500 hover:text-red-600"
              >
                ✖️
              </button>
            )}
          </div>

          <button
            onClick={sendMessage}
            className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
