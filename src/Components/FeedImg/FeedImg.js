import { useState } from "react";

import "./FeedImg.scss";

function FeedImg(props) {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const goNext = () => {
    if (index < props.data.feedImg.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <section className="feedImg">
      <button className="goPrev" onClick={goPrev}></button>
      <img src={props.data.feedImg[index]} alt="feed images" />
      <button className="goNext" onClick={goNext}></button>
    </section>
  );
}

export default FeedImg;
