import React from 'react';
import './styles/Events.css';

function Events({ events, onEventSelect }) {
  const handleEventClick = (event) => {
    onEventSelect(event);
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>EVENTS</h1>
        <p>Go through the events from here</p>
      </div>
      {events.map((event) => (
        <div
          key={event.id}
          className="event"
          style={{ backgroundColor: event.backgroundColor }}
          onClick={() => handleEventClick(event)}
        >
          <div className="event-image">
            <img src={require('./images/event.jpeg')} alt={event.name} />
          </div>
          <div className="event-info">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-subtitle">{event.subtitle}</p>
            <p className="event-description">{event.description}</p>
          </div>
          <div className="event-caption">
            <p>{event.caption}</p>
          </div>
          <div className="event-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;