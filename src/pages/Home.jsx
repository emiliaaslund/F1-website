import React, { useState, useEffect } from "react";
import TopThree from "../components/TopThree/TopThree";
import Race from "../components/Race/Race";
import Title from "../components/Title/Title";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="main-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Race />
      <div className="top-three-text-wrapper">
        <Title
          title="Top 3 Drivers 2022"
          subtitle={`2022 FORMULA ONE TOP THREE STANDING`}
          light
        />

        <TopThree />
      </div>
    </motion.div>
  );
}

export default Home;
