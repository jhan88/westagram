import { useState } from 'react';
import Icon from '../../Components/Icon/Icon';
import ProfileBox from '../../Components/ProfileBox/ProfileBox';
import Story from '../../Components/Story/Story';
import Post from '../../Components/Post/Post';
import profileData from '../../data/profileData';
import storyData from '../../data/storyData';
import './Profile.scss';

function Profile() {
  const [menu, setMenu] = useState('Posts');

  const clickMenu = selectedMenu => {
    setMenu(selectedMenu);
  };
  const data = profileData[1];
  // 리뷰: 굳이 data 변수에 담을 이유가 없을 것 같아요!

  // const menuObj = {
  //   "Posts": <Post />,
  //   "Tagged": null
  // }

  return (
    <section className="Profile">
      <ProfileBox data={data} />
      <Story storyData={storyData} />

      <nav className="profileNav">
        <ul>
          <li
            className="Posts"
            onClick={() => clickMenu('Posts')}
            style={
              menu === 'Posts'
                ? { color: 'black', borderTopColor: 'black' }
                : { color: '#d3d3d3', borderTopColor: '#d3d3d3' }
            }
          >
            <Icon className="fas fa-table" />
            Posts
          </li>
          <li
            className="Tagged"
            onClick={() => clickMenu('Tagged')}
            style={
              menu === 'Tagged'
                ? { color: 'black', borderTopColor: 'black' }
                : { color: '#d3d3d3', borderTopColor: '#d3d3d3' }
            }
          >
            <Icon className="fas fa-id-card-alt" />
            Tagged
          </li>
          {/* 리뷰: nav부분도 같이 컴포넌트로 빼주시는 게 더 가독성이 좋을 것 같아요! */}
          {/* li 태그 내에서 Posts, Tagged 빼고는 다 동일해서
          Array.map()을 사용하면 반복을 줄일 수 있을 것 같아요! */}
        </ul>
      </nav>
      {menu === 'Posts' && <Post data={data.postImg} />}
      {menu === 'Tagged' && null}
      {/* {menuObj[menu]} */}
      {/* 리뷰: 이렇게 메뉴에 들어가는 컴포넌트를 객체에 저장해서 사용할 수 있습니다. */}
    </section>
  );
}

export default Profile;
