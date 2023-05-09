import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { motion } from "framer-motion";

function ProfilePage() {
  const [users, setUsers] = useState([]);
  const [isInlogged, setIsInLogged] = useState([]);
  const [profileUser, setProfileUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDiv, setShowDiv] = useState(false);
  const navigate = useNavigate();

  //fixa så datan hämtas direkt
  const getData = async () => {
    let foundUser = JSON.parse(sessionStorage.getItem("user"));
    if (foundUser) {
      setIsInLogged(foundUser);
      // console.log(isInlogged);
    }
  };

  // const getPersonalInfo = async () => {
  //   const result = await fetch(`http://localhost:3000/users/`)
  //     .then((res) => res.json())
  //     .then((result) => setUsers(result));
  // };
  const getPersonalInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  //jämför inlogg med databas
  // const filterUser = async () => {
  //   setLoading(true);
  //   const findUser = users.filter(
  //     (user) => user.email === isInlogged.user.email
  //   );
  //   setProfileUser(findUser);
  //   setLoading(false);
  // };
  const filterUser = () => {
    setLoading(true);
    const findUser = users.filter(
      (user) => user.email === isInlogged.user.email
    );
    setProfileUser(findUser);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPersonalInfo();
      filterUser();
      getData();
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-wrapper">
        <motion.h1
          animate={{ y: 10, scale: 1 }}
          initial={{ scale: 0 }}
          className="profile-title"
        >
          Welcome {profileUser[0]?.username}! 👋
        </motion.h1>

        <div className="profile-card">
          <div className="profile-top-section">
            <div className="img-container">
              <img
                src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                alt="placeholder"
              />
            </div>
            <div className="profile-info">
              Username: {profileUser[0]?.username}
              <div className="member-since">
                Member since: {profileUser[0]?.id}
              </div>
              <div className="profile-fav">Favourite team: -</div>
              <button className="edit-btn" onClick={() => setShowDiv(true)}>
                Edit Profile <AiOutlineEdit />
              </button>
              {showDiv ? (
                <p className="dummytext">The button is under construction</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="profile-mid-section">
          <h2 className="profile-mid-title">This page is not completed yet </h2>

          <h4 className="random-text">
            Unfortunately this page is not ready yet, but i wanted to show that
            you can register and log in to your profile.
          </h4>

          <div className="text-area">
            <form action="" className="blog-from">
              <p>Just a design for now for the layout</p>
              <textarea className="blog" rows="6" cols="40"></textarea>
            </form>{" "}
            <div>
              <input type="submit" className="post-btn" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
