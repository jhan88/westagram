import { Link } from "react-router-dom";
import "./RoundProfile.scss";

function RoundProfile(props) {
  return (
    <section className="RoundProfile">
      <Link to="/profile">
        <img
          className="profileImg"
          src={props.profileImg}
          alt={props.username}
          style={{
            height: props.size,
            width: props.size,
          }}
        />
      </Link>
    </section>
  );
}

export default RoundProfile;
