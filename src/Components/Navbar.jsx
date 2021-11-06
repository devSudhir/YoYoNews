import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Navbar = () => {
  const { darkTheme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          darkTheme ? "bg-secondary" : "bg-light"
        } p-2 fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.pinimg.com/originals/26/5b/11/265b1184cdfc341d454d2e9d1e94795f.jpg"
              alt="logo"
              width="30"
              height="22"
              className="mx-1"
            />
            YoYoNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => handleTheme()}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
