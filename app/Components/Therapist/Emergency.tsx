import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
        weekday: 'short', // Day of the week (e.g., Mon, Tue)
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};

const EmergencyPage = () => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [emergencies, setEmergencies] = useState([]);
    const [newEmergency, setNewEmergency] = useState(null);
    const [selectedEmergency, setSelectedEmergency] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [respondedMessages, setRespondedMessages] = useState([]);

    useEffect(() => {
        // Replace with your WebSocket server URL
        const socket = io('http://localhost:4000');

        // Listen for incoming emergency notifications
        socket.on('newEmergency', (emergency) => {
            const receivedAt = new Date().toISOString();
            setNewEmergency({
                ...emergency,
                receivedAt,
                status: 'Unread' // Set status to Unread for new emergencies
            });
            setEmergencies((prevEmergencies) => [
                {
                    ...emergency,
                    receivedAt,
                    status: 'Unread' // Set status to Unread for new emergencies
                },
                ...prevEmergencies
            ]);

            // Show alert notification
            setAlertVisible(true);

            // Hide alert after 5 seconds
            setTimeout(() => {
                setAlertVisible(false);
            }, 5000);
        });

        // Cleanup on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    // Add some default emergency messages
    useEffect(() => {
        const defaultEmergencies = [
            { id: 1, patientName: 'John Doe', date: '2024-08-16', message: 'Feeling overwhelmed, need help!', contact: 'john.doe@example.com', sentAt: '2024-08-16T10:00:00Z', receivedAt: '2024-08-16T10:05:00Z', status: 'Unread' },
            { id: 2, patientName: 'Jane Smith', date: '2024-08-15', message: 'Experiencing a panic attack.', contact: 'jane.smith@example.com', sentAt: '2024-08-15T11:00:00Z', receivedAt: '2024-08-15T11:10:00Z', status: 'Unread' },
            { id: 3, patientName: 'Mark Johnson', date: '2024-08-14', message: 'Need to talk ASAP.', contact: 'mark.johnson@example.com', sentAt: '2024-08-14T09:00:00Z', receivedAt: '2024-08-14T09:15:00Z', status: 'Unread' },
        ];

        setEmergencies(defaultEmergencies);
    }, []);

    const handlePatientClick = (emergency) => {
        // Update the status to "Read" when an emergency is selected
        setEmergencies((prevEmergencies) =>
            prevEmergencies.map((em) =>
                em.id === emergency.id ? { ...em, status: 'Read' } : em
            )
        );
        setSelectedEmergency(emergency);
        setIsModalOpen(true);
    };

    const handleSendResponse = () => {
        if (selectedEmergency) {
            const respondedMessage = {
                ...selectedEmergency,
                response: responseMessage,
                responseDate: new Date().toISOString(),
                status: 'Unread' // Set status to Unread initially, will be updated when read by the patient
            };

            setRespondedMessages((prevMessages) => [respondedMessage, ...prevMessages]);
            setIsModalOpen(false);
            setResponseMessage('');
        }
    };

    return (
        <div className="container text-gray-500 mx-auto p-6">
            <h1 className="text-4xl font-semibold mb-6">Emergency and Crisis Management</h1>

            {/* Real-time Notification */}
            {alertVisible && (
                <div className="mb-4 p-4 bg-red-600 text-white rounded-lg shadow-lg">
                    New emergency alert from {newEmergency?.patientName}!
                </div>
            )}

            {/* Emergencies Table */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Emergencies Sent by Patients</h2>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 text-left">Patient Name</th>
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Message</th>
                                <th className="py-3 px-6 text-left">Contact</th>
                                <th className="py-3 px-6 text-left">Sent At</th>
                                <th className="py-3 px-6 text-left">Received At</th>
                                <th className="py-3 px-6 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emergencies.map((emergency) => (
                                <tr
                                    key={emergency.id}
                                    className={`border-t cursor-pointer hover:bg-gray-100 ${emergency.status === 'Unread' ? 'bg-yellow-50' : ''}`}
                                    onClick={() => handlePatientClick(emergency)}
                                >
                                    <td className="py-3 px-6">{emergency.patientName}</td>
                                    <td className="py-3 px-6">{emergency.date}</td>
                                    <td className="py-3 px-6">{emergency.message}</td>
                                    <td className="py-3 px-6">{emergency.contact}</td>
                                    <td className="py-3 px-6">{formatDateTime(emergency.sentAt)}</td>
                                    <td className="py-3 px-6">{formatDateTime(emergency.receivedAt)}</td>
                                    <td className="py-3 px-6 font-semibold">{emergency.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Responded Messages Table */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Messages Responded by Therapist</h2>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 text-left">Patient Name</th>
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Message</th>
                                <th className="py-3 px-6 text-left">Response</th>
                                <th className="py-3 px-6 text-left">Response Date</th>
                                <th className="py-3 px-6 text-left">Sent At</th>
                                <th className="py-3 px-6 text-left">Received At</th>
                                <th className="py-3 px-6 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {respondedMessages.map((message) => (
                                <tr key={message.id} className="border-t">
                                    <td className="py-3 px-6">{message.patientName}</td>
                                    <td className="py-3 px-6">{message.date}</td>
                                    <td className="py-3 px-6">{message.message}</td>
                                    <td className="py-3 px-6">{message.response}</td>
                                    <td className="py-3 px-6">{formatDateTime(message.responseDate)}</td>
                                    <td className="py-3 px-6">{formatDateTime(message.sentAt)}</td>
                                    <td className="py-3 px-6">{formatDateTime(message.receivedAt)}</td>
                                    <td className="py-3 px-6 font-semibold">{message.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Crisis Contact Information</h2>
                <ul className="list-disc list-inside">
                    <li>Emergency Services: 911</li>
                    <li>National Suicide Prevention Lifeline: 1-800-273-TALK (8255)</li>
                    <li>Local Crisis Hotline: 1-800-555-1212</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Crisis Management Guidelines</h2>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Handling a Suicidal Patient</h3>
                    <p className="mb-4">If a patient expresses suicidal thoughts, immediately assess the severity of the risk, ensure they are not left alone, and contact emergency services if necessary.</p>
                    <h3 className="text-xl font-semibold mb-2">Dealing with Panic Attacks</h3>
                    <p>Guide the patient through deep breathing exercises, reassure them, and slowly help them regain control over their situation.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Resource Links</h2>
                <ul className="list-disc list-inside">
                    <li><a href="https://www.samhsa.gov" className="text-blue-600 hover:underline">SAMHSA (Substance Abuse and Mental Health Services Administration)</a></li>
                    <li><a href="https://www.mentalhealth.gov" className="text-blue-600 hover:underline">MentalHealth.gov</a></li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-4 space-x-3">
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded shadow"
                        onClick={() => setAlertVisible(true)}
                    >
                        Send Emergency Alert
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
                        Access Crisis Management System
                    </button>
                </div>
            </section>

            {/* Modal for Responding to an Emergency */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-500px shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Respond to {selectedEmergency.patientName}</h2>
                        <textarea
                            className="w-full p-2 border rounded-lg mb-4"
                            rows="4"
                            value={responseMessage}
                            onChange={(e) => setResponseMessage(e.target.value)}
                            placeholder="Type your response here..."
                        ></textarea>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-500"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800"
                                onClick={handleSendResponse}
                            >
                                Send Response
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmergencyPage;
