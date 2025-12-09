import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import ResourceRentalNavbar from "./nav/ResourceRentalNavbar";
import ResourceRentalDataContext from "../contexts/ResourceRentalDataContext";
import LoginStatusContext from "../contexts/LoginStatusDataContext";
import ReservationsContext from "../contexts/ReservationsContext";

export default function ResourceRental() {

  // TODO placeholder
  const [loginStatus, setLoginStatus] = useState(false);
  const [reservations, setReservations] = useState(() => {
    const saved = sessionStorage.getItem('reservations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('reservations', JSON.stringify(reservations));
  }, [reservations]);

  return <div>
    <ResourceRentalNavbar />
    <div style={{ margin: "1rem" }}>
      <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
        <ReservationsContext.Provider value={[reservations, setReservations]}>
          <Outlet />
        </ReservationsContext.Provider>
      </LoginStatusContext.Provider>
    </div>
  </div>
}