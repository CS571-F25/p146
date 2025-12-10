import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import ResourceRentalNavbar from "./nav/ResourceRentalNavbar";
import ResourceRentalDataContext from "../contexts/ResourceRentalDataContext";
import LoginStatusContext from "../contexts/LoginStatusDataContext";
import ReservationsContext from "../contexts/ReservationsContext";

export default function ResourceRental() {

  // login status and reservations saved in constext
  const [loginStatus, setLoginStatus] = useState(() => {
    const saved = localStorage.getItem('loginStatus');
    return saved ? JSON.parse(saved) : false;
  });
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('reservations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
  }, [loginStatus]);
  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
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