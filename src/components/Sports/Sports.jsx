import { useEffect, useState } from "react";

import LineCard from "../LineCard";

function Sports() {
  const [articles, setArticles] = useState([]);

  //   console.log(data.articles);
  useEffect(() => {
    const Api_Key = import.meta.env.VITE_API_KEY2;
    // get general news
    async function getNews(query) {
      try {
        const news = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${Api_Key}`
        );
        const response = await news.json();
        setArticles(response.articles);
      } catch (error) {
        console.error(error);
      }
    }
    getNews("Sports");
  }, []);
  return (
    <div>
      {articles.map((item, index) =>
        item.urlToImage ? (
          <LineCard
            title={item.title}
            content={item.description}
            imageUrl={item.urlToImage}
            key={index}
          />
        ) : null
      )}
    </div>
  );
}

export default Sports;
