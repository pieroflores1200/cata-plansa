// src/layouts/MainLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();
  const esInicio = location.pathname === "/";

  return (
    <div className="app-container">
      {!esInicio && <Navbar />}
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}