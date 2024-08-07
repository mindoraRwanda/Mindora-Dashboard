import { useState } from 'react';
import { Calendar, momentLocalizer, Event, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const initialEvents: Event[] = [
  {
    id: 0,
    title: 'All Day Event',
    allDay: true,
    start: new Date(2024, 7, 1),
    end: new Date(2024, 7, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2024, 7, 7),
    end: new Date(2024, 7, 10),
  },
];

const CalendarPage = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [newEventTitle, setNewEventTitle] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const openModal = (slotInfo: SlotInfo) => {
    setSelectedDate(slotInfo.start);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setNewEventTitle('');
  };

  const handleAddEvent = () => {
    if (selectedDate && newEventTitle) {
      const newEvent: Event = {
        id: events.length,
        title: newEventTitle,
        start: selectedDate,
        end: selectedDate,
        allDay: true,
      };
      setEvents([...events, newEvent]);
      closeModal();
    }
  };

  return (
    <div className="h-screen p-4">
      <div className="bg-white text-black rounded-lg shadow-xl p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '80vh' }}
          selectable
          onSelectSlot={openModal}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Event"
        className="bg-white text-black  p-4 rounded-lg shadow-xl max-w-md mx-auto mt-24"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center"
      >
        <button className="text-2xl mb-4">Add Event</button>
        <input
          type="text"
          placeholder="Event Title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full text-black"
        />
        <button
          onClick={handleAddEvent}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
        >
          Add Event
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default CalendarPage;
