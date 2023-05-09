import React, { useState, useEffect } from "react";
import TopThree from "../components/TopThree/TopThree";
import Race from "../components/Race/Race";
import Title from "../components/Title/Title";
import { motion } from "framer-motion";
import NewsApi from "newsapi";

function Home() {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const newsapi = new NewsApi(process.env.REACT_APP_API_KEY);
  //   newsapi.v2
  //     .topHeadlines({
  //       q: "formula one",
  //       language: "en",
  //       country: "us",
  //     })
  //     .then((response) => setArticles(response.articles))
  //     .catch((error) => console.error(error));
  // }, []);

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
          title="Top 3 Drivers 2023"
          subtitle={`2023 FORMULA ONE TOP THREE STANDING`}
          light
        />

        <TopThree />
      </div>
      <div>
        <h1>Latest Formula One News</h1>
        {articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
