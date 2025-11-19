import { HashRouter, Route, Routes } from 'react-router';

import ResourceRental from "../ResourceRental";
import ResourceRentalLanding from "./pages/ResourceRentalLanding";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CheckoutForm from "./pages/CheckoutForm";

function ResourceRentalRouter() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<ResourceRental />}>
        <Route index element={<ResourceRentalLanding />} />
        {/* TODO: Add your routes here! */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/CheckoutForm" element={<CheckoutForm />} />
      </Route>
    </Routes>
  </HashRouter>
}

export default ResourceRentalRouter