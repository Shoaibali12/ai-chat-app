import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/ai-chat.jpg";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-10">
        {/* Left Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400">
            Talk to AI, Instantly.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Experience real-time, AI-powered conversations. Get instant
            responses, creative ideas, and assistance 24/7.
          </p>
          <Link to="/chat">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 bg-blue-500 px-8 py-4 rounded-full text-white text-lg font-semibold shadow-lg hover:bg-blue-600 transition"
            >
              Start Chatting →
            </motion.button>
          </Link>
        </motion.div>

        {/* Right AI Illustration */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt="AI Chat"
            className="w-80 md:w-[450px] drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Feature 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400">Real-Time AI</h3>
          <p className="text-gray-300 mt-2">
            Chat with AI in real-time with instant responses.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-green-400">
            Smart & Creative
          </h3>
          <p className="text-gray-300 mt-2">
            Get smart, creative, and detailed answers for anything.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-purple-400">
            Secure & Private
          </h3>
          <p className="text-gray-300 mt-2">
            Your chats are safe, encrypted, and private.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        &copy; {new Date().getFullYear()} AI Chat. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
