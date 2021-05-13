import React, { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import Feed from "../../Components/Feed/Feed";
import feedData from "../../data/feedData";
import "./Main.scss";

function Main() {
  const [data, setData] = useState([]);

  const getData = () => {
    setData(feedData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
      console.log("Mount feedData");
    }, 1000);

    return () => {};
  }, []);

  return (
    <section className="Main">
      {data.length > 0 ? (
        data.map((feed, index) => <Feed key={index} data={feed} />)
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Main;
