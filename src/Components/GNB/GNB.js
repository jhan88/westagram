import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./GNB.scss";

function GNB() {
  return (
    <nav className="GNB">
      <section>
        <div className="logo"></div>
        <div className="search">
          <input className="fas" placeholder="&#xf002; Search" />
        </div>
        <ul className="iconList">
          <li>
            <Link to="/">
              <Icon className="fas fa-home" />
            </Link>
          </li>
          <li>
            <Icon className="far fa-paper-plane" />
          </li>
          <li>
            <Icon className="far fa-compass" />
          </li>
          <li>
            <Icon className="far fa-heart" />
          </li>
          <li>
            <Icon className="far fa-user-circle" />
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default GNB;
