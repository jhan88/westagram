import { useState } from "react";
import "./UserAction.scss";
import Icon from "../Icon/Icon";

function UserAction(props) {
  const [isLiked, setIsLiked] = useState(props.data.isLiked);

  const toggleIsLiked = () => {
    setIsLiked(!isLiked);
  };

  const [isBookmarked, setIsBookmarked] = useState(props.data.isBookmarked);

  const toggleIsBookmarked = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <section className="UserAction">
      <ul className="iconList">
        <li>
          <Icon
            className={isLiked ? "fas fa-heart" : "far fa-heart"}
            onClick={toggleIsLiked}
          />
        </li>
        <li>
          <Icon className="far fa-comment" />
        </li>
        <li>
          <Icon className="far fa-paper-plane" />
        </li>
        <li>
          <Icon
            className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}
            onClick={toggleIsBookmarked}
          />
        </li>
      </ul>
      <div className="like">
        <span className="username">han</span>님 여러 명이 좋아합니다.
      </div>
      <p>
        {props.data.username} cloud · @{props.data.username}
      </p>
    </section>
  );
}

export default UserAction;
