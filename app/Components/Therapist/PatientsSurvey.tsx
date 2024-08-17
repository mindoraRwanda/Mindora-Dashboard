import React from 'react';

const FeedbackPage = () => {
    // Sample data - replace with actual data fetching from your backend or API
    const feedbackList = [
        { id: 1, patientName: 'John Doe', date: '2024-08-15', feedback: 'Great session, felt really supported.' },
        { id: 2, patientName: 'Jane Smith', date: '2024-08-14', feedback: 'I appreciate the insights shared.' },
        { id: 3, patientName: 'Mark Johnson', date: '2024-08-13', feedback: 'Helpful and constructive advice.' },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl text-gray-500 font-semibold mb-4">Patient Feedback</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-500">
                        <tr>
                            <th className="py-3 px-6 text-left">Patient Name</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbackList.map((feedback) => (
                            <tr key={feedback.id} className="border-t text-gray-500">
                                <td className="py-3 px-6">{feedback.patientName}</td>
                                <td className="py-3 px-6">{feedback.date}</td>
                                <td className="py-3 px-6">{feedback.feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeedbackPage;
