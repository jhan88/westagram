import "./Bio.scss";
function Bio(props) {
  return (
    <section className="Bio">
      <h3 className="title">{props.bio.title}</h3>
      <p className="content">{props.bio.content}</p>
    </section>
  );
}

export default Bio;
