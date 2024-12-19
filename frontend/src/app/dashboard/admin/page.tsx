import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Quizzes</h2>
            <p className="text-3xl font-bold mt-2">45</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Active Users</h2>
            <p className="text-3xl font-bold mt-2">30</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold">User Management</h3>
          <div className="bg-white text-black p-4 rounded-lg shadow-md mt-4">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">john@example.com</td>
                  <td className="border px-4 py-2">User</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Jane Smith</td>
                  <td className="border px-4 py-2">jane@example.com</td>
                  <td className="border px-4 py-2">Admin</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;