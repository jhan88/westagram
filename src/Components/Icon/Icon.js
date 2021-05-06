import "./Icon.scss";

function Icon(props) {
  return <i className={props.className} onClick={props.onClick} />;
}

export default Icon;
