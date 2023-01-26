import React, { useState, useEffect } from "react";
import "./LoginPage.scss";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import { motion } from "framer-motion";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-wrapper">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </motion.div>
  );
}
export default LoginPage;
