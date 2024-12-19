import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="mt-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Welcome, [User Name]!</h2>
            <p className="mt-2">Email: user@example.com</p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Your Quizzes</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Quiz 1</h4>
                <p>Status: Completed</p>
                <p>Score: 80%</p>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Quiz 2</h4>
                <p>Status: In Progress</p>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Quiz 3</h4>
                <p>Status: Not Started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;