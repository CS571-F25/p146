import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import ResourceRentalNavbar from "./nav/ResourceRentalNavbar";
import ResourceRentalDataContext from "../contexts/ResourceRentalDataContext";

export default function ResourceRental() {

  // TODO placeholder
  const [data, setData] = useState({});

  return <div>
    <ResourceRentalNavbar />
    <div style={{ margin: "1rem" }}>
      <ResourceRentalDataContext.Provider value={data}>
        <Outlet />
      </ResourceRentalDataContext.Provider>
    </div>
  </div>
}