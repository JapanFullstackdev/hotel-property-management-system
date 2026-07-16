import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";

export default function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Login</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/rooms">Rooms</Link> |
        <Link to="/reservations">Reservations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>

    </BrowserRouter>
  );
}
