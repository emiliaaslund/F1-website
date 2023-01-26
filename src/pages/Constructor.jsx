import React from "react";
import Teams from "../components/Teams/Teams";
import Title from "../components/Title/Title";
import { motion } from "framer-motion";

function Constructor() {
  return (
    <motion.div
      className="constructor-ranking-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        title="Constructor Standings"
        subtitle={`FORMULA ONE WORLD CONSTRUCTOR STANDINGS OF 2022`}
        dark
      />
      <Teams />
    </motion.div>
  );
}

export default Constructor;
