// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ClientPortal from "../pages/ClientPortal";
import SellerLogin from "../pages/SellerLogin";
import SellerPortal from "../pages/SellerPortal";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<ClientPortal />} />
        <Route path="/vendedor" element={<SellerLogin />} />
        <Route path="/vendedor/portal" element={<SellerPortal />} />
      </Route>
    </Routes>
  );
}