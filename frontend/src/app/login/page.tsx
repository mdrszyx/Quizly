"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // useRouter from next/navigation

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Route to specific dashboard based on role
        if (data.role === "admin") {
          router.push("/dashboard/admin");
        } else if (data.role === "user") {
          router.push("/dashboard/user");
        } else {
          throw new Error("Unexpected user role");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Invalid email or password");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700">
      <div className="absolute top-5 left-5">
        <button
          onClick={() => router.push("/")}
          className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2"
        >
          ✖
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-black">Login</h1>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mt-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-black">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-purple-700 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;