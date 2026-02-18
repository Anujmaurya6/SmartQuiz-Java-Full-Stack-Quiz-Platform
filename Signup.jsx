import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../api/authApi";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await signupUser(form);
      alert("Signup successful ✅");
      navigate("/");
    } catch (err) {
      alert("Signup failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-white">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Sign Up
        </h1>

        <input
          name="name"
          placeholder="Name"
          className="w-full p-3 border rounded mb-3 focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

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
          onClick={handleSignup}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Signup
        </button>

        <p className="text-sm text-center mt-4">
          Already have account?{" "}
          <Link to="/" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
