import React from "react";
import { useState, useEffect } from "react";
import Title from "../components/Title/Title";
import "./Schedule.scss";
import { motion } from "framer-motion";

function Schedule() {
  const [circuit, setCircuit] = useState([]);

  const getCircuits = async () => {
    const result = await fetch(`https://ergast.com/api/f1/2023.json`)
      .then((res) => res.json())
      .then((result) => setCircuit(result.MRData.RaceTable.Races));
  };

  useEffect(() => {
    getCircuits();
  }, []);

  const correctLocation = (race) => {
    if (race.Circuit.Location.country === "UK") {
      return "Great%20Britain";
    }

    if (race.Circuit.Location.country === "UAE") {
      return "Abu%20Dhab";
    }

    return race.Circuit.Location.country;
  };

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="schedule-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        title="F1 Schedule 2023"
        subtitle={`2023 FIA FORMULA ONE WORLD CHAMPIONSHIP RACE CALENDAR`}
      />
      <div className="circuit-2023-cards">
        {circuit.map((race) => (
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            className="racecircuit-card"
            key={race.Circuit.circuitId}
          >
            <div className="circuit-top-bar">
              <h2 className="cicruit-name">{race.Circuit.circuitName}</h2>
              <h3 className="race-date">{race.date}</h3>
            </div>
            <div className="circuit-image-wrapper">
              <img
                className="circuit-map"
                alt={`circuit-${race.raceName}-map`}
                src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/${correctLocation(
                  race
                )}%20carbon.png.transform/8col/image.png`}
              />
            </div>

            <div className="mid-section-wrapper">
              <h3 className="country-name">
                {race.Circuit.Location.locality}{" "}
                <span className="country-bold">
                  {race.Circuit.Location.country}
                </span>
              </h3>
            </div>
            <div className="time-table-wrapper">
              <div className="container">
                <table>
                  <thead>
                    <tr>
                      <th>Race Schedule</th>
                      <th>Date</th>
                      <th>Starttime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>First Practice</td>
                      <td>{race.FirstPractice.date}</td>
                      <td>
                        {race.FirstPractice.time.substr(
                          0,
                          race.FirstPractice.time.length - 1
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Second Practice</td>
                      <td>{race.SecondPractice.date}</td>
                      <td>
                        {race.SecondPractice.time.substr(
                          0,
                          race.SecondPractice.time.length - 1
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Third Practice</td>
                      <td>{race.ThirdPractice?.date}</td>
                      <td>
                        {race.ThirdPractice?.time.substr(
                          0,
                          race.ThirdPractice.time.length - 1
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Qualifying</td>
                      <td>{race.Qualifying.date}</td>
                      <td>
                        {race.Qualifying.time.substr(
                          0,
                          race.Qualifying.time.length - 1
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Race</td>
                      <td>{race.date}</td>
                      <td>{race.time.substr(0, race.time.length - 1)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Schedule;
