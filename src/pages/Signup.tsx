import React from "react";
import { motion } from "framer-motion";
import { UserPlus, User, ArrowRight } from "lucide-react";

const Signup = () => {
  const [name, setName] = React.useState("");

  const inputFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      icon: User,
      placeholder: "John Doe",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 pt-[65px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/10 mb-4"
          >
            <UserPlus className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600">Start your journey with us</p>
        </div>

        {/* Form Section */}
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <div className="mt-1 relative">
                  <field.icon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <motion.a
              href="https://app.instaxbot.com/signup"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                Create Account
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </motion.div>
            </motion.a>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-600"
        >
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-primary hover:text-secondary"
          >
            Log in
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;