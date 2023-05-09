import React, { useEffect, useState } from "react";
import { getDriverStandings } from "../../api/api";
import "./Drivers.scss";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";

function Drivers() {
  const [standing, setStanding] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [oneDriver, setOneDriver] = useState([]);

  const getStanding = async () => {
    const data = await getDriverStandings(2023);
    setStanding(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  };

  useEffect(() => {
    getStanding();
  }, []);

  const handleClick = async (id) => {
    const filterDriver = standing.filter(
      (driver) => driver.Driver.driverId === id
    );
    setOneDriver(...filterDriver);
    // console.log(filterDriver);
    setShowModal(true);
  };

  // const getFlagName = (driver) => {
  //   let given = driver.Driver.givenName
  //     .toLowerCase()
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");
  //   let family = driver.Driver.familyName
  //     .toLowerCase()
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");

  //   if (driver.Driver.familyName === "de Vries") {
  //     given = "nyck";
  //     family = "de-vries";
  //   }

  //   return `${given}-${family}`;
  // };

  //Chattens förslag:

  const getFlagName = (driver) => {
    switch (driver.Driver.nationality.toLowerCase()) {
      case "german":
        return "Germany";
      case "dutch":
        return "Netherlands";
      case "spanish":
        return "Spain";
      case "mexican":
        return "Mexico";
      case "french":
        return "France";
      case "finnish":
        return "Finland";
      case "british":
        return "United Kingdom";
      case "italian":
        return "Italy";
      case "canadian":
        return "Canada";
      case "australian":
        return "Australia";
      case "japanese":
        return "Japan";
      case "monegasque":
        return "Monaco";
      case "danish":
        return "Denmark";
      case "thai":
        return "Thailand";
      case "chinese":
        return "China";
      case "american":
        return "United States";
      default:
        return driver.Driver.nationality;
    }
  };

  const getDriverImageName = (driver, add = "", year = "2023") => {
    let given = driver.Driver.givenName
      .substr(0, 3)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let family = driver.Driver.familyName
      .substr(0, 3)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (driver.Driver.familyName === "de Vries" && add !== "") {
      given = "nyc";
      family = "dev";
    }

    return given + family + add;
  };

  //animation
  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.3 } },
  };

  return (
    <div className="driver-cards">
      {standing.map((driver) => (
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          className="driver-card"
          key={driver.Driver.driverId}
        >
          <div className="top-bar">
            <h2 className="position">{driver.position}</h2>
            <h3 className="points">{driver.points} POINTS</h3>
          </div>
          <div className="mid-bar">
            <div className="driver-name">
              <div className="team-color">
                <p>{driver.Driver.givenName}</p>
                <div className="bold">{driver.Driver.familyName}</div>
                <div className="more-driver-info">
                  <button
                    className="btn-for-more-driver-info"
                    onClick={() => handleClick(driver.Driver.driverId)}
                  >
                    Show More
                  </button>
                </div>
              </div>
              <img
                className="driver-flag"
                src={`https://media.formula1.com/content/dam/fom-website/flags/${getFlagName(
                  driver
                )}.gif`}
                alt={`${getFlagName(driver)}-flag`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                }}
              />
              {/* <img
                className="driver-flag"
                src={`https://www.formula1.com/content/fom-website/en/drivers/${getFlagName(
                  driver
                )}/_jcr_content/countryFlag.transform/1col/image.png`}
                alt={`${getFlagName(driver)}-1-flag`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  // currentTarget.src =
                  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png";
                }}
              /> */}
            </div>
          </div>
          <div className="bottom-bar">
            <div className="image-wrapper">
              <div className="number-wrapper">
                <img
                  className="placement-driver-number-image"
                  src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/${getDriverImageName(
                    driver,
                    "01"
                  ).toUpperCase()}.png.transform/2col/image.png`}
                  alt={`${getDriverImageName(driver)}-number-1`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png";
                  }}
                />
              </div>
              <img
                className="placement-driver-image"
                src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2023/${getDriverImageName(
                  driver,
                  "01",
                  2023
                )}.png.transform/2col/image.png`}
                alt={`${getDriverImageName(driver, 2023)}-1`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
      <div>
        {" "}
        <Modal
          onClose={() => setShowModal(false)}
          showModal={showModal}
          oneDriver={oneDriver}
        />
      </div>
    </div>
  );
}

export default Drivers;
