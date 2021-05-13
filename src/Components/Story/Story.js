import { useState } from "react";
import RoundProfile from "../RoundProfile/RoundProfile";
import "./Story.scss";

function Story(props) {
  const STORY_LENGTH = props.storyLength;

  const [startIndex, setStartIndex] = useState(0);

  const goPrev = () => {
    setStartIndex(startIndex - STORY_LENGTH);
  };
  const goNext = () => {
    setStartIndex(startIndex + STORY_LENGTH);
  };

  return (
    <section className="Story">
      <button
        className="goPrev"
        onClick={goPrev}
        style={{ visibility: startIndex === 0 ? "hidden" : "visible" }}
      >
        {"<"}
      </button>
      {props.storyData
        .slice(startIndex, startIndex + STORY_LENGTH)
        .map((user, index) => {
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
        style={{
          visibility:
            startIndex + STORY_LENGTH >= props.storyData.length
              ? "hidden"
              : "visible",
        }}
      >
        {">"}
      </button>
    </section>
  );
}

export default Story;
