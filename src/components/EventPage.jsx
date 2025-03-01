import React from 'react';
import '../components/styles/EventPage.css';

function EventPage({ event, onSeatSelect }) {
  const handleSeatClick = (seat) => {
    onSeatSelect(seat);
  };

  if (!event) {
    return <div>Loading...</div>; // or some other fallback content
  }
  return (
    <div className="event-page-container">
      <h2>{event.name}</h2>
      <div className="seat-map">
        {event.seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;