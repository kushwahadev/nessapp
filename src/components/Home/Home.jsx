import { useEffect, useState } from "react";

import Card from "../Card";
import LineCard from "../LineCard";
function Home() {
  const [generalNews, setGeneralNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [lifestyleNews, setLifestyleNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [luxury, setLuxury] = useState([]);

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
        setGeneralNews(response.articles);
      } catch (error) {
        console.error(error);
      }
    }

    // get latest headlines
    async function headlines(query) {
      try {
        const news = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${Api_Key}`
        );
        const response = await news.json();
        setLatestNews(response.articles);
      } catch (error) {
        console.error(error);
      }
    }

    //get lifestyle news
    async function lifestyleNews(query) {
      try {
        const news = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${Api_Key}`
        );
        const response = await news.json();
        setLifestyleNews(response.articles);
      } catch (error) {
        console.error(error);
      }
    }

    // get sports news
    async function SportsNews(query) {
      try {
        const news = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${Api_Key}`
        );
        const response = await news.json();
        setSportsNews(response.articles);
      } catch (error) {
        console.error(error);
      }
    }

    // get luxury news
    async function luxuryNews(query) {
      try {
        const news = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${Api_Key}`
        );
        const response = await news.json();
        setLuxury(response.articles);
      } catch (error) {
        console.error(error);
      }
    }
    // calling function  to get news

    // handle first section
    getNews("general");
    headlines("latest");
    lifestyleNews("lifestyle");
    //handle second section
    SportsNews("sports");
    // handle third section
    luxuryNews("luxury");
  }, []);
  return (
    <>
      {/* first section  */}
      <div className="md:grid md:grid-cols-7 gap-2 md:px-4 mt-6 sm:px-2">
        <div className="col-span-2 px-8">
          <h1 className="  text-2xl font-bold text-gray-800 uppercase tracking-wider border-b-3 border-blue-500 p-2 relative">
            Latest
          </h1>
          {latestNews &&
            latestNews.slice(0, 12).map((item, index) => (
              <h1 key={index} className="py-4 text-base font-bold">
                {item.title}
                <br />
                <span className=" text-base font-light ">
                  {new Date(item.publishedAt).toLocaleString("en-US", {
                    timeZone: "Asia/Jakarta",
                    dateStyle: "long",
                  })}
                </span>
              </h1>
            ))}
        </div>
        <div className=" col-span-3 border-l-2 border-r-2 ">
          {generalNews &&
            generalNews
              .slice(0, 1)
              .map((item, index) =>
                item.urlToImage ? (
                  <Card
                    title={item.title}
                    content={item.description}
                    imageUrl={item.urlToImage}
                    key={index}
                    className="font-semibold text-xl"
                  />
                ) : null
              )}
          {generalNews &&
            generalNews
              .slice(1, 5)
              .map((item, index) =>
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
        <div className="col-span-2 px-6">
          <h1 className=" text-2xl font-bold text-gray-800 uppercase tracking-wider border-b-3 border-blue-500 p-2 relative">
            Lifestyle
          </h1>
          {lifestyleNews &&
            lifestyleNews
              .slice(0, 1)
              .map((item, index) =>
                item.urlToImage ? (
                  <Card
                    title={item.title}
                    content={item.description}
                    imageUrl={item.urlToImage}
                    key={index}
                    className="font-semibold text-xl"
                  />
                ) : null
              )}
          <div className="md:grid md:grid-cols-2 p-2">
            {lifestyleNews &&
              lifestyleNews
                .slice(1, 7)
                .map((item, index) =>
                  item.urlToImage ? (
                    <Card
                      title={item.title}
                      imageUrl={item.urlToImage}
                      key={index}
                      className=" text-sm font-semibold "
                    />
                  ) : null
                )}
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-4 p-2" /> <div></div>
      {/* second section  */}
      <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider border-b-3 border-blue-500 p-2 relative">
        Sports Section
        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
      </h2>
      <div className="md:grid md:grid-cols-4 gap-2 relative p-2">
        <div className=" border-r-4 border-t-4 p-2">
          {sportsNews &&
            sportsNews
              .slice(0, 4)
              .map((item, index) =>
                item.urlToImage ? (
                  <LineCard
                    title={item.title}
                    imageUrl={item.urlToImage}
                    key={index}
                    publishedAt={item.publishedAt}
                  />
                ) : null
              )}
        </div>
        <div className="  border-r-4 border-t-4 p-2">
          {sportsNews &&
            sportsNews
              .slice(4, 8)
              .map((item, index) =>
                item.urlToImage ? (
                  <LineCard
                    title={item.title}
                    imageUrl={item.urlToImage}
                    key={index}
                    publishedAt={item.publishedAt}
                  />
                ) : null
              )}
        </div>
        <div className="  border-r-4 border-t-4 p-2">
          {sportsNews &&
            sportsNews
              .slice(8, 12)
              .map((item, index) =>
                item.urlToImage ? (
                  <LineCard
                    title={item.title}
                    imageUrl={item.urlToImage}
                    key={index}
                    publishedAt={item.publishedAt}
                  />
                ) : null
              )}
        </div>
        <div className=" border-t-4 p-2">
          {sportsNews &&
            sportsNews
              .slice(12, 16)
              .map((item, index) =>
                item.urlToImage ? (
                  <LineCard
                    title={item.title}
                    imageUrl={item.urlToImage}
                    key={index}
                    publishedAt={item.publishedAt}
                  />
                ) : null
              )}
        </div>
      </div>
      <hr className="border-gray-300 h-0.5 w-full my-4 p-2" />
      {/* third section  */}
      <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider border-b-3 border-blue-500 p-2 md:py-6 relative">
        luxury
        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500"></span>
      </h2>
      <div className=" grid grid-cols-12 md:p-4 p-2 gap-2">
        <div className="p-2 col-span-8 border-r-2 border-black">
          {luxury &&
            luxury.slice(0, 1).map((item, index) =>
              item.urlToImage ? (
                <div key={index}>
                  <h1 className=" text-lg font-bold p-2"> {item.title}</h1>
                  <p className=" text-sm font-semibold p-2 ">
                    {" "}
                    {item.description}
                  </p>
                  <img
                    className=" w-full p-2 object-cover hover:opacity-85"
                    src={item.urlToImage}
                    alt="image"
                  />
                </div>
              ) : null
            )}
        </div>
        <div className="p-2 col-span-4">
          {luxury &&
            luxury
              .slice(1, 7)
              .map((item, index) =>
                item.urlToImage ? (
                  <LineCard
                    title={item.title}
                    imageUrl={item.urlToImage}
                    key={index}
                    publishedAt={item.publishedAt}
                  />
                ) : null
              )}
        </div>
      </div>
    </>
  );
}
export default Home;
