import { useContext } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Button, ListGroup } from "react-bootstrap";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReservationsContext from "../../../contexts/ReservationsContext";

const localizer = momentLocalizer(moment);

export default function Availability() {

  const [reservations, setReservations] = useContext(ReservationsContext);

  function handleDelete(reservationId, itemName, quantity) {
    // remove reservation
    setReservations(prev => prev.filter(r => r.id != reservationId));
    // update catalog quantity
    const quantityAvailable = JSON.parse(localStorage.getItem('quantityAvailable')) || {};
    if (quantityAvailable[itemName] !== undefined) {
      quantityAvailable[itemName] += parseInt(quantity);
    } else {
      quantityAvailable[itemName] = (quantityAvailable[itemName] || 0) + parseInt(quantity);
    }
    localStorage.setItem('quantityAvailable', JSON.stringify(quantityAvailable));
    // update catalog availability
    if (quantityAvailable[itemName] > 0) {
      localStorage.removeItem(`${itemName}_available`);
    }

    // for debugging
    alert(`Reservation deleted and ${quantity} ${itemName}(s) restored to catalog!`);
  }

  return <div>
    <h1>Availability Calendar</h1>
    <p>View all current item reservations below:</p>
    <div style={{ height: "600px", margin: "20px 0" }}>
      <Calendar localizer={localizer} events={reservations}
        startAccessor="start" endAccessor="end" style={{ height: "100%" }} />
    </div>

    <h2 style={{ marginTop: "40px" }}>All Reservations</h2>
    <ListGroup>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        reservations.map(r => (
          <ListGroup.Item key={r.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{r.title}</strong>
              <br />
              <small>
                {moment(r.start).format('MMM DD, YYYY')} - {moment(r.end).format('MMM DD, YYYY')}
                <br />
                Reserved by: {r.name} ({r.email})
              </small>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDelete(r.id, r.itemName, r.quantity)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  </div>
}