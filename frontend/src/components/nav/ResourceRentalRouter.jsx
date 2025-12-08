import { HashRouter, Route, Routes } from 'react-router';

import ResourceRental from "../ResourceRental";
import ResourceRentalLanding from "./pages/ResourceRentalLanding";
import Catalog from "./pages/Catalog";
import RequestForm from "./pages/RequestForm";
import Availability from "./pages/Availability";
import Cart from "./pages/Cart";
import Policies from "./pages/Policies";
import Logout from "./auth/Logout";

function ResourceRentalRouter() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<ResourceRental />}>
        <Route index element={<ResourceRentalLanding />} />
        {/* TODO: Add your routes here! */}
        <Route path="/ResourceRentalLanding" element={<ResourceRentalLanding />} />
        <Route path="/Availability" element={<Availability />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/RequestForm" element={<RequestForm />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Logout" element={<Logout />} />
      </Route>
    </Routes>
  </HashRouter>
}

export default ResourceRentalRouter