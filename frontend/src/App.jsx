import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import Kubernetes from "./pages/Kubernetes";
import CICD from "./pages/CICD";
import Monitoring from "./pages/Monitoring";
import Security from "./pages/Security";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/kubernetes" element={<Kubernetes />} />

      <Route path="/cicd" element={<CICD />} />

      <Route path="/monitoring" element={<Monitoring />} />

      <Route path="/security" element={<Security />} />

    </Routes>
  );
}

export default App;