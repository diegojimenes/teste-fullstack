import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ProductsList from "../pages/ProductsList";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList/>}/>
      </Routes>
    </Router>
  );
}