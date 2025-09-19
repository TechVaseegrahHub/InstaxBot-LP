import React from "react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

const Login = () => {
  // The form state and handler are removed as they are no longer needed.

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 pt-[65px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Header content now links directly to the login page */}
        <a href="https://app.instaxbot.com/login" className="text-center block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4]/10 to-[#FD1D1D]/10 mb-4"
          >
            <LogIn className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Log in to your account</p>
        </a>
      </motion.div>
    </div>
  );
};

export default Login;