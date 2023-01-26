import React from "react";
import Drivers from "../components/Drivers/Drivers";
import Title from "../components/Title/Title";
import { motion } from "framer-motion";

function Rankings() {
  return (
    <motion.div
      className="driver-ranking-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        title="Driver Standings 2023"
        subtitle={`2023 FIA FORMULA ONE WORLD CHAMPIONSHIP STANDINGS`}
        dark
      />
      <Drivers />
    </motion.div>
  );
}

export default Rankings;
