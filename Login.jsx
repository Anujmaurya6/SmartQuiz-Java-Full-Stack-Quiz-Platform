import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);

      // 👉 backend se token ayega
      login(res.data.token);

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-white">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Login
        </h1>

        <input
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-3 focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          New user?{" "}
          <Link to="/signup" className="text-green-600 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
