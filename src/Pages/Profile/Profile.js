import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import ProfileBox from "../../Components/ProfileBox/ProfileBox";
import Story from "../../Components/Story/Story";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";
import profileData from "../../data/profileData";
import storyData from "../../data/storyData";
import "./Profile.scss";

function Profile() {
  const [data, setData] = useState({});
  let params = useParams();

  useEffect(() => {
    setTimeout(() => {
      setData(profileData[params.username]);
    }, 1000);
    return () => {};
  }, [params.username]);

  return (
    <section className="Profile">
      {Object.keys(data).length > 0 ? (
        <>
          <ProfileBox data={data} />
          <Story storyData={storyData} storyLength={6} />
          <ProfileMenu data={data} />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Profile;
