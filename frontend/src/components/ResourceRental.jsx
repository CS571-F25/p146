import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import ResourceRentalNavbar from "./nav/ResourceRentalNavbar";
import ResourceRentalDataContext from "../contexts/ResourceRentalDataContext";
import LoginStatusContext from "../contexts/LoginStatusDataContext";

export default function ResourceRental() {

  // TODO placeholder
  const [loginStatus, setLoginStatus] = useState(false);

  return <div>
    <ResourceRentalNavbar />
    <div style={{ margin: "1rem" }}>
      <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
        <Outlet />
      </LoginStatusContext.Provider>
    </div>
  </div>
}