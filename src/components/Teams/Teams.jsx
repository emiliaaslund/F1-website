import React, { useState, useEffect } from "react";
import "./Teams.scss";
import { motion } from "framer-motion";

function Teams() {
  const [teams, setTeams] = useState([]);
  // const [teamStanding, setTeamStanding] = useState([]);

  const getTeams = async () => {
    const result = await fetch(
      `http://ergast.com/api/f1/2023/constructorStandings.json`
    )
      .then((res) => res.json())
      .then((result) =>
        setTeams(
          result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        )
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const correctTeamName = (team) => {
    if (team.Constructor.name === "Alfa Romeo") return "alfa-romeo-racing";
    if (team.Constructor.name === "Alpine F1 Team") return "alpine";
    if (team.Constructor.name === "Red Bull") return "red-bull-racing";

    return team.Constructor.name.toLowerCase().split(" ").join("-");
  };

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.3 } },
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="teams-cards">
      {teams?.map((team) => (
        <motion.div
          className="team-card"
          key={team.Constructor.constructorId}
          variants={variants}
          animate="animate"
          initial="initial"
        >
          <div className="card-top">
            <div className="place-position">
              <h1 className="position">{team.position}</h1>
            </div>
            <h3 className="points">
              {team.points}
              <span className="points-badge"> POINTS</span>
            </h3>
          </div>
          <img
            src={`https://www.formula1.com/content/dam/fom-website/teams/${2022}/${correctTeamName(
              team
            )}.png.transform/6col/image.png`}
            alt={`formula-${correctTeamName(team)}`}
          />

          <div className="top-bar">
            <div className="team-name">
              <h1>{team.Constructor.name}</h1>
              <div className="team-logo">
                <img
                  src={`https://www.formula1.com/content/dam/fom-website/teams/${2022}/${correctTeamName(
                    team
                  )}-logo.png.transform/2col/image.png`}
                  alt={`logo-${correctTeamName(team)}`}
                />
              </div>
            </div>
          </div>
          <div className="team-mid-bar">
            <div className="team-win">
              <p>Racewins. {team.wins}</p>
            </div>
            <div>
              <a href={team.Constructor.url} target="_blank">
                Read More
              </a>
            </div>
          </div>
          <div className="bottom-bar">
            <div>
              <p className="dummy-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda veritatis saepe hic delectus commodi ut labore? Libero
                corrupti deleniti perferendis nisi sapiente, maxime
                reprehenderit accusantium hic totam a laboriosam sequi.
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Teams;
