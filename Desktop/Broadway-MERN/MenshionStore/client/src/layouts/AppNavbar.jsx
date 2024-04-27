import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/style.css";

export const AppNavbar = () => {
  return (
    <div>
      <div>
        <div className="header position1 d-flex container py-2 justify-content-between ">
          <div className="logo">
            <img src={logo} alt="" height="40px" />
          </div>
          <div className="navbar  w-75">
            <Link to="/" className="active text-decoration-none text-dark">
              HOME
            </Link>
            <Link to="/about" className="active text-decoration-none text-dark">
              ABOUT
            </Link>
            <Link
              to="/collection"
              className="active text-decoration-none text-dark"
            >
              OUR COLLECTION
            </Link>
            <Link
              to="/contact"
              className="active text-decoration-none text-dark"
            >
              CONTACT US
            </Link>
            <Link
              to="/newarrivals"
              className="active text-decoration-none text-dark"
            >
              NEW ARRIVALS
            </Link>
          </div>
          <div className="buttons"></div>
          <div className="hamburger">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className="header2 position1">
          <div className="icons">
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
