import React from "react";
import "./UserProfileBar.scss";
import Icon from "../Icon/Icon";
import RoundProfile from "../RoundProfile/RoundProfile";
function UserProfileBar(props) {
  return (
    <section className="UserProfileBar">
      <RoundProfile
        username={props.data.username}
        profileImg={props.data.profileImg}
        size={"40px"}
      />

      <span className="username">{props.data.username}</span>
      <Icon className="fas fa-ellipsis-h" />
    </section>
  );
}

export default UserProfileBar;
