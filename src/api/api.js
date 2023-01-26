import axios from "axios";

export const getDriverStandings = async (year) => {
  const { data } = await axios
    .get(`https://ergast.com/api/f1/${year}/driverStandings.json`)
    .catch((error) => {
      console.error(error);
    });
  return data;
};

export const getUser = async () => {
  const { data } = await axios
    .get("http://localhost:3000/users")
    .catch((error) => {
      console.error(error);
    });
  return data;
};
