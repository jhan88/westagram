import { useState } from "react";
import Icon from "../Icon/Icon";
import Post from "../Post/Post";
import "./ProfileMenu.scss";

function ProfileMenu(props) {
  const menuObj = {
    Posts: <Post postData={props.data.postImg} />,
    Tagged: null,
  };

  const [menu, setMenu] = useState("Posts");

  const clickMenu = (clickedMenu) => {
    setMenu(clickedMenu);
  };

  return (
    <section className="profileMenu">
      <nav>
        <ul>
          <li
            className="Posts"
            onClick={() => clickMenu("Posts")}
            style={
              menu === "Posts"
                ? { color: "black", borderTopColor: "black" }
                : { color: "#d3d3d3", borderTopColor: "#d3d3d3" }
            }
          >
            <Icon className="fas fa-table" />
            Posts
          </li>
          <li
            className="Tagged"
            onClick={() => clickMenu("Tagged")}
            style={
              menu === "Tagged"
                ? { color: "black", borderTopColor: "black" }
                : { color: "#d3d3d3", borderTopColor: "#d3d3d3" }
            }
          >
            <Icon className="fas fa-id-card-alt" />
            Tagged
          </li>
        </ul>
      </nav>
      {menuObj[menu]}
    </section>
  );
}

export default ProfileMenu;
