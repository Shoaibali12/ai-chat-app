import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("API Response Data:", data); // ✅ Debug API response

      if (response.ok) {
        alert("Login successful!");

        // ✅ Fix: Ensure correct user object
        const userData = {
          name: data.name, // 🔥 Now correctly received from backend
          email: data.email,
        };

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(userData));

        // ✅ Fix Redux state
        dispatch(login(userData));

        navigate("/");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Signin Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkBg text-white font-poppins">
      <div className="w-full max-w-md p-8 bg-darkCard rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-textSecondary">
          Don't have an account?{" "}
          <span
            className="text-secondary cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
