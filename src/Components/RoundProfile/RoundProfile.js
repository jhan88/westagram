import { useHistory } from "react-router-dom";

import "./RoundProfile.scss";

function RoundProfile(props) {
  const history = useHistory();

  const goToProfile = () => {
    history.push(`/profile/${props.username}`);
  };

  return (
    <section className="RoundProfile">
      <img
        className="profileImg"
        src={props.profileImg}
        alt={props.username}
        style={{
          height: props.size,
          width: props.size,
        }}
        onClick={goToProfile}
      />
    </section>
  );
}

export default RoundProfile;
