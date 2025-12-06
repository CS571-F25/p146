import { HashRouter, Route, Routes } from 'react-router';

import ResourceRental from "../ResourceRental";
import ResourceRentalLanding from "./pages/ResourceRentalLanding";
import Catalog from "./pages/Catalog";
import RequestForm from "./pages/RequestForm";
import Availability from "./pages/Availability";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Policies from "./pages/Policies";

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
        <Route path="/Login" element={<Login />} />
      </Route>
    </Routes>
  </HashRouter>
}

export default ResourceRentalRouter