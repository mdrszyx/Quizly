// Landing Page
import React from "react";
import {
  IconBook2,
  IconClock,
  IconUsers,
  IconLogin,
  IconUserPlus,
  IconStar,
} from "@tabler/icons-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-800 to-purple-900 text-white">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-2xl font-bold text-indigo-700 hover:text-purple-500 transition duration-300">Quizly</h1>
        <nav className="space-x-4">
          <a
            href="/login"
            className="px-4 py-2 text-sm text-indigo-700 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 text-sm text-white bg-indigo-700 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Register
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-r from-indigo-800 to-purple-800">
        <h2 className="text-6xl font-extrabold mb-6 hover:scale-105 transition-transform duration-300">Welcome to Quizly</h2>
        <p className="text-xl mb-8">
          The ultimate platform to learn, test, and grow your knowledge.
        </p>
        <a
          href="/signup"
          className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-md shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
        >
          Get Started Now
        </a>
      </main>

      {/* Features Section */}
      <section className="w-full py-12 px-8 bg-gradient-to-b from-indigo-900 to-blue-900">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Why Quizly?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <IconBook2 size={48} className="text-indigo-700 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Diverse Quizzes</h4>
            <p className="text-gray-600 text-center">
              Access quizzes from various topics and difficulty levels.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <IconClock size={48} className="text-indigo-700 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Time Challenges</h4>
            <p className="text-gray-600 text-center">
              Boost your skills with timed quizzes for extra fun.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <IconUsers size={48} className="text-indigo-700 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Community</h4>
            <p className="text-gray-600 text-center">
              Engage with a community of quiz enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-12 px-8 bg-blue-800">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-600">"Quizly helped me ace my exams!"</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, index) => (
                <IconStar key={index} size={20} className="text-yellow-500" />
              ))}
            </div>
            <h4 className="mt-4 font-bold text-gray-800">- Sarah</h4>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-600">"Fun and engaging quizzes."</p>
            <div className="flex justify-center mt-2">
              {[...Array(4)].map((_, index) => (
                <IconStar key={index} size={20} className="text-yellow-500" />
              ))}
            </div>
            <h4 className="mt-4 font-bold text-gray-800">- John</h4>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-600">"A great way to learn and test knowledge."</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, index) => (
                <IconStar key={index} size={20} className="text-yellow-500" />
              ))}
            </div>
            <h4 className="mt-4 font-bold text-gray-800">- Emily</h4>
          </div>
          {/* Testimonial 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-600">"Highly recommend for students."</p>
            <div className="flex justify-center mt-2">
              {[...Array(4)].map((_, index) => (
                <IconStar key={index} size={20} className="text-yellow-500" />
              ))}
            </div>
            <h4 className="mt-4 font-bold text-gray-800">- Alex</h4>
          </div>
          {/* Testimonial 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-600">"Improved my skills quickly."</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, index) => (
                <IconStar key={index} size={20} className="text-yellow-500" />
              ))}
            </div>
            <h4 className="mt-4 font-bold text-gray-800">- Mia</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white text-black py-6 text-center hover:shadow-lg transition-shadow duration-300">
        <p>&copy; {new Date().getFullYear()} Quizly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;