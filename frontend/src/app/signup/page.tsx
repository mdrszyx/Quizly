"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json(); // Backend memberikan respons JSON
        setSuccess(data.message || "Signup successful!");
        setTimeout(() => router.push("/login"), 2000); // Redirect ke login setelah 2 detik
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Signup failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError("Unable to connect to the server. Please try again later.");
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
        <h1 className="text-2xl font-bold text-center text-black">Sign Up</h1>
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mt-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded mt-4">
            {success}
          </div>
        )}
        <form onSubmit={handleSignup} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
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
              className="block text-gray-700 font-semibold mb-2"
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
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-purple-600 font-semibold hover:underline"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;