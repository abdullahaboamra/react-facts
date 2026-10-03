import PropTypes from "prop-types";
import ReactLogo from "../assets/react.svg";
export default function Navbar({ title = "ReactFacts" }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <img className="nav-img" src={ReactLogo} alt="React Logo" />
        <h3 className="nav-title">{title}</h3>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};