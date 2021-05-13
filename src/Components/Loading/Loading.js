import "./Loading.scss";

function Loading(props) {
  return (
    <section className="Loading" style={{ height: props.size }}>
      <img
        className="loading"
        src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
        alt="Loading"
      />
    </section>
  );
}
export default Loading;
