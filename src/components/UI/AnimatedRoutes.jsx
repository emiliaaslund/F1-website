import React from "react";
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

//components
import Home from "../../pages/Home";
import Schedule from "../../pages/Schedule";
import Rankings from "../../pages/Rankings";
import Constructor from "../../pages/Constructor";
import LoginPage from "../../pages/LoginPage";
import ProfilePage from "../../pages/ProfilePage";
import ErrorPage from "../../pages/ErrorPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" component={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/rankings/rankings" element={<Rankings />} />
        <Route path="/rankings/constructor" element={<Constructor />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
