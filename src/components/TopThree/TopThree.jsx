import React, { useState, useEffect } from "react";
import { getDriverStandings } from "../../api/api";

import "./TopThree.scss";
import { getUser } from "../../api/api";
import { motion } from "framer-motion";

function Mainpage() {
  const [topThree, setTopThree] = useState([]);
  const [user, setUser] = useState([]);

  const getTopThree = async () => {
    const data = await getDriverStandings(2022);
    setTopThree(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  };

  const getUserData = async () => {
    const data = await getUser();
    setUser(data);
  };

  useEffect(() => {
    getTopThree();
    getUserData();
  }, []);

  return (
    <div className="driver-mid-section">
      <div className="top-three-wrapper">
        {/* MAAAX         */}
        <motion.div
          className="top-three-card"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          <div className="standing-position">
            <h2>
              {topThree[0]?.position}. {topThree[0]?.Driver.givenName}{" "}
              {topThree[0]?.Driver.familyName}
            </h2>
          </div>

          <div className="score">Total points: {topThree[0]?.points}</div>
          <img
            src="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png"
            alt="max verstappen"
            className="position-image"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
            }}
          />
          <div className="team-name">{topThree[0]?.Constructors[0].name}</div>
        </motion.div>
        {/* CHARRRRRRLES           */}
        <motion.div
          className="top-three-card"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          <div className="standing-position">
            <h2>
              {topThree[1]?.position}. {topThree[1]?.Driver.givenName}{" "}
              {topThree[1]?.Driver.familyName}
            </h2>
          </div>
          <div className="score">Total points: {topThree[1]?.points}</div>
          <img
            src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png"
            alt="charles leclerc"
            className="position-image"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
            }}
          />
          <div className="team-name">{topThree[1]?.Constructors[0].name}</div>
        </motion.div>
        {/* CHECKO           */}
        <motion.div
          className="top-three-card"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          <div className="standing-position">
            <h2>
              {topThree[2]?.position}. {topThree[2]?.Driver.givenName}{" "}
              {topThree[2]?.Driver.familyName}
            </h2>
          </div>
          <div className="score">Total points: {topThree[2]?.points}</div>
          <img
            src="https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png"
            alt="sergio perez"
            className="position-image"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
            }}
          />

          <div className="team-name">{topThree[2]?.Constructors[0].name}</div>
        </motion.div>
      </div>
      <div className="winner-wrapper">
        <h2 className="driver-dummy-text">
          Oracle Red Bull Racing Wins F1 World Constructors’ Championship!
        </h2>
        <p className="dummy-paragraf">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          inventore maiores quasi beatae voluptates omnis ipsam voluptate
          commodi error! Sunt numquam omnis modi odio a aliquam alias delectus
          sint, blanditiis commodi, quasi deleniti fugiat, nisi inventore
          aliquid iste nesciunt. Soluta possimus numquam minus sequi officia
          inventore sed quasi consectetur hic.
        </p>
        <div className="winner-image">
          <div>
            <img
              src="https://images.lifestyleasia.com/wp-content/uploads/sites/5/2022/10/09172412/GettyImages-1431899086-1283x900.jpg?tr=w-1600"
              alt="red-bull"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
              }}
            />
          </div>
          <div>
            <img
              src="https://img.redbull.com/images/c_crop,x_1,y_0,h_3841,w_5761/c_fill,w_1920,h_1279/q_auto,f_auto/redbullcom/2022/10/24/elnriieuptnlhtbqzre2/max-berstappen-oracle-red-bull-racing-constructors-championship-celebrations"
              alt="red-bull"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
              }}
            />
          </div>
          <div>
            <img
              src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2731,w_4096/c_fill,w_1170,h_780/q_auto,f_auto/redbullcom/2022/10/18/mwzp2psc3fujtppjzc2u/max-verstappen-sergio-perez-emilia-romagna-grand-prix-2022"
              alt="red-bull"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
