import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../components/NavBar";

import ProductsList from "../pages/ProductsList";

export default function routes() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsList/>}/>
        </Routes>
      </Router>
    </>
  );
}