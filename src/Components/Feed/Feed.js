import UserProfileBar from "../UserProfileBar/UserProfileBar";
import FeedImg from "../FeedImg/FeedImg";
import UserAction from "../UserAction/UserAction";
import FeedComment from "../FeedComment/FeedComment";
import "./Feed.scss";

function Feed(props) {
  return (
    <section className="Feed">
      <UserProfileBar data={props.data} />
      <FeedImg data={props.data} />
      <UserAction data={props.data} />
      <FeedComment data={props.data} />
    </section>
  );
}

export default Feed;
