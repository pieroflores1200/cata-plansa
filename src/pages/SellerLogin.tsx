// src/pages/SellerLogin.tsx
import { useNavigate } from "react-router-dom";
import PasswordGate from "../components/PasswordGate";
import { useAuth } from "../context/AuthContext";

export default function SellerLogin() {
  const navigate = useNavigate();
  const { ingresar } = useAuth();

  function handleSuccess() {
    ingresar();
    navigate("/vendedor/portal");
  }

  return (
    <div className="login-page">
      <PasswordGate onSuccess={handleSuccess} />
    </div>
  );
}