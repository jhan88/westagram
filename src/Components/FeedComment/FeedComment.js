import { useState } from "react";
import Icon from "../Icon/Icon";
import UserComment from "../UserComment/UserComment";
import "./FeedComment.scss";

function FeedComment(props) {
  const [isFolded, setIsFolded] = useState(true);

  const foldUnfold = () => {
    setIsFolded(!isFolded);
  };

  const [commentList, setCommentList] = useState(props.data.feedComment);

  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment !== "") {
      setCommentList([
        ...commentList,
        { username: "han", comment: newComment, isLiked: false },
      ]);
    }

    setNewComment("");
  };

  return (
    <section className="FeedComment">
      <section className="commentList">
        {commentList.length > 2 ? (
          <p onClick={foldUnfold}>
            {isFolded ? `댓글 ${commentList.length}개 모두 보기` : `접기`}
          </p>
        ) : null}
        <ul>
          {commentList
            .slice(0, isFolded ? 2 : commentList.length)
            .map((userComment, index) => (
              <li key={index}>
                <UserComment userComment={userComment} />
              </li>
            ))}
        </ul>
      </section>

      <p>2시간 전</p>
      <section className="addComment">
        <Icon className="far fa-smile" />
        <input
          placeholder="댓글 달기..."
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button
          className="add"
          onClick={addComment}
          style={newComment === "" ? { opacity: 0.5 } : { opacity: 1 }}
        >
          게시
        </button>
      </section>
    </section>
  );
}

export default FeedComment;
