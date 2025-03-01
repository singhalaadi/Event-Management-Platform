import React from 'react';
import './styles/TicketCounter.css'

function TicketCounter({ seats, onSeatSelect }) {
  const [adultTickets, setAdultTickets] = React.useState(0);
  const [childTickets, setChildTickets] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);

  const handleAdultTicketChange = (event) => {
    setAdultTickets(event.target.value);
    calculateTotalCost();
  };

  const handleChildTicketChange = (event) => {
    setChildTickets(event.target.value);
    calculateTotalCost();
  };

  const calculateTotalCost = () => {
    const adultCost = adultTickets * 20;
    const childCost = childTickets * 10;
    setTotalCost(adultCost + childCost);
  };

  const handleSeatSelect = (seat) => {
    onSeatSelect(seat);
  };

  return (
    <div className="ticket-counter">
      <h2>Ticket Counter</h2>
      <div className="event-info">
        <div className="event-image">
          <img src={require('./images/event.jpeg')} alt="Event Image" width="150" height="150" />
        </div>
        <div className="event-details">
          <h3 className="event-name">Concert Night</h3>
          <p className="event-subtitle">Saturday, March 21st, 2023</p>
          <p className="event-description">Join us for an unforgettable night of music and entertainment!</p>
        </div>
      </div>
      <ul>
        <li>
          <span>Adult Tickets:</span>
          <input
            type="number"
            value={adultTickets}
            onChange={handleAdultTicketChange}
            min="0"
            max="10"
          />
          <span className="price">$20.00</span>
        </li>
        <li>
          <span>Child Tickets:</span>
          <input
            type="number"
            value={childTickets}
            onChange={handleChildTicketChange}
            min="0"
            max="10"
          />
          <span className="price">$10.00</span>
        </li>
        <li>
          <span>Total:</span>
          <span className="price">$ {totalCost}.00</span>
        </li>
      </ul>
      <div className="event-actions">
        <button className="btn" onClick={handleSeatSelect}>Select Seats</button>
      </div>
    </div>
  );
}

export default TicketCounter;