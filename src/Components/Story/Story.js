import { useState } from 'react';
import RoundProfile from '../RoundProfile/RoundProfile';
import './Story.scss';

// 6과 같은 숫자가 반복되서 한 번만 변수로 선언해주고 사용하는 것이 더 좋습니다
// const STORY_LIMIT = 6;

function Story(props) {
  const [storyStart, setStart] = useState(0);

  const goPrev = () => {
    setStart(storyStart - 6);
    // setStart(storyStart - STORY_LIMIT);
  };
  const goNext = () => {
    setStart(storyStart + 6);
    // setStart(storyStart + STORY_LIMIT);
  };

  return (
    <section className="Story">
      <button
        className="goPrev"
        onClick={goPrev}
        style={
          storyStart === 0
            ? { visibility: 'hidden' }
            : { visibility: 'visible' }
          // 리뷰: {visibility: storyStart === 0 ? "hidden" : "visible"}
        }
      >
        {'<'}
      </button>
      {/* 여기서도 STORY_LIMIT 을 쓸 수 있겠네요! */}
      {props.storyData.slice(storyStart, storyStart + 6).map((user, index) => {
        return (
          <div className="storyUser" key={index}>
            <RoundProfile
              username={user.username}
              profileImg={user.profileImg}
              size={'80px'}
            />
            <span className="username">{user.username}</span>
          </div>
        );
      })}
      <button
        className="goNext"
        onClick={goNext}
        style={
          // 여기서도 STORY_LIMIT 을 쓸 수 있겠네요!
          storyStart + 6 >= props.storyData.length
            ? { visibility: 'hidden' }
            : { visibility: 'visible' }
        }
      >
        {'>'}
      </button>
    </section>
  );
}

export default Story;
