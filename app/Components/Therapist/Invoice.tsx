import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
//import html2pdf from 'html2pdf.js';
import { FaEdit, FaTrash } from 'react-icons/fa';

const html2pdf = dynamic(() => import('html2pdf.js'), { ssr: false });

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    therapySessionDate: '',
    sessionType: '',
    sessionDuration: '',
    sessionCost: '',
    additionalNotes: '',
    items: [],
    newItem: { name: '', cost: '' },
  });

  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [hideActions, setHideActions] = useState(false); // State to hide action buttons

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      newItem: {
        ...formData.newItem,
        [name]: value,
      },
    });
  };

  const addItem = () => {
    if (formData.newItem.name && formData.newItem.cost) {
      setFormData({
        ...formData,
        items: [...formData.items, formData.newItem],
        newItem: { name: '', cost: '' },
      });
    }
  };

  const removeItem = (index) => {
    setFormData({
      ...formData,
      items: formData.items.filter((_, i) => i !== index),
    });
  };

  const editItem = (index, name, cost) => {
    const updatedItems = formData.items.map((item, i) =>
      i === index ? { name, cost } : item
    );
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInvoiceModal(true);
  };

  const generatePDF = () => {
    setHideActions(true); // Hide action buttons
    setTimeout(() => {
      const invoiceElement = document.getElementById('invoice');
      html2pdf().from(invoiceElement).save('invoice.pdf').then(() => {
        setHideActions(false); // Show action buttons again
      });
    }, 0);
  };

  const printInvoice = () => {
    setHideActions(true); // Hide action buttons
    setTimeout(() => {
      const printContent = document.getElementById('invoice').innerHTML;
      const originalContent = document.body.innerHTML;

      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // Refresh the page to restore original content
    }, 0);
  };

  const totalCost = formData.items.reduce((sum, item) => sum + parseFloat(item.cost), 0) + parseFloat(formData.sessionCost || 0);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl text-gray-500 font-bold mb-4">Generate Invoice</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded col-2 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">
            Patient Name:
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="therapySessionDate" className="block text-gray-700 text-sm font-bold mb-2">
            Therapy Session Date:
          </label>
          <input
            type="date"
            id="therapySessionDate"
            name="therapySessionDate"
            value={formData.therapySessionDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sessionType" className="block text-gray-700 text-sm font-bold mb-2">
            Session Type:
          </label>
          <input
            type="text"
            id="sessionType"
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sessionDuration" className="block text-gray-700 text-sm font-bold mb-2">
            Session Duration (hours):
          </label>
          <input
            type="number"
            id="sessionDuration"
            name="sessionDuration"
            value={formData.sessionDuration}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sessionCost" className="block text-gray-700 text-sm font-bold mb-2">
            Session Cost:
          </label>
          <input
            type="number"
            id="sessionCost"
            name="sessionCost"
            value={formData.sessionCost}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="additionalNotes" className="block text-gray-700 text-sm font-bold mb-2">
            Additional Notes:
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="newItemName" className="block text-gray-700 text-sm font-bold mb-2">
            Item Name:
          </label>
          <input
            type="text"
            id="newItemName"
            name="name"
            value={formData.newItem.name}
            onChange={handleItemChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newItemCost" className="block text-gray-700 text-sm font-bold mb-2">
            Item Cost:
          </label>
          <input
            type="number"
            id="newItemCost"
            name="cost"
            value={formData.newItem.cost}
            onChange={handleItemChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
<div className='space-x-2'>
        <button
          type="button"
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Item
        </button>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Invoice
        </button>
        </div>
      </form>

      {showInvoiceModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-gray-700 p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
            <button
              onClick={() => setShowInvoiceModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <div id="invoice">
              {/* Company Info */}
              <div className="text-center bg-gray-700 text-white w-full mb-6">
                <img src="/path/to/logo.png" alt="Mindora Logo" className="mx-auto mb-4 w-32 h-auto" />
                <h2 className="text-2xl font-bold">Mindora</h2>
              </div>
              
              {/* Invoice Details */}
              <h2 className="text-xl font-bold mb-4">Invoice Preview</h2>
              <p><strong>Patient Name:</strong> {formData.patientName}</p>
              <p><strong>Therapy Session Date:</strong> {formData.therapySessionDate}</p>
              <p><strong>Session Type:</strong> {formData.sessionType}</p>
              <p><strong>Session Duration:</strong> {formData.sessionDuration} hours</p>
              <p><strong>Session Cost:</strong> ${formData.sessionCost}</p>
              <p><strong>Additional Notes:</strong> {formData.additionalNotes}</p>

              <h3 className="text-lg font-semibold mt-4">Items:</h3>
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-r">Item</th>
                    <th className="py-2 px-4 border-b border-r">Cost</th>
                    {!hideActions && <th className="py-2 px-4 border-b">Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b border-r">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => editItem(index, e.target.value, item.cost)}
                          className="border-none bg-transparent w-full"
                        />
                      </td>
                      <td className="py-2 px-4 border-b border-r">
                        <input
                          type="number"
                          value={item.cost}
                          onChange={(e) => editItem(index, item.name, e.target.value)}
                          className="border-none bg-transparent w-full"
                        />
                      </td>
                      {!hideActions && (
                        <td className="py-2 px-4 border-b flex space-x-2">
                          <button
                            onClick={() => editItem(index, item.name, item.cost)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <FaEdit/>
                          </button>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash/>
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4"><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={generatePDF}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save as PDF
              </button>
              <button
                onClick={printInvoice}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;
