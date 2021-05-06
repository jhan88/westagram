import Feed from "../../Components/Feed/Feed";
import feedData from "../../data/feedData";
import React, { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import "./Main.scss";

function Main() {
  const [data, setData] = useState([]);

  const getData = () => {
    setData(feedData);
  };

  useEffect(() => {
    getData();

    return () => {
      console.log("Main will unmount");
    };
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
