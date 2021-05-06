import "./Post.scss";

function Post(props) {
  return (
    <section className="Post">
      {props.data.map((postImg, index) => (
        <img key={index} src={postImg} alt="post" />
      ))}
    </section>
  );
}

export default Post;
