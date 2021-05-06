import React from "react";
import Icon from "../Icon/Icon";
import "./UserInfo.scss";
function UserInfo(props) {
  return (
    <section className="UserInfo">
      <div className="account">
        <span className="username">{props.username}</span>
        <button className="message">Message</button>
        <button className="check">
          <Icon className="fas fa-user" />
          <Icon className="fas fa-check" />
        </button>
        <button className="down">
          <Icon className="fas fa-angle-down" />
        </button>
        <Icon className="fas fa-ellipsis-h" />
      </div>
      <ul className="accountInfo">
        <li>
          <span className="count">{props.accountInfo.posts}</span> Posts
        </li>
        <li>
          <span className="count">{props.accountInfo.followers}</span> Followers
        </li>
        <li>
          <span className="count">{props.accountInfo.following}</span> Following
        </li>
      </ul>
    </section>
  );
}

export default UserInfo;
