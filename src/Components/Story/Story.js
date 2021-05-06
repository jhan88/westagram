import { useState } from "react";
import RoundProfile from "../RoundProfile/RoundProfile";
import "./Story.scss";

function Story(props) {
  const [storyStart, setStart] = useState(0);

  const goPrev = () => {
    setStart(storyStart - 6);
  };
  const goNext = () => {
    setStart(storyStart + 6);
  };

  return (
    <section className="Story">
      <button
        className="goPrev"
        onClick={goPrev}
        style={
          storyStart === 0
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        {"<"}
      </button>
      {props.storyData.slice(storyStart, storyStart + 6).map((user, index) => {
        return (
          <div className="storyUser" key={index}>
            <RoundProfile
              username={user.username}
              profileImg={user.profileImg}
              size={"80px"}
            />
            <span className="username">{user.username}</span>
          </div>
        );
      })}
      <button
        className="goNext"
        onClick={goNext}
        style={
          storyStart + 6 >= props.storyData.length
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        {">"}
      </button>
    </section>
  );
}

export default Story;
