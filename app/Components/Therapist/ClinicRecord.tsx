import { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    feel: '',
    MedicalId: '',
    AppointmentDate: '',
    surferingFrom: '',
    TreatmentPlanReview: '',
    ReportDocument: '',
    comments: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form Data:', formData);

    // Show the popup message
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 max-w-full mx-auto bg-white shadow-md rounded-md">
      {showPopup && (
        <div className="fixed top-1 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          Data sent successfully!
        </div>
      )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="MedicalId" className="block text-gray-700 text-sm font-bold mb-2">
            Medical Record Id:
            </label>
            <input
              type="text"
              id="MedicalId"
              name="MedicalId"
              value={formData.MedicalId}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="feel" className="block text-gray-700 text-sm font-bold mb-2">
              How do you feel:
            </label>
            <input
              type="text"
              id="feel"
              name="feel"
              value={formData.feel}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="surferingFrom" className="block text-gray-700 text-sm font-bold mb-2">
              What are you serfering from:
            </label>
            <input
              type="text"
              id="surferingFrom"
              name="surferingFrom"
              value={formData.surferingFrom}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="AppointmentDate" className="block text-gray-700 text-sm font-bold mb-2">
              Next Appointment Date:
            </label>
            <input
              type="text"
              id="AppointmentDate"
              name="AppointmentDate"
              value={formData.AppointmentDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="TreatmentPlanReview" className="block text-gray-700 text-sm font-bold mb-2">
              Next Treatment Plan Review Date:
            </label>
            <input
              type="text"
              id="TreatmentPlanReview"
              name="TreatmentPlanReview"
              value={formData.TreatmentPlanReview}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ReportDocument" className="block text-gray-700 text-sm font-bold mb-2">
              Attach Document Report:
            </label>
            <input
              type="file"
              id="ReportDocument"
              name="ReportDocument"
              value={formData.ReportDocument}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">
              Comments:
            </label>
            <textarea
              type="text"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-Puple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {/* Popup message */}
    </div>
  );
};

export default MyForm;
