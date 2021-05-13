import RoundProfile from "../RoundProfile/RoundProfile";
import UserInfo from "../UserInfo/UserInfo";
import Bio from "../Bio/Bio";
import "./ProfileBox.scss";

function ProfileBox(props) {
  return (
    <section className="ProfileBox">
      <RoundProfile
        username={props.data.username}
        profileImg={props.data.profileImg}
      />
      <UserInfo
        username={props.data.username}
        accountInfo={props.data.accountInfo}
      />
      <Bio bio={props.data.bio} />
    </section>
  );
}

export default ProfileBox;
