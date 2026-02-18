import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SelectLevel from "./pages/SelectLevel";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>

      {/* 🔓 Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔐 Protected Routes */}
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />

      <Route
        path="/level/:subject"
        element={isLoggedIn ? <SelectLevel /> : <Navigate to="/" />}
      />

      <Route
        path="/quiz/:subject/:level"
        element={isLoggedIn ? <Quiz /> : <Navigate to="/" />}
      />

      <Route
        path="/result"
        element={isLoggedIn ? <Result /> : <Navigate to="/" />}
      />

      {/* ❌ Unknown route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;
