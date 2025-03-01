import React, { useState } from 'react';
import './styles/App.css';
import Header from './Header.jsx';
import EventPage from './EventPage.jsx';
import Sidebar from './Events.jsx';
import TicketCounter from './TicketCounter.jsx';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
  ];

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleSeatSelect = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };

  return (
    <div className="App">
      <Header />
      <div className="hero-section">
        <h1 className="hero-heading">Event Booking Platform</h1>
        <h2>Find Your Next Event!</h2>
        <button>Explore Events</button>
        
      </div>
      <div className="main-content">
        <Sidebar events={events} onEventSelect={handleEventSelect} />
        <EventPage event={selectedEvent} onSeatSelect={handleSeatSelect} />
        <TicketCounter seats={selectedSeats} />
      </div>
    </div>
  );
}
export default App;