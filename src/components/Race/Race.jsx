import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Race.scss";
import { motion } from "framer-motion";

function Race() {
  const [race, setRace] = useState([]);

  const getCircuit = async () => {
    const result = await fetch(`https://ergast.com/api/f1/2023.json`)
      .then((res) => res.json())
      .then((result) => setRace(result.MRData.RaceTable.Races[0]))
      .catch((error) => {
        console.error(error);
      });
  };

  const correctLocation = (race) => {
    if (race.Circuit?.Location.country === "UK") {
      return "Great%20Britain";
    }

    if (race.Circuit?.Location.country === "UAE") {
      return "Abu%20Dhab";
    }

    return race.Circuit?.Location.country;
  };

  useEffect(() => {
    getCircuit();
  }, []);

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.3 } },
  };

  return (
    <div className="race-section">
      <motion.div
        className="race-card"
        variants={variants}
        animate="animate"
        initial="initial"
      >
        <div className="race-wrapper">
          <div className="top-bar">
            <h2 className="next-race-title">NEXT RACE</h2>
            <h2 className="race-date">{race.date}</h2>
          </div>
          <div className="circuit-info">
            <img
              className="next-race-circuit-map"
              alt={`circuit-${race.raceName}-map`}
              src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/${correctLocation(
                race
              )}%20carbon.png.transform/8col/image.png`}
            />
            <h2 className="circuit-name">{race.raceName}</h2>
            <NavLink to={`/schedule/`}>
              <button className="btn-go-to-race">Read More</button>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Race;
