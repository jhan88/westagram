import { useState } from "react";
import Icon from "../Icon/Icon";
import "./UserComment.scss";

function UserComment(props) {
  const [isLiked, setIsLiked] = useState(props.userComment.isLiked);

  const toggleIsLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <section className="userComment">
      <span className="username">{props.userComment.username}</span>
      <span className="comment">{props.userComment.comment}</span>
      <Icon
        className={isLiked ? "fas fa-heart" : "far fa-heart"}
        onClick={toggleIsLiked}
      />
    </section>
  );
}

export default UserComment;
