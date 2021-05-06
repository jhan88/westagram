import { useState } from "react";
import Icon from "../../Components/Icon/Icon";
import ProfileBox from "../../Components/ProfileBox/ProfileBox";
import Story from "../../Components/Story/Story";
import Post from "../../Components/Post/Post";
import profileData from "../../data/profileData";
import storyData from "../../data/storyData";
import "./Profile.scss";

function Profile() {
  const [menu, setMenu] = useState("Posts");

  const clickMenu = (selectedMenu) => {
    setMenu(selectedMenu);
  };
  const data = profileData[1];

  return (
    <section className="Profile">
      <ProfileBox data={data} />
      <Story storyData={storyData} />
      <nav className="profileNav">
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
      {menu === "Posts" && <Post data={data.postImg} />}
      {menu === "Tagged" && null}
    </section>
  );
}

export default Profile;
